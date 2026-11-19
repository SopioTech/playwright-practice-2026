import { expect, test } from "@playwright/test";

test("getByText()", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page
    .getByText("This is a simple text for Playwright assertions.")
    .isVisible();
});
