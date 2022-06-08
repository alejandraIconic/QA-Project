const { When } = require('@wdio/cucumber-framework');

const LoginPage = require('../pages/login.page');
const ProfilePage = require('../pages/profile.page');
const BookStorePage = require('../pages/bookstore.page');

const pages = {
    login: LoginPage,
    profile: ProfilePage,
    books: BookStorePage
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

When(/^I click on the New User button$/, async () => {
    await LoginPage.goNewUser();
});

// When(/^I type in the search box a existing (\w+)$/, async (titleLabel) => {
//     //TODO: function to compare seacrh text with titleName
//     //await ProfilePage.;
// });

// When(/^I type in the search box a non existing (\w+)$/, async (titleLabel) => {
//     //TODO: function to compare seacrh text with titleName
//     //await ProfilePage.;
// });

// When(/^I click on a book in the bookstore$/, async () => {
//     //TODO: function to redirect to book info
//     //await ProfilePage.;
// });

// When(/^I click on a book in the bookstore$/, async () => {
//     //TODO: function to redirect to book info
//     //await ProfilePage.;
// });

// When(/^I click on the Add To Your Collection button$/, async () => {
//     //TODO: function to click the Add button
//     //await ProfilePage.;
// });

// When(/^I go to my profile back$/, async () => {
//     //TODO: function to redirect to profile page
//     //await ProfilePage.;
// });


