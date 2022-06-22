

const Page = require('./page');
const expectChai = require('chai').expect;

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#userName');
    }

    get inputPassword() {
        return $('#password');
    }

    get inputFirstname() {
        return $('#firstname');
    }

    get inputLastname() {
        return $('#lastname');
    }

    get recaptchaButton() {
        return $('#recaptcha-anchor > div.recaptcha-checkbox-border');
    }

    get btnSubmit() {
        return $('#login');
    }

    get btnNewUser() {
        return $('#newUser');
    }

    get btnRegister() {
        return $('#register');
    }

    get lblMessage() {
        return $('#name');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(userName, password) {
        await this.inputUsername.setValue(userName);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async goNewUser() {
        await this.btnNewUser.click();
    }

    async fillFirstName(firstname) {
        await this.inputFirstname.setValue(firstname);
    }

    async fillLastName(lastname) {
        await this.inputLastname.setValue(lastname);
    }

    async fillUserName(userName) {
        await this.inputUsername.setValue(userName);
    }

    async fillPassword(password) {
        await this.inputPassword.setValue(password);
    }

    async fillRecaptcha(){
        await this.recaptchaButton.click();
    }

    async register(){
        await this.btnRegister.click();
    }

    async getAlertText() {
        await this.lblMessage.setValue();
        return super.getAlertText();
    }
    
    async ShowMessage() {
        await (await this.lblMessage).waitForDisplayed();                
        await expect(this.lblMessage).toBeExisting();  
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();
