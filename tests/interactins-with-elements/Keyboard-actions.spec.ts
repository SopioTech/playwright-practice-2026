import { test } from "@playwright/test";

test("Keyboard-actions.spec.ts", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.click("#keyboardInput");

  const text = "Hello World from keyboard";
  await page.keyboard.type("hello world from keyboard", { delay: 100 });

  await page.waitForTimeout(2000);

  await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);

  for (let i = 0; i < text.length; i++) {
    await page.keyboard.press("Backspace");
    await page.waitForTimeout(100);
  }
});
