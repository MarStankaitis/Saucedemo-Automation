const LoginFormComponent = require("../components/login/loginform.component");
const LoginHeaderComponent = require("../components/login/loginheader.component");

class LoginPage {
  constructor() {
    this.loginForm = new LoginFormComponent();
    this.loginHeader = new LoginHeaderComponent();
  }

  async open() {
    await browser.url("https://www.saucedemo.com/");
  }

  async inputCredentials(username, password) {
    await this.loginForm.inputUsername.setValue(username);
    await browser.pause(2000);
    await this.loginForm.inputPassword.setValue(password);
    await browser.pause(2000);
  }
}

module.exports = new LoginPage();
