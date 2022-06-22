const { When } = require('@wdio/cucumber-framework');

const LoginPage = require('../pages/login.page');
const ProfilePage = require('../pages/profile.page');
const BookStorePage = require('../pages/bookstore.page');

const pages = {
    login: LoginPage,
    profile: ProfilePage,
    books: BookStorePage
}

When(/^I login with a correct (\w+) and an incorrect (.+)$/, async (userName, password) => {
    await LoginPage.login(userName, password)
});

When(/^I login with a incorrect (\w+) and an incorrect (.+)$/, async (userName, password) => {
    await LoginPage.login(userName, password)
});

When(/^I login with (\w+) and (.+)$/, async (userName, password) => {
    await LoginPage.login(userName, password)
});

When(/^I click on the delete button$/, async () => {
    await ProfilePage.deleteBooks()
    await browser.pause(3000)
});

When(/^I click on the Go To Book Store button$/, async () => {
    await ProfilePage.goToBookstore()
});

When(/^I click on a book in the bookstore$/, async () => {
    await ProfilePage.selectBook()
});

When(/^I click on the Add To Your Collection button$/, async () => {
    await ProfilePage.addToCollection()
});

When(/^I type in the search box an existing (\w+)$/, async (titleLabel) => {
    await browser.pause(3000);
    await ProfilePage.searchBook(titleLabel);
    await browser.pause(3000);
});

When(/^I click on the login button$/, async () => {
    await browser.pause(3000);
    await BookStorePage.login();
});

When(/^I click on the Profile button$/, async () => {
    await browser.pause(3000);
    await BookStorePage.goProfile()
});

When(/^I click on the logout button$/, async () => {
    await BookStorePage.logout();
});
// When(/^I fill correctly the information: {string}, {string}, {string}, {string}$/, async (firstname, lastname, userName, password) => {
//     await LoginPage.fillFirstName(firstname);
//     await LoginPage.fillLastName(lastname);
//     await LoginPage.fillUserName(userName);
//     await LoginPage.fillPassword(password);
//     await LoginPage.fillRecaptcha();
// });

// When(/^I type in the search box a existing (\w+)$/, async (titleLabel) => {
//     await ProfilePage.searchBook();
// });

// When(/^I click on a book in the bookstore$/, async () => {
//     //TODO: function to redirect to book info
//     //await ProfilePage.;
// });

// When(/^I click on a book in the bookstore$/, async () => {
//     //TODO: function to redirect to book info
//     //await ProfilePage.;
// });

When(/^I click on the profile button$/, async () => {
    //TODO: function to click the Add button
    await ProfilePage.clickLink();
    await BookStorePage.goProfile();
});

// When(/^I go to my profile back$/, async () => {
//     //TODO: function to redirect to profile page
//     //await ProfilePage.;
// });

// When(/^I type in the search box an existing (\w+)$/, async (titleLabel) => {
//     await browser.pause(2000)
//     await BookStorePage.searchBook(titleLabel)
//     await browser.pause(4000)
// });

// When(/^I have at least an existing book$/, async () => {
//     await browser.pause(3000)
//     await ProfilePage.checkBooks(true);
// });
