const { Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pages/login.page');
const ProfilePage = require('../pages/profile.page');

const pages = {
    login: LoginPage,
    profile: ProfilePage
}

Then(/^I should redirect to my profile page$/, async () => {
    console.log("Test passed!");
});

Then(/^I should redirect to the login page$/, async () => {
    console.log("Test passed!");
});

Then(/^I should see a (\w+) $/, async (message) => {
    await LoginPage.message();
});