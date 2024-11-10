class LoginFormComponent {
  get inputUsername() {
    return $("#user-name");
  }
  get inputPassword() {
    return $("#password");
  }

  get loginBtn() {
    return $("#login-button");
  }
  get errorMessage() {
    return $(".error-message-container.error");
  }
}

module.exports = LoginFormComponent;
