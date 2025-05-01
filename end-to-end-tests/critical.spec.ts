import { test, expect } from "@playwright/test";

test("is up and running", async ({ page }) => {
  const pageNavigation = await page.goto("/");

  expect(pageNavigation?.status()).toBe(200);
  await expect(page).toHaveTitle(
    /Simple Frontend - Safe Continuous Production Deployments/,
  );
  await expect(page.getByRole("heading", { level: 3 })).toHaveText(
    `Environment: ${process.env.PUBLIC_ENV}`,
  );
});
