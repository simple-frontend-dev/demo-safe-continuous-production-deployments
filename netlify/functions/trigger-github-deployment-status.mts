export default async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const payload = await req.json();

    console.log("Webhook payload:", payload);
    return new Response(`Hello, world!`);
  } catch (error) {
    console.error("Webhook error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send webhook" }),
    };
  }
};
