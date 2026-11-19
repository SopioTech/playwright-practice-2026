import { test } from "@playwright/test";

test("getByrole()", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("checkbox", { name: "Option 1" }).click();
  await page.getByRole("radio", { name: "Choice A" }).check();
  await page.getByRole("textbox", { name: "Email" }).fill("test@example.com");

  await page.getByRole("heading", { name: "Welcome" }).isVisible();
  await page.getByRole("listitem", { name: "Laptop" }).isVisible();
  await page.getByRole("link", { name: "Example Website" }).click();
});
