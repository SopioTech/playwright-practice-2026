import { test, expect } from "@playwright/test";

test("Check Input Value", async ( { page }) => {
  
await page.goto("https://selectors-practice.onrender.com/");

const inputField = page.locator ("#username");
await inputField.fill("testuser@qa.com");

const inputValue = await inputField.inputValue();
expect (inputValue).toBe("testuser@qa.com");

});