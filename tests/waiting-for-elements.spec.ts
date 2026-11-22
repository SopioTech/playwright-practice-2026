import { test } from "@playwright/test";

test("Waiting for Elements", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  const welcomeMessage = page.locator("#welcomeMessage");
  await welcomeMessage.waitFor();
  const welcomeText = await welcomeMessage.textContent({ timeout: 5000 });
  console.log("Welcome message:", welcomeText);

  await page.click("#loadDataButton");
  await page.waitForLoadState("networkidle");
  const dataText = await page.textContent("#data");
  console.log("Loaded data:", dataText);
});
