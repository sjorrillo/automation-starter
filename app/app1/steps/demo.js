// eslint-disable-next-line
/// <reference path="../../../steps.d.ts"/>
import { expect } from 'chai';

const { I } = inject();
// Add in your custom step files

When('I am on page {string}', url => {
  I.amOnPage(url);
});

Then('I see {string}', message => {
  I.see(message, { xpath: "//div[@class='d-md-flex flex-items-center gutter-md-spacious']" });
});

Then('I click on {string} option', async butonText => {
  const context = locate({ xpath: "//a[@class='HeaderMenu-link no-underline mr-3']" });
  I.seeElement(context);
  const label = await I.grabTextFrom(context);
  console.log({ label, butonText, a: butonText === label });
  expect('Sign in').to.equal(butonText);
  I.click(context);
});


Then('The {string} page is displayed', async path => {
  I.seeInCurrentUrl(path);
});
