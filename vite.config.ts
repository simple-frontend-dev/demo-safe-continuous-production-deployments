import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "import.meta.env.PUBLIC_ENV": JSON.stringify(process.env.VERCEL_ENV || process.env.NETLIFY_ENV || "development"),
    "import.meta.env.PUBLIC_SHA": JSON.stringify(process.env.VERCEL_GIT_COMMIT_SHA || process.env.COMMIT_REF || ""),
  },
});
