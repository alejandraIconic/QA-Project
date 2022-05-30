const Page = require('./page');

class ProfilePage extends Page {

    get btnLogout() {
        return $('#submit');
    }

    async logout() {
        await (await this.btnLogout).waitForDisplayed();
        await (await this.btnLogout).click();
    } 


open() {
    return super.open('profile');
}
}

module.exports = new ProfilePage();