const { Given } = require('@wdio/cucumber-framework');

const LoginPage = require('../pages/login.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

