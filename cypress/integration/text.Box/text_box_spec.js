import {
    populatingAndSubmittingTextBox,
    verifyingOutputInformationOfTextBox
} from "../../models/textBox.js";

describe("Populating and verifying output in the 'Text Box' form", () => {
    before(() => {
        cy.visit("/text-box")});

    it ("Ensure that user can fill and submit 'Text Box' form", () => {
        populatingAndSubmittingTextBox (); 
    });


    it('Check that the entered data correspond to the output data', () => {
        verifyingOutputInformationOfTextBox ();
    });
});