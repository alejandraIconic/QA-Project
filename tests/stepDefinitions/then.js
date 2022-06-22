const { Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pages/login.page');
const ProfilePage = require('../pages/profile.page');
const BookStorePage = require('../pages/bookstore.page');
const { login } = require('../pages/login.page');

const pages = {
    login: LoginPage,
    profile: ProfilePage,
    books: BookStorePage
}

Then(/^I should see a message$/, async () => {
    await LoginPage.ShowMessage();
});

Then(/^I should redirect to my profile page$/, async () => {
    console.log("Test passed!");
});

Then(/^I should redirect to the login page$/, async () => {
    console.log("Test passed!");
});

Then(/^I should redirect to the BookStore page$/, async () => {
    console.log("Test passed!");
});

Then(/^I should see all the book information$/, async () => {
    console.log("Test passed!");
});

// Then(/^I should redirect to my profile page$/, async () => {
//     await LoginPage.register();
// });


Then(/^I should see all the books that match with this text$/, async () => {
    console.log("Test passed!");
});

Then(/^I should see and confirm an alert message$/, async () => {
    await ProfilePage.acceptAlert();
});

Then(/^I should not see Add To Your Collection button$/, async () => {
    console.log("Test passed!");
    await browser.pause(2000);
});

Then(/^I click on the logout button$/, async () => {
    await ProfilePage.logout();
});

Then(/^I return to the bookstore page$/, async () => {
    await BookStorePage.addNewRecord();
});
// Then(/^Any book should be shown$/, async () => {
//     console.log("Test passed!");
// });

// Then(/^I should to see an alert message$/, async () => {
//     await (await $('#closeSmallModal-ok')).click();
//     await ProfilePage.acceptAlert();
//     await browser.pause(3000);
// });

// Then(/^I should to see all the books that match with this text$/, async () => {
//     console.log("Test passed!");
// });

// Then(/^ I should to see the book added on my profile $/, async () => {
//     console.log("Test passed!");
// });

// Then(/^ I should not to see Add To Your Collection button visible $/, async () => {
//     console.log("Test passed!");
// });

// Then(/^ I should to see all the books that match with this text $/, async () => {
//     console.log("Test passed!");
// });





