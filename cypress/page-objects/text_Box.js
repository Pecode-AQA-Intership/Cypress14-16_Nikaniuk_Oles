import CommonPage from "./common_Page.js"
class TextBox extends CommonPage {
    inputUserNameField() {
        return cy.get("#userName");
    };

    inputPernamentAddressField() {
        return cy.get("#permanentAddress");
    };

    outputUserNameField() {
        return cy.get("#output #name");
    };

    outputUserEmailField() {
        return cy.get("#output #email");
    };

    outputCurrentAddressField() {
        return cy.get("#output #currentAddress");
    };

    outputPernamentAddressField() {
        return cy.get("#output #permanentAddress");
    };
};

export default TextBox;

