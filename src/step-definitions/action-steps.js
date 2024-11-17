const { Given, When } = require("@wdio/cucumber-framework");
const clearInput = require("./utils/clear-input");
const { pages } = require("../po/pages");

Given("I open login page", async function () {
  await pages("login").open();
});

When(
  "I input username: {string} and password: {string}",
  async function (username, password) {
    await pages("login").inputCredentials(username, password);
  }
);

When("I clear {string} input", async function (inputField) {
  await clearInput(inputField);
});

When("I click on login button", async function () {
  await pages("login").loginForm.loginBtn.click();
});
