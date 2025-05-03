import { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  try {
    console.log(req);
    console.log(context);
    console.log(req.body);
    return new Response(`Hello, world!`);
  } catch (error) {
    console.error("Webhook error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send webhook" }),
    };
  }
};
