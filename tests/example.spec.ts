import { test, expect } from "@playwright/test";

test(
  "Selectors Practice - Basic Interactions",
  { tag: "@smoke" },
  async ({ page }) => {
    //navitage to the new website
    await page.goto("https://selectors-practice.onrender.com/");

    //wait for main heading to be visible

    await page.waitForSelector("h2[title='Login-form']");

    //assertion -verify page title test

    const heading = await page.textContent("h2[title='Login-form']");
    expect(heading).toEqual("Login Form");

    // fill input using ID selector
    await page.fill("#username", "Alexa");

    //fill email field using placeholder selector
    await page.fill("input[placeholder = 'Password']", "john@exmaple.com");

    //click button using xpath attriubute and text selector

    await page.click("//button[@type='submit'][text()='Login']");

    //wait for success message and get the text

    await page.waitForSelector("#loginMessage");
    const successMessage = await page.textContent("#loginMessage");

    // assertion -  verify success message appears

    expect(successMessage).toContain("Alexa");
  },
);
