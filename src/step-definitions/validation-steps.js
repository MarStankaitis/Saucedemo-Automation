const { Then } = require("@wdio/cucumber-framework");
const compareText = require("./utils/compare-text");
const inventoryPage = require("../po/pages/inventory.page");

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
