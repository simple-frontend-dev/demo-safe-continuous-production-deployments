import { defineConfig } from "vite";

console.log("Build NETLIFY_ENV:", process.env.NETLIFY_ENV);
console.log("Build CONTEXT:", process.env.CONTEXT);

export default defineConfig({
  define: {
    "import.meta.env.PUBLIC_ENV": JSON.stringify(process.env.VERCEL_ENV || process.env.NETLIFY_ENV || "development"),
    "import.meta.env.PUBLIC_SHA": JSON.stringify(process.env.VERCEL_GIT_COMMIT_SHA || process.env.COMMIT_REF || ""),
  },
});
