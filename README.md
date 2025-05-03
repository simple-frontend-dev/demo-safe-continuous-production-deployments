# Simpel Frontend Safe Continuous Production Deployments Blueprint

This demo repository cover the following use cases:

1. Run end-to-end tests after preview deployments to ensure your main branch is always stable. I chose Playwright as the end-to-end tests solution as it's reliable and efficient.

2. After you have merged your changes to your main branch, it deploys a preview of your main branch, run your end-to-end tests against it and when it passes, it automatically deploys to production

## Vercel

### Run end-to-end tests on Vercel branch previews:

Vercel has a friendly setup thanks to github integration with deployment events.

I have written a [guide](https://www.simplefrontend.dev/docs/ci/automated-end-to-end-tests/#ci-setup-with-github-actions) to help you setup automated end-to-end tests against your deployed branches.

### Run end-to-end tests before deploying to production:

Here my recommendation is simply to go with a manual approach.

1. Ignore production build step: in your Vercel project git settings, go to "Ignored Build Step" and change the behaviour to "Only build pre-production". This will ensure you are no automatically building and deploying to production after merges to your default branch

2. Deploy manually with Github Actions. Vercel has a good guide [here](https://vercel.com/guides/how-can-i-use-github-actions-with-vercel):

   2.1. First build and deploy to preview environment and capture the preview deployment url

   2.2. Run your end-to-end tests against this preview deployment url

   2.3. On success, build and deploy to production

   I have an example in this demo repository: [deploy-production-vercel.yml](./.github/workflows/deploy-production-vercel.yml)

## Netlify
