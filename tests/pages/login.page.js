

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

    get btnSubmit() {
        return $('#login');
    }

    get btnNewUser() {
        return $('#newUser');
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

    async getAlertText() {
        await this.lblMessage.setValue();
        return super.getAlertText();
    }
    
    async ShowMessage() {
        await (await this.lblMessage).waitForDisplayed();                
        await expect(this.lblMessage).toBeExisting();  
    }

    async validateMessage(message) {
    let text = await this.getAlertText();
    expectChai(text).to.equal(message)
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();
