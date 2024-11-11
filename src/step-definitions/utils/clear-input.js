const { pages } = require("./../../po");

async function clearInput(inputField) {
  if (inputField.toLowerCase() === "username") {
    await pages("login").loginForm.inputUsername.clearValue();
  } else if (inputField.toLowerCase() === "password") {
    await pages("login").loginForm.inputPassword.clearValue();
  } else {
    throw Error(`"${inputField}" is not a valid field to be cleared`);
  }
}

module.exports = clearInput;
