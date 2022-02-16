import {
    RANDOM_NAME,
    RANDOM_EMAIL,
    RANDOM_ADDRESS,
    RANDOM_PERNAMENT_ADDRESS,
} from "../../config_test_data/test_data.js";

import {SELECTOR_BOX} from "../../config_test_data/selectors_text_box.js";

describe("Populating and submitting the 'Text Box' form", () => {
    before(() => {
        cy.visit("/text-box")});

    it ("Ensure that user can fill in 'Full Name' field", () => {
    cy.get(SELECTOR_BOX.inputUserName)
    .type(RANDOM_NAME)
    .should("have.value", RANDOM_NAME);
    });

    it ("Ensure that user can fill in 'Email' field", () => {
    cy.get(SELECTOR_BOX.inputEmail)
    .type(RANDOM_EMAIL)
    .should("have.value", RANDOM_EMAIL);
    });

    it ("Ensure that user can fill in 'Current Address' field", () => {
    cy.get(SELECTOR_BOX.inputCurrentAddress)
    .type(RANDOM_ADDRESS)
    .should("have.value", RANDOM_ADDRESS);
    });

    it ("Ensure that user can fill in 'Permanent Address' field", () => {
    cy.get(SELECTOR_BOX.inputPernamentAddress)
    .type(RANDOM_PERNAMENT_ADDRESS)
    .should("have.value", RANDOM_PERNAMENT_ADDRESS);
    });

    it ("Ensure that 'Submit' button is enabled", () => {
    cy.get(SELECTOR_BOX.submitButton)
    .click()
    .should("not.be.disabled")
    });

    it('Check that the entered data correspond to the output data', () => {
    cy.get(SELECTOR_BOX.outputUserName).should('include.text', RANDOM_NAME);
    cy.get(SELECTOR_BOX.outputEmail).should('include.text', RANDOM_EMAIL);
    cy.get(SELECTOR_BOX.outputCurrentAddress).should('include.text', RANDOM_ADDRESS);
    cy.get(SELECTOR_BOX.outputPernamentAddress).should('include.text', RANDOM_PERNAMENT_ADDRESS);
    });
});