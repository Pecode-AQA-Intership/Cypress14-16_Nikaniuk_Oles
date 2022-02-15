import {SELECTOR_PRACTICE_FORM} from "../../config_test_data/selectors_practice_form.js";
import {
    RANDOM_FIRST_NAME,
    RANDOM_LAST_NAME,
    RANDOM_EMAIL,
    GENDER,
    RANDOM_FULL_PHONE_NUMBER,
    SUBJECT,
    HOBBIES,
    RANDOM_YEAR,
    MONTH,
    RANDOM_DAY,
    RANDOM_ADDRESS,
    STATE,
    STATES,
    CITIES,
    NCR_CITY,
    UTTAR_PRADESH_CITY,
    HARYANA_CITY,
    RAJASTHAN_CITY
  } from "../../config_test_data/test_data.js";

describe("Check required and optional fields on the 'Student Registration Form'", () => {
    before(() => {
        cy.visit("/automation-practice-form");
    });    
    
    it("Ensure that 'First Name' field is required", () => {
        cy.get(SELECTOR_PRACTICE_FORM.firstName)
        .should("have.attr", "required");
    });

    it("Ensure that 'Last Name' field is required", () => {
        cy.get(SELECTOR_PRACTICE_FORM.lastName)
        .should("have.attr", "required");
    });

    it("Ensure that 'Email' field is optional", () => {
        cy.get(SELECTOR_PRACTICE_FORM.userEmail)
        .should("not.have.attr", "required");
    });

    it("Ensure that 'Gender' field is required", () => {
        cy.get(SELECTOR_PRACTICE_FORM.maleRadioButton)
        .should("have.attr", "required");

        cy.get(SELECTOR_PRACTICE_FORM.femaleRadioButton)
        .should("have.attr", "required");

        cy.get(SELECTOR_PRACTICE_FORM.otherRadioButton)
        .should("have.attr", "required");
    });

    it("Ensure that 'Mobile' field is required", () => {
        cy.get(SELECTOR_PRACTICE_FORM.userNumber)
        .should("have.attr", "required");
    });

    it("Ensure that 'Date of Birth' field is optional", () => {
        cy.get(SELECTOR_PRACTICE_FORM.dateOfBirthInput)
        .should("not.have.attr", "required");
    });

    it("Ensure that 'Subject'field is optional", () => {
        cy.get(SELECTOR_PRACTICE_FORM.subjectsContainer)
        .should("not.have.attr", "required");
    });  

    it("Ensure that 'Hobbies' field is optional", () => {
        cy.get(SELECTOR_PRACTICE_FORM.sportsCheckbox)
        .should("not.have.attr", "required");

        cy.get(SELECTOR_PRACTICE_FORM.readingCheckbox)
        .should("not.have.attr", "required");

        cy.get(SELECTOR_PRACTICE_FORM.musicCheckbox)
        .should("not.have.attr", "required");
    });

    it("Ensure that 'Picture' field is optional", () => {
        cy.get(SELECTOR_PRACTICE_FORM.uploadPicture)
        .should("not.have.attr", "required");
    });  

    it("Ensure that 'State' field is optional", () => {
        cy.get(SELECTOR_PRACTICE_FORM.stateDropdown)
        .should("not.have.attr", "required");
    });

    it("Ensure that 'City' field is optional", () => {
        cy.get(SELECTOR_PRACTICE_FORM.cityDropdown)
        .should("not.have.attr", "required");
    });
}); 
describe("'Student Registration Form' fields validation", () => {
    before(() => {
        cy.visit("/automation-practice-form");
    });

    it("Ensure that 'Email' field configured in following format '/a-z or A-Z and 0-9 and use special symbols: - and _ and ./@/a-z or A-Z and 0-9 and use special symbols: - and _ and ././a-z or A-Z limited to 2-5 characters/'", () => {
        cy.get(SELECTOR_PRACTICE_FORM.userEmail)
        .invoke("attr", "pattern")
        .should("equal", "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$");
    });
 
    it("Ensure that only one option can be checked in 'Gender' field", () => {
        cy.get(SELECTOR_PRACTICE_FORM.maleRadioButton)
        .check({ force: true })
        .should("be.checked");

        cy.get(SELECTOR_PRACTICE_FORM.femaleRadioButton)
        .check({ force: true })
        .should("be.checked");

        cy.get(SELECTOR_PRACTICE_FORM.maleRadioButton)
        .should("not.be.checked");  
    });

    it("Ensure that 'Mobile' field configured to accept only numeric characters", () => {
        cy.get(SELECTOR_PRACTICE_FORM.userNumber)
        .invoke("attr", "pattern")
        .should("equal", "\\d*");
    });

    it("Ensure that 'Mobile' field configured to have minimum 10 digits", () => {
        cy.get(SELECTOR_PRACTICE_FORM.userNumber)
        .should("have.attr", "minlength")
        .and("equal", "10");
    });

    it("Ensure that 'Mobile' field configured to have maximum 10 digits", () => {
        cy.get(SELECTOR_PRACTICE_FORM.userNumber)
        .should("have.attr", "maxlength")
        .and("equal", "10");
    });

    it("Ensure that user can specify DD/MM/YYYY in the 'Date of Birth' date picker", () => {
        cy.get(SELECTOR_PRACTICE_FORM.dateOfBirthInput)
        .click();
        cy.get(SELECTOR_PRACTICE_FORM.dateOfBirthYearPicker)
        .contains(`${RANDOM_YEAR}`)
        .should("have.value", `${RANDOM_YEAR}`)
        cy.get (SELECTOR_PRACTICE_FORM.dateOfBirthMonthPicker)
        .contains(MONTH)
        .should("include.text", MONTH)
        cy.get(SELECTOR_PRACTICE_FORM.dateOfBirthWeekPicker)
        .should("include.text", RANDOM_DAY)
    });

    it("Ensure that multiple options can be checked in 'Hobbies' field", () => {
        cy.get(SELECTOR_PRACTICE_FORM.sportsCheckbox)
        .check({ force: true })
        .should("be.checked");

        cy.get(SELECTOR_PRACTICE_FORM.readingCheckbox)
        .check({ force: true })
        .should("be.checked");

        cy.get(SELECTOR_PRACTICE_FORM.musicCheckbox)
        .check({ force: true })
        .should("be.checked");

        cy.get(SELECTOR_PRACTICE_FORM.sportsCheckbox)
        .should("be.checked");
        
        cy.get(SELECTOR_PRACTICE_FORM.readingCheckbox)
        .should("be.checked");
    });

    it("Ensure that 'City' drop-down is disabled before specifying 'State' value", () => {
        cy.get(SELECTOR_PRACTICE_FORM.cityInput)
        .should("have.attr", "disabled");
    });

    it("Ensure that user can enter and select a 'State' from availible list", () => {
        cy.get(SELECTOR_PRACTICE_FORM.stateDropdown)
        .type(`${STATE}{enter}`)
        cy.get(SELECTOR_PRACTICE_FORM.stateContainer)
        .then($el => {
            expect($el).to.have.text(STATE)
        });
    });

    it("Ensure that user can enter and select a 'City' from availible list based on conditions", () => {
        cy.get(SELECTOR_PRACTICE_FORM.stateDropdown)
        .then (($body) => {
            if ($body.text().includes(STATES[0])) {
                return cy.get (SELECTOR_PRACTICE_FORM.cityDropdown)
                       .type(`${NCR_CITY}{enter}`).should("include.text", NCR_CITY) 
            } else if ($body.text().includes(STATES[1])) {
                return cy.get (SELECTOR_PRACTICE_FORM.cityDropdown)
                       .type(`${UTTAR_PRADESH_CITY}{enter}`).should("include.text", UTTAR_PRADESH_CITY) 
            } else if ($body.text().includes(STATES[2])) {
                return cy.get (SELECTOR_PRACTICE_FORM.cityDropdown)
                       .type(`${HARYANA_CITY}{enter}`).should("include.text", HARYANA_CITY) 
            } else ($body.text().includes(STATES[3])); {
                return cy.get (SELECTOR_PRACTICE_FORM.cityDropdown)
                       .type(`${RAJASTHAN_CITY}{enter}`).should("include.text", RAJASTHAN_CITY)
            };
        });
    });
}); 

describe("Verifying information about added student on the modal window", () => {
    before(() => {
        cy.visit("/automation-practice-form");
    });

    it("Ensure all student data could be populated on the 'Student Registration Form'", () => {
        cy.get(SELECTOR_PRACTICE_FORM.firstName)
        .type(RANDOM_FIRST_NAME)
        .should("have.value", RANDOM_FIRST_NAME);

        cy.get(SELECTOR_PRACTICE_FORM.lastName)
        .type(RANDOM_LAST_NAME)
        .should("have.value", RANDOM_LAST_NAME);

        cy.get(SELECTOR_PRACTICE_FORM.userEmail)
        .type(RANDOM_EMAIL)
        .should("have.value", RANDOM_EMAIL);

        cy.get(SELECTOR_PRACTICE_FORM.maleRadioButton)
        .check({ force: true })
        .should("be.checked");

        cy.get(SELECTOR_PRACTICE_FORM.userNumber)
        .type(RANDOM_FULL_PHONE_NUMBER)
        .should("have.value", RANDOM_FULL_PHONE_NUMBER);

        cy.get(SELECTOR_PRACTICE_FORM.dateOfBirthInput)
        .click();
        cy.get(SELECTOR_PRACTICE_FORM.dateOfBirthYearPicker)
        .select(`${RANDOM_YEAR}`);
        cy.get (SELECTOR_PRACTICE_FORM.dateOfBirthMonthPicker)
        .select(MONTH);
        cy.get(SELECTOR_PRACTICE_FORM.dateOfBirthWeekPicker)
        .contains(`${RANDOM_DAY}`)
        .click();

        cy.get(SELECTOR_PRACTICE_FORM.subjectsContainer)
        .type(`${SUBJECT}{enter}`)
        cy.get(SELECTOR_PRACTICE_FORM.subjectItem)
        .then($el => {
            expect($el).to.have.text(SUBJECT)
        });

        cy.get(SELECTOR_PRACTICE_FORM.sportsCheckbox)
        .check({ force: true })
        .should("be.checked");

        cy.get(SELECTOR_PRACTICE_FORM.readingCheckbox)
        .check({ force: true })
        .should("be.checked");

        cy.get(SELECTOR_PRACTICE_FORM.uploadPicture)
        .selectFile("./cypress/fixtures/images/naruto.jpg")
        .then(($input) => {
            const files = $input[0].files;
            expect(files[0].name).to.eq("naruto.jpg");
        });

        cy.get(SELECTOR_PRACTICE_FORM.currentAddress)
        .type(RANDOM_ADDRESS)
        .should("have.value", RANDOM_ADDRESS);

        cy.get(SELECTOR_PRACTICE_FORM.stateDropdown)
        .type(`${STATES[0]}{enter}`)
        cy.get(SELECTOR_PRACTICE_FORM.stateContainer)
        .should("include.text", STATES[0]);

        cy.get(SELECTOR_PRACTICE_FORM.cityDropdown)
        .type(`${CITIES[1]}{enter}`)
        cy.get(SELECTOR_PRACTICE_FORM.cityContainer)
        .should("include.text", CITIES[1]);
    });

    it("Ensure all student data is present on the modal window", () => {
        cy.get(SELECTOR_PRACTICE_FORM.submitButton)
        .click()
        .should("not.be.disabled");

        cy.get(SELECTOR_PRACTICE_FORM.welcomeModal)
        .contains("Thanks for submitting the form");

        cy.get(SELECTOR_PRACTICE_FORM.userNameValue)
        .should("include.text", `${RANDOM_FIRST_NAME} ${RANDOM_LAST_NAME}`);

        cy.get(SELECTOR_PRACTICE_FORM.userEmailValue)
        .should("include.text", RANDOM_EMAIL);

        cy.get(SELECTOR_PRACTICE_FORM.userGenderValue)
        .should("include.text", GENDER[0]);

        cy.get(SELECTOR_PRACTICE_FORM.userNumberValue)
        .should("include.text", RANDOM_FULL_PHONE_NUMBER);

        cy.get(SELECTOR_PRACTICE_FORM.userdateOfBirthValue)
        .should("include.text", `${RANDOM_DAY} ${MONTH},${RANDOM_YEAR}`);

        cy.get(SELECTOR_PRACTICE_FORM.subjectValue)
        .should("include.text", SUBJECT);

        cy.get(SELECTOR_PRACTICE_FORM.hobbieValue)
        .should("include.text", `${HOBBIES[0]}, ${HOBBIES[1]}`);

        cy.get(SELECTOR_PRACTICE_FORM.pictureValue)
        .should("include.text", "naruto.jpg");

        cy.get(SELECTOR_PRACTICE_FORM.currentAddressValue)
        .should("include.text", RANDOM_ADDRESS);

        cy.get(SELECTOR_PRACTICE_FORM.stateAndCityValue)
        .should("include.text", `${STATES[0]} ${CITIES[1]}`);
    });
});