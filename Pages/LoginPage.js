exports.LoginPage = class LoginPage {

constructor(page) 

{
 
  this.userName_TextBox = page.locator('[data-test="username"]');
  this.password_TextBox = page.locator('[data-test="password"]');
  this.loginBtn = page.locator('[data-test="login-button"]');

}   


async login(username, password) {
  await this.userName_TextBox.click()
  await this.userName_TextBox.fill(username);
  await this.password_TextBox.click()
  await this.password_TextBox.fill(password);
  await this.loginBtn.click();

} 



}

