# Simple Frontend Safe Continuous Production Deployments Blueprint

This demo repository cover the following use cases:

1. Run end-to-end tests after preview deployments to ensure your main branch is always stable. I chose Playwright as the end-to-end tests solution as it's reliable and efficient.

2. After you have merged your changes to your main branch, it deploys a preview of your main branch, run your end-to-end tests against it and when it passes, it automatically deploys to production

## Vercel

### Run end-to-end tests on Vercel branch previews:

Vercel has a friendly setup thanks to github integration with deployment events.

I have written a [guide](https://www.simplefrontend.dev/docs/ci/automated-end-to-end-tests/#ci-setup-with-github-actions) to help you setup automated end-to-end tests against your deployed branches.

### Run end-to-end tests before deploying to production:

Here my recommendation is to rely on Vercel `repository_dispatch` event

## Netlify
