const compareText = require("./utils/compare-text");
const { Then } = require("@wdio/cucumber-framework");
const { pages } = require("../po");

Then("I should get an error message {string}", async function (errorText) {
  const errorMessage = await pages("login").loginForm.errorMessage.getText();
  return compareText(errorMessage, errorText, "be equal to");
});

Then("I should be redirected to inventory page", async function () {
  const url = await browser.getUrl();
  return await expect(url).toBe("https://www.saucedemo.com/inventory.html");
});

Then(
  "dashboard title should {string} {string}",
  async function (shouldBeParameter, titleText) {
    const dashboardTitle = await pages(
      "inventory"
    ).inventoryHeader.inventoryLogo.getText();
    return compareText(dashboardTitle, titleText, shouldBeParameter);
  }
);
