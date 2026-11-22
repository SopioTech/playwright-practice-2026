import { test, expect } from "@playwright/test";

test("Check Element Text", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  const textSectionParagraph = await page
    .locator("textParagraph")
    .textContent();
  expect(textSectionParagraph).toContain("sample text");
});
