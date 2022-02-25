import PracticeForm from "../page-objects/practice_Form.js";
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
    STATES,
    CITIES
} from "../fixtures/test_data_config/test_data.js";

const practiceForm = new PracticeForm();

function checkingMaleGenderSingleSelectButton() {
    practiceForm.maleGenderRadioButton().check({ force: true }).should("be.checked");
};

function checkingHobbiesMultiselectButtons() {
    practiceForm.sportsHobbieCheckbox().check({ force: true }).should("be.checked");
    practiceForm.readingHobbieCheckbox().check({ force: true }).should("be.checked");
    practiceForm.musicHobbieCheckbox().check({ force: true }).should("be.checked")
};

function enteringAndSelectingSubject() {
    practiceForm.subjectsContainerField().type(`${SUBJECT}{enter}`);
    practiceForm.subjectItem()
    .then($el => {
        expect($el).to.have.text(SUBJECT)
    });
};

function enteringAndSelectingState() {
    practiceForm.statesDropdownList().click({ force: true }).type(`${STATES[0]}{enter}`, { force: true });
    practiceForm.statesContainerField()
    .then($el => {
        expect($el).to.have.text(STATES[0])
    });
};

function enteringAndSelectingCity() {
    practiceForm.citiesDropdownList().click({ force: true }).type(`${CITIES[1]}{enter}`, { force: true });
    practiceForm.citiesContainerField()
    .then($el => {
        expect($el).to.have.text(CITIES[1])
    });
};

function uploadingImage() {
    practiceForm.uploadPictureContainer().selectFile("./cypress/fixtures/images/naruto.jpg")
    .then(($input) => {
        const files = $input[0].files;
        expect(files[0].name).to.eq("naruto.jpg");
    });
};

function selectingDateOfBirth() {
    practiceForm.dateOfBirthInputField().click();
    practiceForm.dateOfBirthYearPicker().select(`${RANDOM_YEAR}`);
    practiceForm.dateOfBirthMonthPicker().select(MONTH);
    practiceForm.dateOfBirthWeekPicker().contains(`${RANDOM_DAY}`).eq(0).click();
};

export function verifyingRequiredAndOptionalFieldsInPracticeForm() {
    practiceForm.userFirstNameField().should("have.attr", "required");
    practiceForm.userLastNameField().should("have.attr", "required");
    practiceForm.userEmailField().should("not.have.attr", "required");
    practiceForm.maleGenderRadioButton().should("have.attr", "required");
    practiceForm.femaleGenderRadioButton().should("have.attr", "required");
    practiceForm.otherGenderRadioButton().should("have.attr", "required");
    practiceForm.userPhoneNumberField().should("have.attr", "required");
    practiceForm.dateOfBirthInputField().should("not.have.attr", "required");
    practiceForm.subjectsContainerField().should("not.have.attr", "required");
    practiceForm.sportsHobbieCheckbox().should("not.have.attr", "required");
    practiceForm.readingHobbieCheckbox().should("not.have.attr", "required");
    practiceForm.musicHobbieCheckbox().should("not.have.attr", "required");
    practiceForm.uploadPictureContainer().should("not.have.attr", "required");
    practiceForm.statesDropdownList().should("not.have.attr", "required");
    practiceForm.citiesDropdownList().should("not.have.attr", "required")
};

export function verifyingEmailFieldFormat() {
    practiceForm.userEmailField().invoke("attr", "pattern").should("equal", "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$");
};

export function verifyingSingleGenderCheckBoxFormat() {
    checkingMaleGenderSingleSelectButton();
    practiceForm.femaleGenderRadioButton().check({ force: true }).should("be.checked");
    practiceForm.maleGenderRadioButton().should("not.be.checked")
};

export function verifyingMobileFieldFormat() {
    practiceForm.userPhoneNumberField().invoke("attr", "pattern").should("equal", "\\d*");
    practiceForm.userPhoneNumberField().should("have.attr", "minlength").and("equal", "10");
    practiceForm.userPhoneNumberField().should("have.attr", "maxlength").and("equal", "10")
};

export function verifyingHobbiesMultiselectFormat() {
    checkingHobbiesMultiselectButtons();
    practiceForm.sportsHobbieCheckbox().should("be.checked");
    practiceForm.readingHobbieCheckbox().should("be.checked")
};

export function populatingAndSubmittingStudentRegistrationForm() {
    practiceForm.userFirstNameField().type(RANDOM_FIRST_NAME).should("have.value", RANDOM_FIRST_NAME);
    practiceForm.userLastNameField().type(RANDOM_LAST_NAME).should("have.value", RANDOM_LAST_NAME);
    practiceForm.userEmailField().type(RANDOM_EMAIL).should("have.value", RANDOM_EMAIL);
    checkingMaleGenderSingleSelectButton();
    practiceForm.userPhoneNumberField().type(RANDOM_FULL_PHONE_NUMBER).should("have.value", RANDOM_FULL_PHONE_NUMBER);
    selectingDateOfBirth();
    enteringAndSelectingSubject();
    checkingHobbiesMultiselectButtons();
    uploadingImage();
    practiceForm.currentAddressField().type(RANDOM_ADDRESS).should("have.value", RANDOM_ADDRESS);
    enteringAndSelectingState();
    enteringAndSelectingCity();
    practiceForm.submitButton().click({force: true}).should("not.be.disabled")
};

export function verifyingPopulatedUserInformationInModalWindow() {
    practiceForm.welcomeModalWindow().should("be.visible");
    practiceForm.userNameValue().should("include.text", `${RANDOM_FIRST_NAME} ${RANDOM_LAST_NAME}`);
    practiceForm.userEmailValue().should("include.text", RANDOM_EMAIL);
    practiceForm.userGenderValue().should("include.text", GENDER[0]);
    practiceForm.userPhoneNumberValue().should("include.text", RANDOM_FULL_PHONE_NUMBER);
    practiceForm.userdateOfBirthValue().should("include.text", `${RANDOM_DAY} ${MONTH},${RANDOM_YEAR}`);
    practiceForm.subjectValue().should("include.text", SUBJECT);
    practiceForm.hobbieValue().should("include.text", `${HOBBIES[0]}, ${HOBBIES[1]}, ${HOBBIES[2]}`);
    practiceForm.pictureValue().should("include.text", "naruto.jpg");
    practiceForm.currentAddressValue().should("include.text", RANDOM_ADDRESS);
    practiceForm.stateAndCityValue().should("include.text", `${STATES[0]} ${CITIES[1]}`)
};


