import { test, expect } from "@playwright/test";

test("Assertions on Attributes & CSS", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await expect(page.locator("#username")).toHaveAttribute(
    "placeholder",
    "Userame",
  );

  await expect(page.locator("//button[text() = 'Login']")).toHaveCSS(
    "border-radius",
    "8px",
  );
});
