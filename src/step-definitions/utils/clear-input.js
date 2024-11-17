const { pages } = require("./../../po/pages");

async function clearInput(inputField) {
  inputField = inputField.toLowerCase();

  switch (inputField) {
    case "username":
      await pages("login").loginForm.inputUsername.clearValue();
      break;
    case "password":
      await pages("login").loginForm.inputPassword.clearValue();
      break;
    default:
      throw new Error(`"${inputField}" is not a valid field to be cleared`);
  }
}

module.exports = clearInput;
