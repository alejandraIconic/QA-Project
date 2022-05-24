const { When } = require('@wdio/cucumber-framework');

const LoginPage = require('../pages/login.page');

const pages = {
    login: LoginPage
}

When(/^I login with (\w+) and (.+)$/, async (userName, password) => {
    await LoginPage.login(userName, password)
});


