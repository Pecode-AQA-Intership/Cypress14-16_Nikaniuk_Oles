import {
    BASE_URL,
    RANDOM_NAME,
    RANDOM_EMAIL,
    RANDOM_ADDRESS,
    RANDOM_PERNAMENT_ADDRESS,
    INPUT_USER_NAME,
    INPUT_EMAIL,
    INPUT_CURRENT_ADDRESS,
    INPUT_PERNAMENT_ADDRESS,
    SUBMIT_BUTTON,
    OUTPUT_USER_NAME,
    OUTPUT_EMAIL,
    OUTPUT_CURRENT_ADDRESS,
    OUTPUT_PERNAMENT_ADDRESS
} from "../config_test_data/test_data.js"

describe("Populating and submitting the 'Text Box' form", () => {
    before(() => {
        cy.visit(BASE_URL)});

    it ("Ensure that user can fill in 'Full Name' field", () => {
    cy.get(INPUT_USER_NAME)
    .type(RANDOM_NAME)
    .should("have.value", RANDOM_NAME);
    });

    it ("Ensure that user can fill in 'Email' field", () => {
    cy.get(INPUT_EMAIL)
    .type(RANDOM_EMAIL)
    .should("have.value", RANDOM_EMAIL);
    });

    it ("Ensure that user can fill in 'Current Address' field", () => {
    cy.get(INPUT_CURRENT_ADDRESS)
    .type(RANDOM_ADDRESS)
    .should("have.value", RANDOM_ADDRESS);
    });

    it ("Ensure that user can fill in 'Permanent Address' field", () => {
    cy.get(INPUT_PERNAMENT_ADDRESS)
    .type(RANDOM_PERNAMENT_ADDRESS)
    .should("have.value", RANDOM_PERNAMENT_ADDRESS);
    });

    it ("Ensure that 'Submit' button is enabled", () => {
    cy.get(SUBMIT_BUTTON)
    .click()
    .should("not.be.disabled")
    });

    it('Check that the entered data correspond to the output data', () => {
    cy.get(OUTPUT_USER_NAME).should('include.text', RANDOM_NAME);
    cy.get(OUTPUT_EMAIL).should('include.text', RANDOM_EMAIL);
    cy.get(OUTPUT_CURRENT_ADDRESS).should('include.text', RANDOM_ADDRESS);
    cy.get(OUTPUT_PERNAMENT_ADDRESS).should('include.text', RANDOM_PERNAMENT_ADDRESS);
    });
});