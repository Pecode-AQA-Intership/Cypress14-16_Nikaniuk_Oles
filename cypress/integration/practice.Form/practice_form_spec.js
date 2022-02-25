import {
    verifyingRequiredAndOptionalFieldsInPracticeForm,
    verifyingEmailFieldFormat,
    verifyingSingleGenderCheckBoxFormat,
    verifyingMobileFieldFormat,
    verifyingHobbiesMultiselectFormat,
    populatingAndSubmittingStudentRegistrationForm,
    verifyingPopulatedUserInformationInModalWindow
  } from "../../models/practiceForm.js";

describe("Verification of the fields in the 'Student Registration Form'", () => {
    before(() => {
        cy.visit("/automation-practice-form");
    });    
    
    it("Verifying required and optional fields on the Student Registration Form", () => {
        verifyingRequiredAndOptionalFieldsInPracticeForm();
    });

    it("Ensure that 'Email' field configured in following format '/a-z or A-Z and 0-9 and use special symbols: - and _ and ./@/a-z or A-Z and 0-9 and use special symbols: - and _ and ././a-z or A-Z limited to 2-5 characters/'", () => {
        verifyingEmailFieldFormat();
    });
 
    it("Ensure that only one option can be checked in 'Gender' field", () => {
        verifyingSingleGenderCheckBoxFormat();
    });

    it("Ensure that 'Mobile' field configured to accept only numeric characters and has minimum and mamimum length = 10 characters", () => {
        verifyingMobileFieldFormat();
    });

    it("Ensure that multiple options can be checked in 'Hobbies' field", () => {
        verifyingHobbiesMultiselectFormat();
    });
}); 

describe("Verifying information about added student on the modal window", () => {
    before(() => {
        cy.visit("/automation-practice-form");
    });

    it("Ensure all student data could be populated on the 'Student Registration Form'", () => {
        populatingAndSubmittingStudentRegistrationForm();
    });

    it("Ensure all student data is present on the modal window", () => {
        verifyingPopulatedUserInformationInModalWindow();
    });
});