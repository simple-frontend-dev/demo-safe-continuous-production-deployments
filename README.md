# Simple Frontend Safe Continuous Deployments Blueprint

This example repository covers the following use workflows:

1. Run end-to-end tests after branch preview deployments to ensure your pull requests pass your critical tests and that your main branch remains stable. I chose Playwright as the end-to-end tests solution as it is reliable and efficient.

2. After you have merged your changes to your main branch, it deploys a preview of your main branch, run your end-to-end tests against it and when they pass, it automatically deploys your changes to production.

## Vercel configuration

You can follow this [guide](https://www.simplefrontend.dev/guides/how-to-deploy-safely-with-vercel/).

The recipe for running the end-to-end tests after branch preview deployments is in [pull-request-end-to-end-tests.yml](./.github/workflows//pull-request-end-to-end-tests.yml).

The recipe for running your end-to-end tests before deploying to production is in [deploy-production-vercel.yml](./.github/workflows/deploy-production-vercel.yml).

## Netify configuration

You can follow this [guide](https://www.simplefrontend.dev/guides/how-to-deploy-safely-with-netlify/).

The recipe for running the end-to-end tests after branch preview deployments is in [pull-request-end-to-end-tests.yml](./.github/workflows//pull-request-end-to-end-tests.yml).

The recipe for running your end-to-end tests before deploying to production is in [deploy-production-netlify.yml](./.github/workflows/deploy-production-netlify.yml).
