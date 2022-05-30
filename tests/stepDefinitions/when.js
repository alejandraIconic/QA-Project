const { When } = require('@wdio/cucumber-framework');

const LoginPage = require('../pages/login.page');
const ProfilePage = require('../pages/profile.page');

const pages = {
    login: LoginPage,
    profile: ProfilePage
}

When(/^I login with (\w+) and (.+)$/, async (userName, password) => {
    await LoginPage.login(userName, password)
});

When(/^I click on the logout button$/, async () => {
    await ProfilePage.logout();
});

When(/^I login with a correct (\w+) and an incorrect (.+)$/, async (userName, password) => {
    await LoginPage.login(userName, password)
});

