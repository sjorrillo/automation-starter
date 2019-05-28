@Login
Feature: Login
  Login to github

Background:
  Given   "/login" page is opened

Scenario: User logs in using valid credentials
  When   User types his email "your+email@gmail.com"
  And    Types his password "123456"
  And    Clicks on "SignIn" button
  Then   "Dashboard" page should be displayed
  And    Clicks on "Logout" button