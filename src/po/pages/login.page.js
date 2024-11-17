const { LoginForm, LoginHeader } = require("./../components");

class LoginPage {
  loginForm = new LoginForm();
  loginHeader = new LoginHeader();

  async open() {
    await browser.url("https://www.saucedemo.com/");
  }

  async inputCredentials(username, password) {
    await this.loginForm.inputUsername.setValue(username);
    await this.loginForm.inputPassword.setValue(password);
  }
}

module.exports = LoginPage;
