import { test, expect } from "@playwright/test";

test("Combining Multiple Assertions", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  const element = page.locator("buttonOutput");
  await expect(element).not.toBeVisible();
  expect(await element.textContent()).toBeFalsy();
  await expect(element).toHaveClass(/output/);
});
