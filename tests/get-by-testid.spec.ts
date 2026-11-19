import { test } from "@playwright/test";

test("getByLabel()", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByTestId("submit-button").click();
});
