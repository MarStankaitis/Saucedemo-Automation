const { Given, When } = require("@wdio/cucumber-framework");
const loginPage = require("../po/pages/login.page");

Given("I open login page", async function () {
  return await loginPage.open();
});

When("I login with {string} and {string}", async function (username, password) {
  return await loginPage.inputCredentials(username, password);
});

When("I click on login button", async function () {
  return await loginPage.loginForm.loginBtn.click();
});
