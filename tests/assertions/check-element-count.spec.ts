import { test, expect } from "@playwright/test";

test("Check Element Count", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  const buttonCount = await page.locator("button").count();
  expect(buttonCount).toBeGreaterThan(4);

  const fruitsCount = await page.locator("ul [id='searchOptions'] li").count();

  expect(fruitsCount).toBe(4);
});
