const loginPage = require("../../po/pages/login.page");

async function clearInput(inputField) {
  if (inputField.toLowerCase() === "username") {
    await loginPage.loginForm.inputUsername.clearValue();
  } else if (inputField.toLowerCase() === "password") {
    await loginPage.loginForm.inputPassword.clearValue();
  } else {
    throw Error(`"${inputField}" is not a valid field to be cleared`);
  }
}

module.exports = clearInput;
