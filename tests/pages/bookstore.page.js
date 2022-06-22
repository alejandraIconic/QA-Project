const Page = require('./page');
const expectChai = require('chai').expect;

class BookStorePage extends Page { 

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

    get isbnLabel(){
        return $('#ISBN-label');
    }

    get titleLabel(){
        return $('#title-label');
    }

    get subtitleLabel(){
        return $('#subtitle-label');
    }

    get autorLabel(){
        return $('#author-label');
    }

    get publisherLabel(){
        return $('#publisher-label');
    }

    get totalPagesLabel(){
        return $('#pages-label');
    }

    get descriptionLabel(){
        return $('#description-label');
    }

    get websiteLabel(){
        return $('#website-label');
    }

    get isbnText(){ 
        return $('#userName-value');
    }

    get titleText(){
        return $('#userName-value');
    }

    get subtitleText(){
        return $('#userName-value');
    }

    get autorText(){
        return $('#author-wrapper > div.col-md-9.col-sm-12');
    }

    get publisherText(){
        return $('#publisher-wrapper > div.col-md-9.col-sm-12');
    }

    get totalPagesText(){
        return $('#pages-wrapper > div.col-md-9.col-sm-12');
    }

    get descriptionText(){
        return $('#description-wrapper > div.col-md-9.col-sm-12');
    }

    get websiteText(){
        return $('#website-wrapper > div.col-md-9.col-sm-12');
    }


    get btnAddNewRecord(){
        return $('#addNewRecordButton');
    }

    async logout() {
        await (await this.btnLogout).waitForDisplayed();
        await (await this.btnLogout).click();
    }  

    async addNewRecord() {
        await (await this.btnAddNewRecord).scrollIntoView();
        await (await this.btnAddNewRecord).click();
    }  
    async searchBook(titleLabel) {
        await this.searchBox.setValue(titleLabel);
    }

open() {
    return super.open('books');
}
}

module.exports = new BookStorePage();