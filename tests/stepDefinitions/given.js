const { Given } = require('@wdio/cucumber-framework');

const LoginPage = require('../pages/login.page');
const ProfilePage = require('../pages/profile.page');

const pages = {
    login: LoginPage,
    profile: ProfilePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});



