import { test } from "@playwright/test";

test("clicking", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.fill("#username", "myUsername");
  await page
    .locator("email")
    .pressSequentially("qa@tester.com", { delay: 300 });
});
