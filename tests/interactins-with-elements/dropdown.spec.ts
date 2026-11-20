import { test } from "@playwright/test";

test("Dropdowns", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.locator("#dropdownMenu").scrollIntoViewIfNeeded();

  await page.selectOption("#dropdownMenu", "Blue");

  await page.waitForTimeout(2000);

  await page.selectOption("#dropdownMenu", "Red");

  await page.waitForTimeout(2000);

  await page.selectOption("#dropdownMenu", "Green");
});
