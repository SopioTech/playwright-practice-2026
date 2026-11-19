import { test } from "@playwright/test";

test("Advanced Locator Options", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page
    .locator("css=form", { has: page.locator("input[placeholder='Password']") })
    .locator("css=input[placeholder = 'Password']")
    .fill("Text here");
});
