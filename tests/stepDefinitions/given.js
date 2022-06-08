const { Given } = require('@wdio/cucumber-framework');

const LoginPage = require('../pages/login.page');
const ProfilePage = require('../pages/profile.page');
const BookStorePage = require('../pages/bookstore.page');

const pages = {
    login: LoginPage,
    profile: ProfilePage,
    books: BookStorePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

// Given(/^I am a logged user on the (\w+) page$/, async (page) => {
//     await pages[page].open()
// });

// Given(/^I am a non logged user on the (\w+) page$/, async (page) => {
//     await pages[page].open()
// });


