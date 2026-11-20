import { test } from "@playwright/test";

test("Hover Action", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.hover("div.menu");

  await page.waitForTimeout(2000);

  await page.click("#submenuItem");

  await page.mouse.move(0, 0);
});
