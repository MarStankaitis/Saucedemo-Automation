const { Given, When } = require("@wdio/cucumber-framework");
const clearInput = require("./utils/clear-input");
const { pages } = require("../po");

Given("I open login page", async function () {
  return await pages("login").open();
});

When(
  "I input username: {string} and password: {string}",
  async function (username, password) {
    return await pages("login").inputCredentials(username, password);
  }
);

When("I clear {string} input", async function (inputField) {
  return clearInput(inputField);
});

When("I click on login button", async function () {
  return await pages("login").loginForm.loginBtn.click();
});
