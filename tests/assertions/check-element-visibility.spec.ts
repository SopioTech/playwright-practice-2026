import { test, expect } from "@playwright/test";

test("check if element is visible", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  const selector = "//h2[text() = 'Text Section']";

  await page.locator(selector).scrollIntoViewIfNeeded();

  const isTextSectionHeaderVisible = await page.locator(selector).isVisible();

  expect(isTextSectionHeaderVisible).toBe(true);

  expect(isTextSectionHeaderVisible).toBeTruthy();
});
