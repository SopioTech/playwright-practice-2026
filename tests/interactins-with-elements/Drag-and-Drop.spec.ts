import { test } from "@playwright/test";

test("Drag & Drop", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page
    .locator("//h2[text() = 'Todo Drag & Drop']")
    .scrollIntoViewIfNeeded();

  const finishReportTodo = page.locator("//li[text()= 'Finish report']");

  const doneZone = page.locator("#doneList");

  await finishReportTodo.dragTo(doneZone);
  await page.waitForTimeout(1000);
  await page.dragAndDrop("//li[text()= 'Buy groceries')", "#doneList"); 
});
/// hello world   g32b