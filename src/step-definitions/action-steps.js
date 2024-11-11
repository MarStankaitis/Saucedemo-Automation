const { Given, When } = require("@wdio/cucumber-framework");
const clearInput = require("./utils/clear-input");
const loginPage = require("../po/pages/login.page");

Given("I open login page", async function () {
  return await loginPage.open();
});

When(
  "I input username: {string} and password: {string}",
  async function (username, password) {
    return await loginPage.inputCredentials(username, password);
  }
);

When("I clear {string} input", async function (inputField) {
  return clearInput(inputField);
});

When("I click on login button", async function () {
  return await loginPage.loginForm.loginBtn.click();
});
