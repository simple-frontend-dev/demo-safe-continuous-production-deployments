import { test, expect } from "@playwright/test";

test("is up and running", async ({ page }) => {
  const pageNavigation = await page.goto("/");

  expect(pageNavigation?.status()).toBe(200);
});

test("has correct title and environment", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Simple Frontend - Safe Continuous Production Deployments/);
  await expect(page.getByRole("heading", { level: 3 }).first()).toHaveText(`Environment: ${process.env.PUBLIC_ENV}`);
});
