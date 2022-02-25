class CommonPage {
    userFirstNameField() {
        return cy.get("#firstName");
    };
    
    userLastNameField() {
        return cy.get("#lastName");
    };
    
    userEmailField() {
        return cy.get("#userEmail");
    };

    currentAddressField() {
        return cy.get("#currentAddress");
    };

    submitButton() {
        return cy.get("#submit")
    };
};

export default CommonPage;