const Page = require('./page');
const expectChai = require('chai').expect;

class ProfilePage extends Page {

    get btnLogout() {
        return $('#submit');
    }

    get lblUsername() {
        return $('#userName-value');
    }

    get tblBooks() {
        return $('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.profile-wrapper > div.ReactTable.-striped.-highlight > div.rt-table');
    }

    get lblBookTitle() {
        return $('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.profile-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(1) > div > div:nth-child(2)');
    }

    get tblBookTitles() {
        return $('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.profile-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div > div > div > div > span > a');
    }

    get searchBox() {
        return $('#searchBox');
    }

    // get tblBody() {
    //     return $('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.profile-wrapper > div.ReactTable.-striped.-highlight:nth-child(2)');
    // } 

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

    get btnDeleteBooks() {
        return $('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.profile-wrapper div.mt-2.buttonWrap.row:nth-child(4) > div.text-right.button.di > button');
    }

    get deleteModal(){
        return $('#closeSmallModal-ok');
    }


    async searchBook(titleLabel) {
        await (await this.searchBox).waitForDisplayed();
        await this.searchBox.setValue(titleLabel);
    }

    async logout() {
        await (await this.btnLogout).waitForDisplayed();
        await (await this.btnLogout).click();
    } 

    async findBook(titleLabel) {
        await this.searchBox.setValue(titleLabel);
        let searchText = await (await this.book).getHTML(false);
        expectChai(searchText).to.have.string(book);
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

    async deleteBooks(){
        await browser.pause(3000)
        await this.btnDeleteBooks.waitForDisplayed();
        await (await this.btnDeleteBooks).scrollIntoView();
        await this.btnDeleteBooks.click()
        await this.deleteModal.click()
    }

    // async checkBooks(isBook) {
    //     await (await this.tblBody).waitForDisplayed();
    //     let books = await this.tblBookTitles;
    //     let counter = books.lenght;

    //     if (counter == 0 && isBook == false) {
    //         expectChai(books.lenght).to.equal(0); 
    //     } else if (books.lenght > 0 && isBook == true) {
    //         expectChai(books.lenght).to.equal(counter);
    //     } else if (books.lenght > 0 && isBook == false) {
    //         expectChai(books.lenght).to.equal(0);
    //     } else if (books.lenght == 0 && isBook == true) {
    //         expectChai(books.lenght).to.equal(counter);
    //     }
    // }
    
open() {
    return super.open('profile');
}
}

module.exports = new ProfilePage();
