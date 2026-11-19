import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).click();
  await page
    .getByRole("textbox", { name: "Username" })
    .fill("students@example.com");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("12345");
  await page.getByText("Remember Me USA Canada UK").click();
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("1234567");
  await page.getByPlaceholder("Password").press("Enter");
  await page.getByRole("button", { name: "Login" }).click();
});
