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

    get btnGoBookstore(){
        return $('#gotoStore');
    }

    get book() {
        return $('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.books-wrapper div.ReactTable.-striped.-highlight div.rt-table div.rt-tbody div.rt-tr-group:nth-child(1) div.rt-tr.-odd div.rt-td:nth-child(2) div.action-buttons span.mr-2 > a:nth-child(1)');
    }
    
    get btnAddToCollection(){
        return $('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.books-wrapper div.profile-wrapper div.mt-2.fullButtonWrap.row:nth-child(9) > div.text-right.fullButton > button');
    }

    async logout() {
        await (await this.btnLogout).waitForDisplayed();
        await (await this.btnLogout).click();
    } 

    async searchBook(titleLabel) {
        await this.lblBookTitle.setValue(titleLabel);
    }

    async goToBookstore(){
        await (await this.btnGoBookstore).scrollIntoView();
        await this.btnGoBookstore.click();
    }

    async clickBook(){
        await (await this.btnGoBookstore).scrollIntoView();
        await this.btnGoBookstore.click();
    }

    async selectBook() {
        await this.book.click();
    }

    async addToCollection(){
        await (await this.btnAddToCollection).scrollIntoView();
        await this.btnAddToCollection.click();
    }

    async acceptAlert(){
        return super.acceptAlert();
    }
open() {
    return super.open('profile');
}
}

module.exports = new ProfilePage();
