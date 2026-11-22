import { test, expect } from "@playwright/test";

test("Assertions on API Response", async ({ page }) => {
  const response = await page.request.get(
    "https://selectors-practice.onrender.com/",
  );

  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.id).toBe(1);
  expect(data.title).toBeTruthy();
});
