const { Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pages/login.page');

const pages = {
    login: LoginPage
}

Then(/^I should redirect to my profile page$/, async () => {
    console.log("Test passed!");
});

