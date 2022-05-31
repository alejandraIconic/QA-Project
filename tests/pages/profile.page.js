const Page = require('./page');

class ProfilePage extends Page {

    get btnLogout() {
        return $('#submit');
    }

    get lblUsername() {
        return $('#userName-value');
    }

    get searchBox() {
        return $('#searchBox');
    }

    get tblBooks() {
        return $('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.profile-wrapper > div.ReactTable.-striped.-highlight > div.rt-table');
    }

    get lblBookTitle() {
        return $('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.profile-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(1) > div > div:nth-child(2)');
    }

    get btnAdd(){
        return $('#addNewRecordButton');
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
