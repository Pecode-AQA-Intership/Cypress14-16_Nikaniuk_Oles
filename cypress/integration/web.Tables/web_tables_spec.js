import {
  addingAndSubmittingUserThruRegistrationForm,
  verifyingUserInformationInTheTable,
  editingAndSubmittingAnExistingUserInRegistrationForm,
  deletingAnExistingUserFromTheTable,
  searchingAnExistingUserInTheTableByEachField,
  selectFiveRowsInTheTable,
  sortByTypeInAscOrder,
  sortByTypeInDescOrder,
} from "../../models/webTables.js";

import {COLUMNS_TO_SORT} from "../../fixtures/test_data_config/test_data.js";


describe("Verifying 'Web Tables' adding, editing and searching functionality", () => {
  
  before(() => {
      cy.visit("/webtables");
  });
  
  it("Check that 'Registration form' can be populated with valid data", () => {
    addingAndSubmittingUserThruRegistrationForm ();
  });

  it("Check that entered values are present on the table", () => {
    verifyingUserInformationInTheTable ();
  });

it("Check that existing user can be edited with valid data", () => {
    editingAndSubmittingAnExistingUserInRegistrationForm ();
  });

  it("Check that edited values are present on the table", () => {
    verifyingUserInformationInTheTable ();
  });

  it("Check that user could be deleted from the table", () => {
    deletingAnExistingUserFromTheTable ();
  });

  it("Ensure that an existing user could be found in the table by search box", () => {
    searchingAnExistingUserInTheTableByEachField ();
  });
});

describe("Ensure that the tabel in 'Web Tables' page could be sorted by each column both in ascending and descending order", () => {
  
  before(() => {
    cy.visit("/webtables");
    selectFiveRowsInTheTable ();
  });


  it("Check sorting by 'First Name' in ascending order", () => {
    sortByTypeInAscOrder (COLUMNS_TO_SORT[0]);
  });

  it("Check sorting by 'First Name' in descending order", () => {
    sortByTypeInDescOrder (COLUMNS_TO_SORT[0]);
  });

  it("Check sorting by 'Last Name' in ascending order", () => {
    sortByTypeInAscOrder (COLUMNS_TO_SORT[1]);
  });

  it("Check sorting by 'Last Name' in descending order", () => {
    sortByTypeInDescOrder (COLUMNS_TO_SORT[1]);
  });

  it("Check sorting by 'Age' in ascending order", () => {
    sortByTypeInAscOrder (COLUMNS_TO_SORT[2]);
  });
    
  it("Check sorting by 'Age' in descending order", () => {
    sortByTypeInDescOrder (COLUMNS_TO_SORT[2]);
  });

  it("Check sorting by 'Email' in ascending order", () => {
    sortByTypeInAscOrder (COLUMNS_TO_SORT[3]);
  });

  it("Check sorting by 'Email' in descending order", () => {
    sortByTypeInDescOrder (COLUMNS_TO_SORT[3]);
  });

  it("Check sorting by 'Salary' in ascending order", () => {
    sortByTypeInAscOrder (COLUMNS_TO_SORT[4]);
  });

  it("Check sorting by 'Salary' in descending order", () => {
    sortByTypeInDescOrder (COLUMNS_TO_SORT[4]);
  });

  it("Check sorting by 'Department' in ascending order", () => {
    sortByTypeInAscOrder (COLUMNS_TO_SORT[5]);
  });

  it("Check sorting by 'Department' in descending order", () => {
    sortByTypeInDescOrder (COLUMNS_TO_SORT[5]);
  });
});
