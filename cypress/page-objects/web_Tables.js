import CommonPage from "./common_Page.js"
class WebTables extends CommonPage {
    addUserButton() {
        return cy.get("#addNewRecordButton");
    };

    userAgeField() {
        return cy.get("#age");
    };

    userSalaryField() {
        return cy.get("#salary");
    };

    departmentField() {
        return cy.get("#department");
    };

    departmentField() {
        return cy.get("#department");
    };

    tableGrid() {
        return cy.get(".rt-tbody")
    };

    editFourthRecordButton() {
        return cy.get("#edit-record-4")
    };

    deleteFirstRecordButton() {
        return cy.get("#delete-record-1")
    };

    firstRowCells() {
        return cy.get(".rt-table .rt-tr-group:first-child .rt-tr .rt-td")
    };

    searchBox() {
        return cy.get("#searchBox")
    };

    rowsSelectButton() {
        return cy.get("[aria-label='rows per page']")
    };

    eachRowInTable() {
        return cy.get(".rt-tr-group")
    };

    sortingButton (type) {
        return cy.contains(".rt-resizable-header-content", type)
    };

    orderAscendingPointer() {
        return cy.get(".rt-tr>.rt-th.rt-resizable-header.-sort-asc.-cursor-pointer")
    };

    orderDescendingPointer() {
        return cy.get(".rt-tr>.rt-th.rt-resizable-header.-sort-desc.-cursor-pointer")
    };

    columnByNumber (n) {
        return cy.get(`.rt-td:nth-child(${n})`)
    }
};

export default WebTables;
