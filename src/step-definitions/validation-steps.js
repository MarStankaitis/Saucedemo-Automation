const { Then } = require("@wdio/cucumber-framework");
const compareText = require("./utils/compare-text");
const inventoryPage = require("../po/pages/inventory.page");
const loginPage = require("../po/pages/login.page");

Then("I should get an error message {string}", async function (errorText) {
  const errorMessage = await loginPage.loginForm.errorMessage.getText();
  return compareText(errorMessage, errorText, "be equal to");
});

Then("I should be redirected to inventory page", async function () {
  const url = await browser.getUrl();
  return await expect(url).toBe("https://www.saucedemo.com/inventory.html");
});

Then(
  "dashboard title should {string} {string}",
  async function (shouldBeParameter, titleText) {
    const dashboardTitle =
      await inventoryPage.inventoryHeader.inventoryLogo.getText();
    return compareText(dashboardTitle, titleText, shouldBeParameter);
  }
);
