import WebTables from "../page-objects/web_Tables.js";
import {
    RANDOM_FIRST_NAME,
    RANDOM_LAST_NAME,
    RANDOM_EMAIL,
    RANDOM_AGE,
    RANDOM_SALARY,
    RANDOM_DEPARTMENT,
    USERS_INFORMATION
} from "../fixtures/test_data_config/test_data.js";
import {elementsToStrings} from "../fixtures/test_data_config/test_functions.js";

const { _ } = Cypress;
const webTables = new WebTables();

export function clickOnAddButton () {
    webTables.addUserButton().click().should("not.be.disabled")
};

export function clickOnEditButton () {
    webTables.editFourthRecordButton().click()
};

export function clickOnDeleteButton () {
    webTables.deleteFirstRecordButton().click()
};

export function addingAndSubmittingUserThruRegistrationForm () {
    clickOnAddButton ();
    webTables.userFirstNameField().type(RANDOM_FIRST_NAME).should("have.value", RANDOM_FIRST_NAME);
    webTables.userLastNameField().type(RANDOM_LAST_NAME).should("have.value", RANDOM_LAST_NAME);
    webTables.userEmailField().type(RANDOM_EMAIL).should("have.value", RANDOM_EMAIL);
    webTables.userAgeField().type(RANDOM_AGE).should("have.value", RANDOM_AGE);
    webTables.userSalaryField().type(RANDOM_SALARY).should("have.value", RANDOM_SALARY);
    webTables.departmentField().type(RANDOM_DEPARTMENT).should("have.value", RANDOM_DEPARTMENT);
    webTables.submitButton().click().should("not.be.disabled")
};

export function verifyingUserInformationInTheTable () {
    webTables.tableGrid().should("include.text", RANDOM_FIRST_NAME)
    .and("include.text", RANDOM_LAST_NAME)
    .and("include.text", RANDOM_EMAIL)
    .and("include.text", RANDOM_AGE)
    .and("include.text", RANDOM_SALARY)
    .and("include.text", RANDOM_DEPARTMENT)
};

export function editingAndSubmittingAnExistingUserInRegistrationForm () {
    clickOnEditButton ();
    webTables.userFirstNameField().clear().type(RANDOM_FIRST_NAME).should("have.value", RANDOM_FIRST_NAME);
    webTables.userLastNameField().clear().type(RANDOM_LAST_NAME).should("have.value", RANDOM_LAST_NAME);
    webTables.userEmailField().clear().type(RANDOM_EMAIL).should("have.value", RANDOM_EMAIL);
    webTables.userAgeField().clear().type(RANDOM_AGE).should("have.value", RANDOM_AGE);
    webTables.userSalaryField().clear().type(RANDOM_SALARY).should("have.value", RANDOM_SALARY);
    webTables.departmentField().clear().type(RANDOM_DEPARTMENT).should("have.value", RANDOM_DEPARTMENT);
    webTables.submitButton().click().should("not.be.disabled")
};

export function deletingAnExistingUserFromTheTable () {
    webTables.firstRowCells().should("be.visible")
    .then((deletedCells) => {
        const deletedFirstName = deletedCells.get(0).innerText;
        const deletedLastName = deletedCells.get(1).innerText;
        const deletedAge = deletedCells.get(2).innerText;
        const deletedEmail = deletedCells.get(3).innerText;
        const deletedSalary = deletedCells.get(4).innerText;
        const deletedDepartment = deletedCells.get(5).innerText;
        clickOnDeleteButton ();
    webTables.tableGrid().should("not.have.value", deletedFirstName)
    .and("not.have.value", deletedLastName)
    .and("not.have.value", deletedAge)
    .and("not.have.value", deletedEmail)
    .and("not.have.value", deletedSalary)
    .and("not.have.value", deletedDepartment)
    });
};

export function searchingAnExistingUserInTheTableByEachField () {
    const parametrs = ["firstName", "lastName", "age", "email", "salary", "department"];
    for (let i = 0; i < parametrs.length; i++) {
        webTables.searchBox().clear().type(USERS_INFORMATION[parametrs[i]][1])
        webTables.firstRowCells()
        .then((cells) => {
            expect(cells.get(i).innerText).to.equal(USERS_INFORMATION[parametrs[i]][1])
        });
    };
};

export function selectFiveRowsInTheTable () {
    webTables.rowsSelectButton().select("5").should("be.visible");
    webTables.eachRowInTable().should("have.length", 5)
};

export function sortByTypeInAscOrder (params) {
    webTables.sortingButton(params.type).click();
    webTables.orderAscendingPointer().should("be.visible");
    webTables.columnByNumber(params.rowNumber)
    .then(elementsToStrings)
    .then(params.formatFunction)
    .then((data) => {
        const sorted = _.orderBy(data, ["asc"]);
        const sortedJson = JSON.stringify(sorted);
        const dataJSON = JSON.stringify(data);
        expect(dataJSON, "cells are sorted in ascending order").to.deep.equal(sortedJson)
    });
};

export function sortByTypeInDescOrder (params) {
    webTables.sortingButton(params.type).click();
    webTables.orderDescendingPointer().should("be.visible");
    webTables.columnByNumber(params.rowNumber)
    .then(elementsToStrings)
    .then(params.formatFunction)
    .then((data) => {
        const sorted = _.orderBy(data, ["desc"]);
        const sortedJson = JSON.stringify(sorted);
        const dataJSON = JSON.stringify(data);
        expect(dataJSON, "cells are sorted in descending order").to.deep.equal(sortedJson)
    });
};