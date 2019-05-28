// eslint-disable-next-line
/// <reference path="../../steps.d.ts"/>

const { I } = inject();

Given('{string} page is opened', url => {
  I.amOnPage(url);
});
