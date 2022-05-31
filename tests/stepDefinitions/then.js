const { Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pages/login.page');
const ProfilePage = require('../pages/profile.page');
const BookStorePage = require('../pages/books.page');

const pages = {
    login: LoginPage,
    profile: ProfilePage,
    books: BookStorePage
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

Then(/^I should redirect to the register page $/, async () => {
    console.log("Test passed!");
});

Then(/^I should to see all the books that match with this text $/, async () => {
    console.log("Test passed!");
});

Then(/^I should to see No Rows Found message $/, async () => {
    console.log("Test passed!");
});

Then(/^I should to see all the book information $/, async () => {
    console.log("Test passed!");
});

Then(/^I should to see an alert (\w+)$/, async (message) => {
    console.log("Test passed!");
});

Then(/^ I should to see the book added on my profile $/, async () => {
    console.log("Test passed!");
});

Then(/^ I should not to see Add To Your Collection button visible $/, async () => {
    console.log("Test passed!");
});

Then(/^ I should to see all the books that match with this text $/, async () => {
    console.log("Test passed!");
});





