const compareText = require("./utils/compare-text");
const { Then } = require("@wdio/cucumber-framework");
const { pages } = require("../po/pages");

Then("I should get an error message {string}", async function (errorText) {
  const errorMessage = await pages("login").loginForm.errorMessage.getText();
  compareText(errorMessage, errorText, "be equal to");
});

Then("I should be redirected to inventory page", async function () {
  const url = await browser.getUrl();
  await expect(url).toBe("https://www.saucedemo.com/inventory.html");
});

Then(
  "I expect the dashboard title {string} {string}",
  async function (shouldBeParameter, titleText) {
    const dashboardTitle = await pages(
      "inventory"
    ).inventoryHeader.inventoryLogo.getText();
    compareText(dashboardTitle, titleText, shouldBeParameter);
  }
);
