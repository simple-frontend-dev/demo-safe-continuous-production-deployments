const GITHUB_API_ENDPOINT =
  "https://api.github.com/repos/simple-frontend-dev/safe-continuous-deployments";
const GITHUB_TOKEN = process.env.GITHUB_DEPLOYMENT_STATUS;

export default async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const { deploy_ssl_url, commit_ref, branch, id, site_id } =
      await req.json();

    if (!branch) {
      console.error("Branch not found");
      return new Response("Branch not found", { status: 400 });
    }

    if (branch === "main") {
      // for the main branch, we will trigger a repository_dispatch event to avoid triggering this workflow as skipped on pull requests
      const dispatch = await fetch(`${GITHUB_API_ENDPOINT}/dispatches`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
        body: JSON.stringify({
          event_type: "netlify.deployment.success",
          client_payload: {
            deploy_id: id,
            site_id: site_id,
            url: deploy_ssl_url,
            sha: commit_ref,
            environment: "Production-preview-netlify",
          },
        }),
      });

      if (!dispatch.ok) {
        console.error("GitHub repository dispatch failed:", dispatch);
        return new Response("GitHub repository dispatch failed", {
          status: 500,
        });
      }

      return new Response("GitHub repository dispatch triggered", {
        status: 200,
      });
    }

    // Step 1: Create GitHub Deployment
    const deployment = await fetch(`${GITHUB_API_ENDPOINT}/deployments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
      body: JSON.stringify({
        auto_merge: false,
        ref: commit_ref,
        environment: "Preview",
        production_environment: false,
        required_contexts: [],
        description: "Netlify branch preview",
        sha: commit_ref,
      }),
    });

    if (!deployment.ok) {
      const errorText = await deployment.text();
      console.error("GitHub deployment creation failed:", errorText);
      return new Response(`GitHub deployment creation failed: ${errorText}`, {
        status: 500,
      });
    }

    const deploymentData = await deployment.json();

    // Step 2: Update GitHub Deployment Status
    const status = await fetch(
      `${GITHUB_API_ENDPOINT}/deployments/${deploymentData.id}/statuses`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
        body: JSON.stringify({
          state: "success",
          description: "Netlify branch preview ready",
          environment: "Preview",
          environment_url: deploy_ssl_url,
          auto_inactive: false,
        }),
      },
    );

    if (!status.ok) {
      const errorText = await status.text();
      console.error("GitHub deployment status update failed:", errorText);
      return new Response(
        `GitHub deployment status update failed: ${errorText}`,
        {
          status: 400,
        },
      );
    }

    return new Response("Deployment status updated", { status: 200 });
  } catch (error) {
    console.error("Unable to update GitHub deployment status:", error);
    return new Response("Unable to update GitHub deployment status", {
      status: 500,
    });
  }
};
