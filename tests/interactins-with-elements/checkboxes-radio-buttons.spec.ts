import { test } from "@playwright/test";

test("clicking", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.check('div.checkbox-group input[value = "Option 1"]');

  await page.waitForTimeout(2000);

  await page.uncheck('div.checkbox-group input[value = "Option 1"]');

  await page.click('div.checkbox-group input[value = "Option 1"]');

  await page.waitForTimeout(2000);

  await page.getByRole("radio", { name: "Choice A" }).check();
});
