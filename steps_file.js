// eslint-disable-next-line
/// <reference path="./steps.d.ts"/>
// in this file you can append custom step methods to 'I' object

module.exports = function inject() {
  return actor({
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    login(email, password) {
      within({ xpath: "//div[@class='auth-form-body mt-3']" }, () => {
        this.fillField('#login_field', email);
        this.fillField('#password', password);
        this.click('Sign in');
      });
    },
  });
};
