import CommonPage from "./common_Page.js"
class PracticeForm extends CommonPage {
    maleGenderRadioButton() {
        return cy.get("#gender-radio-1");
    };

    femaleGenderRadioButton() {
        return cy.get("#gender-radio-2");
    };

    otherGenderRadioButton() {
        return cy.get("#gender-radio-3");
    };

    userPhoneNumberField() {
        return cy.get("#userNumber");
    };

    dateOfBirthInputField() {
        return cy.get("#dateOfBirthInput");
    };

    dateOfBirthYearPicker() {
        return cy.get(".react-datepicker__year-select");
    };

    dateOfBirthMonthPicker() {
        return cy.get(".react-datepicker__month-select");
    };

    dateOfBirthWeekPicker() {
        return cy.get(".react-datepicker__week");
    };

    subjectsContainerField() {
        return cy.get("#subjectsContainer");
    };
    
    subjectItem() {
        return cy.get(".subjects-auto-complete__multi-value__label");
    };

    sportsHobbieCheckbox() {
        return cy.get("#hobbies-checkbox-1");
    };

    readingHobbieCheckbox() {
        return cy.get("#hobbies-checkbox-2");
    };

    musicHobbieCheckbox() {
        return cy.get("#hobbies-checkbox-3");
    };

    uploadPictureContainer() {
        return cy.get("#uploadPicture");
    };

    statesDropdownList() {
        return cy.get("#react-select-3-input");
    };

    statesContainerField() {
        return cy.get("#state [class$='singleValue']");
    };

    citiesDropdownList() {
        return cy.get("#react-select-4-input");
    };

    citiesContainerField() {
        return cy.get("#city [class$='singleValue']");
    };

    cityInput() {
        return cy.get("#city #react-select-4-input");
    };

    welcomeModalWindow() {
        return cy.get(".modal-content");
    };

    userNameValue() {
        return cy.get("tr:nth-child(1) td:nth-child(2)");
    };

    userEmailValue() {
        return cy.get("tr:nth-child(2) td:nth-child(2)");
    };

    userGenderValue() {
        return cy.get("tr:nth-child(3) td:nth-child(2)");
    };

    userPhoneNumberValue() {
        return cy.get("tr:nth-child(4) td:nth-child(2)");
    };

    userdateOfBirthValue() {
        return cy.get("tr:nth-child(5) td:nth-child(2)");
    };

    subjectValue() {
        return cy.get("tr:nth-child(6) td:nth-child(2)");
    };

    hobbieValue() {
        return cy.get("tr:nth-child(7) td:nth-child(2)");
    };

    pictureValue() {
        return cy.get("tr:nth-child(8) td:nth-child(2)");
    };

    currentAddressValue() {
        return cy.get("tr:nth-child(9) td:nth-child(2)");
    };

    stateAndCityValue() {
        return cy.get("tr:nth-child(10) td:nth-child(2)");
    };
};

export default PracticeForm;

