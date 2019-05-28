// eslint-disable-next-line
/// <reference path="../../../steps.d.ts"/>

const { I } = inject();

When('User types his email {string}', email => {
  I.fillField('#login_field', email);
});

When('Types his password {string}', password => {
  I.fillField('#password', password);
});

When('Clicks on {string} button', () => {
  I.click("//input[@name='commit']");
});

Then('{string} page should be displayed', () => {
  // From "app/app1/features/login.feature" {"line":11,"column":3}
  // throw new Error('Not implemented yet');
  I.wait(2);
});

Then('Clicks on {string} button', () => {
  // From "app/app1/features/login.feature" {"line":12,"column":3}
  // throw new Error('Not implemented yet');
});
