/// <reference types="cypress" />
const { _ } = Cypress;
import {SELECTOR_TABLES} from "../../config_test_data/selectors_web_tables.js"
import {
  RANDOM_FIRST_NAME,
  RANDOM_LAST_NAME,
  RANDOM_EMAIL,
  RANDOM_AGE,
  RANDOM_SALARY,
  RANDOM_DEPARTMENT,
} from "../../config_test_data/test_data.js"

describe("Ensure that a new user could be added to the table thru 'Registration form'", () => {
  before(() => {
      cy.visit("/webtables");
  });
  it("Check that 'Registration form' can be populated with valid data", () => {
    cy.get(SELECTOR_TABLES.addButton)
    .click();
    cy.get(SELECTOR_TABLES.optionModal)
    .should("be.visible");

    cy.get(SELECTOR_TABLES.firstName)
    .click()
    .type(RANDOM_FIRST_NAME)
    .should("have.value", RANDOM_FIRST_NAME);

    cy.get(SELECTOR_TABLES.lastName)
    .click()
    .type(RANDOM_LAST_NAME)
    .should("have.value", RANDOM_LAST_NAME);

    cy.get(SELECTOR_TABLES.userEmail)
    .click()
    .type(RANDOM_EMAIL)
    .should("have.value", RANDOM_EMAIL);

    cy.get(SELECTOR_TABLES.userAge)
    .click()
    .type(RANDOM_AGE)
    .should("have.value", RANDOM_AGE);

    cy.get(SELECTOR_TABLES.salary)
    .click()
    .type(RANDOM_SALARY)
    .should("have.value", RANDOM_SALARY);

    cy.get(SELECTOR_TABLES.department)
    .click()
    .type(RANDOM_DEPARTMENT)
    .should("have.value", RANDOM_DEPARTMENT);

    cy.get(SELECTOR_TABLES.submit)
    .click()
    .should("not.be.disabled");
  });

  it("Check that entered values are present on the table", () => {
    cy.get(SELECTOR_TABLES.table)
    .should("include.text", RANDOM_FIRST_NAME)
    .and("include.text", RANDOM_FIRST_NAME)
    .and("include.text", RANDOM_LAST_NAME)
    .and("include.text", RANDOM_EMAIL)
    .and("include.text", RANDOM_SALARY)
    .and("include.text", RANDOM_DEPARTMENT)
  });
});

describe("Ensure that an existing user could be edited in the 'Registration form'", () => {
  it("Check that existing user can be edited with valid data", () => {
    cy.get(SELECTOR_TABLES.editFourthRecord)
    .click()

    cy.get(SELECTOR_TABLES.optionModal)
    .should("be.visible");

    cy.get(SELECTOR_TABLES.firstName)
    .clear()
    .type(RANDOM_FIRST_NAME)
    .should("have.value", RANDOM_FIRST_NAME);

    cy.get(SELECTOR_TABLES.lastName)
    .clear()
    .type(RANDOM_LAST_NAME)
    .should("have.value", RANDOM_LAST_NAME);

    cy.get(SELECTOR_TABLES.userEmail)
    .clear()
    .type(RANDOM_EMAIL)
    .should("have.value", RANDOM_EMAIL);

    cy.get(SELECTOR_TABLES.userAge)
    .clear()
    .type(RANDOM_AGE)
    .should("have.value", RANDOM_AGE);

    cy.get(SELECTOR_TABLES.salary)
    .clear()
    .type(RANDOM_SALARY)
    .should("have.value", RANDOM_SALARY);

    cy.get(SELECTOR_TABLES.department)
    .clear()
    .type(RANDOM_DEPARTMENT)
    .should("have.value", RANDOM_DEPARTMENT);

    cy.get(SELECTOR_TABLES.submit)
    .click()
    .should("not.be.disabled");
  });

  it("Check that entered values are present on the table", () => {
    cy.get(SELECTOR_TABLES.table)
    .should("include.text", RANDOM_FIRST_NAME)
    .and("include.text", RANDOM_FIRST_NAME)
    .and("include.text", RANDOM_LAST_NAME)
    .and("include.text", RANDOM_EMAIL)
    .and("include.text", RANDOM_SALARY)
    .and("include.text", RANDOM_DEPARTMENT)
  });
});

describe("Ensure that an existing user is deleted from the table", () => {
  it("Check that user can't be found in the table", () => {
    cy.get(SELECTOR_TABLES.firstRow)
    .then((deletedCells) => {
      const deletedFirstName = deletedCells.get(0).innerText;
      const deletedLastName = deletedCells.get(1).innerText;
      const deletedAge = deletedCells.get(2).innerText;
      const deletedEmail = deletedCells.get(3).innerText;
      const deletedSalary = deletedCells.get(4).innerText;
      const deletedDepartment = deletedCells.get(5).innerText;

    cy.get(SELECTOR_TABLES.deleteFirstRecord)
    .click();

    cy.get(SELECTOR_TABLES.table)
    .should("not.have.value", deletedFirstName)
    .and("not.have.value", deletedLastName)
    .and("not.have.value", deletedAge)
    .and("not.have.value", deletedEmail)
    .and("not.have.value", deletedSalary)
    .and("not.have.value", deletedDepartment)
    });
  });
});

describe("Ensure that an existing user could be found in the table", () => {
  it("Check that user can be found by 'First Name'", () => {
    cy.get(SELECTOR_TABLES.searchBox)
    .type("Alden");

    cy.get(SELECTOR_TABLES.firstRow)
    .then((cells) => {
      expect(cells.get(0).innerText).to.equal("Alden")
    });
  });

  it("Check that user can be found by 'Last Name'", () => {
    cy.get(SELECTOR_TABLES.searchBox)
    .clear()
    .type("Cantrell");

    cy.get(SELECTOR_TABLES.firstRow)
    .then((cells) => {
      expect(cells.get(1).innerText).to.equal("Cantrell")
    });
  });

  it("Check that user can be found by 'Age'", () => {
    cy.get(SELECTOR_TABLES.searchBox)
    .clear()
    .type("45");

    cy.get(SELECTOR_TABLES.firstRow)
    .then((cells) => {
      expect(cells.get(2).innerText).to.equal("45")
    });
  });

  it("Check that user can be found by 'Email'", () => {
    cy.get(SELECTOR_TABLES.searchBox)
    .clear()
    .type("alden@example.com");

    cy.get(SELECTOR_TABLES.firstRow)
    .then((cells) => {
      expect(cells.get(3).innerText).to.equal("alden@example.com")
    });
  });

  it("Check that user can be found by 'Salary'", () => {
    cy.get(SELECTOR_TABLES.searchBox)
    .clear()
    .type("12000");

    cy.get(SELECTOR_TABLES.firstRow)
    .then((cells) => {
      expect(cells.get(4).innerText).to.equal("12000")
    });
  });

  it("Check that user can be found by 'Department'", () => {
    cy.get(SELECTOR_TABLES.searchBox)
    .clear()
    .type("Compliance");

    cy.get(SELECTOR_TABLES.firstRow)
    .then((cells) => {
      expect(cells.get(5).innerText).to.equal("Compliance")
    });
  });
});

describe("Ensure that the tabel in 'Web Tables' page could be sorted by each column", () => {
  before(() => {
    cy.visit("/webtables");
    cy.get(SELECTOR_TABLES.rowSelect)
    .select("5");
    cy.get(SELECTOR_TABLES.eachRow)
    .should("have.length", 5)
  });

  it("Check sorting by 'First Name' in ascending order", () => {
    cy.log("**sort by 'First Name' in ascending order**")
    .wait(1000);

    cy.contains(SELECTOR_TABLES.columnSortingButton, "First Name")
    .click();

    cy.get(SELECTOR_TABLES.orderAscPointer)
    .should("be.visible");

    cy.log("**checking that sorted values matches**");
    const elementsToStrings = (cells$) => _.map(cells$, "textContent");
    const firstNamesToSrtings = (firstNames) => _.map(firstNames, String);
    cy.get(SELECTOR_TABLES.firstNameColumn)
    .then(elementsToStrings)
    .then(firstNamesToSrtings)
    .then((firstNames) => {
      const sorted = _.orderBy(firstNames, ["asc"]);
      const sortedJson = JSON.stringify(sorted);//to string array of expected cells
      const firstNamesJSON = JSON.stringify(firstNames);//to string array of actual cells
      expect(firstNamesJSON, "cells are sorted in ascending order").to.deep.equal(sortedJson)
    });
  });

  it("Check sorting by 'First Name' in descending order", () => {
    cy.log("**sort by 'First Name' in descending order**")
    .wait(1000);

    cy.contains(SELECTOR_TABLES.columnSortingButton, "First Name")
    .click();

    cy.get(SELECTOR_TABLES.orderDescPointer)
    .should("be.visible");

    cy.log("**checking that sorted values matches**");
    const elementsToStrings = (cells$) => _.map(cells$, "textContent");
    const firstNamesToSrtings = (firstNames) => _.map(firstNames, String);
    cy.get(SELECTOR_TABLES.firstNameColumn)
    .then(elementsToStrings)
    .then(firstNamesToSrtings)
    .then((firstNames) => {
      const sorted = _.orderBy(firstNames, ["desc"]);
      const sortedJson = JSON.stringify(sorted);//to string array of expected cells
      const firstNamesJSON = JSON.stringify(firstNames);//to string array of actual cells
      expect(firstNamesJSON, "cells are sorted in descending order").to.deep.equal(sortedJson)
    });
  });    

  it("Check sorting by 'Last Name' in ascending order", () => {
    cy.log("**sort by 'Last Name' in ascending order**")
    .wait(1000);

    cy.contains(SELECTOR_TABLES.columnSortingButton, "Last Name")
    .click();

    cy.get(SELECTOR_TABLES.orderAscPointer)
    .should("be.visible");

    cy.log("**checking that sorted values matches**");
    const elementsToStrings = (cells$) => _.map(cells$, "textContent");
    const lastNamesToSrtings = (lastNames) => _.map(lastNames, String);
    cy.get(SELECTOR_TABLES.lastNameColumn)
    .then(elementsToStrings)
    .then(lastNamesToSrtings)
    .then((lastNames) => {
      const sorted = _.orderBy(lastNames, ["asc"]);
      const sortedJson = JSON.stringify(sorted);//to string array of expected cells
      const lastNamesJSON = JSON.stringify(lastNames);//to string array of actual cells
      expect(lastNamesJSON, "cells are sorted in ascending order").to.deep.equal(sortedJson)
    });
  });

  it("Check sorting by 'Last Name' in descending order", () => {
    cy.log("**sort by 'Last Name' in descending order**")
    .wait(1000);

    cy.contains(SELECTOR_TABLES.columnSortingButton, "Last Name")
    .click();

    cy.get(SELECTOR_TABLES.orderDescPointer)
    .should("be.visible");

    cy.log("**checking that sorted values matches**");
    const elementsToStrings = (cells$) => _.map(cells$, "textContent");
    const lastNamesToSrtings = (lastNames) => _.map(lastNames, String);
    cy.get(SELECTOR_TABLES.lastNameColumn)
    .then(elementsToStrings)
    .then(lastNamesToSrtings)
    .then((lastNames) => {
      const sorted = _.orderBy(lastNames, ["desc"]);
      const sortedJson = JSON.stringify(sorted);//to string array of expected cells
      const lastNamesJSON = JSON.stringify(lastNames);//to string array of actual cells
      expect(lastNamesJSON, "cells are sorted in descending order").to.deep.equal(sortedJson)
    });
  });

  it("Check sorting by 'Age' in ascending order", () => {
    cy.log("**sort by 'Age' in ascending order**")
    .wait(1000);

    cy.contains(SELECTOR_TABLES.columnSortingButton, "Age")
    .click();

    cy.get(SELECTOR_TABLES.orderAscPointer)
    .should("be.visible");

    cy.log("**checking that sorted values matches**");
    const elementsToStrings = (cells$) => _.map(cells$, "textContent");
    const agestoNumbers = (ages) => _.map(ages, Number)
    cy.get(SELECTOR_TABLES.ageColumn)
    .then(elementsToStrings)
    .then(agestoNumbers)
    .then((ages) => {
      const sorted = _.orderBy(ages, ["asc"]);
      expect(ages, "cells are sorted in ascending order").to.deep.equal(sorted)
    });
  });
    
  it("Check sorting by 'Age' in descending order", () => {
    cy.log("**sort by 'Age' in descending order**")
    .wait(1000);

    cy.contains(SELECTOR_TABLES.columnSortingButton, "Age")
    .click();

    cy.get(SELECTOR_TABLES.orderDescPointer)
    .should("be.visible");

    cy.log("**checking that sorted values matches**");
    const elementsToStrings = (cells$) => _.map(cells$, "textContent");
    const agestoNumbers = (ages) => _.map(ages, Number);
    cy.get(SELECTOR_TABLES.ageColumn)
    .then(elementsToStrings)
    .then(agestoNumbers)
    .then((ages) => {
      const sorted = _.orderBy(ages, ["desc"]);
      expect(ages, "cells are sorted in descending order").to.deep.equal(sorted)
    });
  });

  it("Check sorting by 'Email' in ascending order", () => {
    cy.log("**sort by 'Email' in ascending order**")
    .wait(1000);

    cy.contains(SELECTOR_TABLES.columnSortingButton, "Email")
    .click();

    cy.get(SELECTOR_TABLES.orderAscPointer)
    .should("be.visible");

    cy.log("**checking that sorted values matches**");
    const elementsToStrings = (cells$) => _.map(cells$, "textContent");
    const emailsToSrtings = (emails) => _.map(emails, String);
    cy.get(SELECTOR_TABLES.emailColumn)
    .then(elementsToStrings)
    .then(emailsToSrtings)
    .then((emails) => {
      const sorted = _.orderBy(emails, ["asc"]);
      const sortedJson = JSON.stringify(sorted);//to string array of expected cells
      const emailsJSON = JSON.stringify(emails);//to string array of actual cells
      expect(emailsJSON, "cells are sorted in ascending order").to.deep.equal(sortedJson)
    });
  });

  it("Check sorting by 'Email' in descending order", () => {
    cy.log("**sort by 'Email' in descending order**")
    .wait(1000);

    cy.contains(SELECTOR_TABLES.columnSortingButton, "Email")
    .click();

    cy.get(SELECTOR_TABLES.orderDescPointer)
    .should("be.visible");

    cy.log("**checking that sorted values matches**");
    const elementsToStrings = (cells$) => _.map(cells$, "textContent");
    const emailsToSrtings = (emails) => _.map(emails, String);
    cy.get(SELECTOR_TABLES.emailColumn)
    .then(elementsToStrings)
    .then(emailsToSrtings)
    .then((emails) => {
      const sorted = _.orderBy(emails, ["desc"]);
      const sortedJson = JSON.stringify(sorted);//to string array of expected cells
      const emailsJSON = JSON.stringify(emails);//to string array of actual cells
      expect(emailsJSON, "cells are sorted in descending order").to.deep.equal(sortedJson)
    });
  });

  it("Check sorting by 'Salary' in ascending order", () => {
    cy.log("**sort by 'Salary' in ascending order**")
    .wait(1000);

    cy.contains(SELECTOR_TABLES.columnSortingButton, "Salary")
    .click();

    cy.get(SELECTOR_TABLES.orderAscPointer)
    .should("be.visible");

    cy.log("**checking that sorted values matches**");
    const elementsToStrings = (cells$) => _.map(cells$, "textContent");
    const salariesToNumbers = (salaries) => _.map(salaries, Number);
    cy.get(SELECTOR_TABLES.salaryColumn)
      .then(elementsToStrings)
      .then(salariesToNumbers)
      .then((salaries) => {
        const sorted = _.orderBy(salaries, ["asc"]);
        expect(salaries, "cells are sorted in ascending order").to.deep.equal(sorted)
    });
  });

  it("Check sorting by 'Salary' in descending order", () => {
    cy.log("**sort by 'Salary' in descending order**")
    .wait(1000);

    cy.contains(SELECTOR_TABLES.columnSortingButton, "Salary")
    .click();

    cy.get(SELECTOR_TABLES.orderDescPointer)
    .should("be.visible");

    cy.log("**checking that sorted values matches**");
    const elementsToStrings = (cells$) => _.map(cells$, "textContent");
    const salariesToNumbers = (salaries) => _.map(salaries, Number);
    cy.get(SELECTOR_TABLES.salaryColumn)
      .then(elementsToStrings)
      .then(salariesToNumbers)
      .then((salaries) => {
        const sorted = _.orderBy(salaries, ["desc"]);
        expect(salaries, "cells are sorted in descending order").to.deep.equal(sorted)
      });
  });

  it("Check sorting by 'Department' in ascending order", () => {
    cy.log("**sort by 'Department' in ascending order**")
    .wait(1000);

    cy.contains(SELECTOR_TABLES.columnSortingButton, "Department")
    .click();

    cy.get(SELECTOR_TABLES.orderAscPointer)
    .should("be.visible");

    cy.log("**checking that sorted values matches**");
    const elementsToStrings = (cells$) => _.map(cells$, "textContent");
    const departmentsToSrtings = (departments) => _.map(departments, String);
    cy.get(SELECTOR_TABLES.departmentColumn)
    .then(elementsToStrings)
    .then(departmentsToSrtings)
    .then((departments) => {
      const sorted = _.orderBy(departments, ["asc"]);
      const sortedJson = JSON.stringify(sorted);//to string array of expected cells
      const departmentsJSON = JSON.stringify(departments);//to string array of actual cells
      expect(departmentsJSON, "cells are sorted in ascending order").to.deep.equal(sortedJson)
    });
  });

  it("Check sorting by 'Department' in descending order", () => {
    cy.log("**sort by 'Department' in descending order**")
    .wait(1000);

    cy.contains(SELECTOR_TABLES.columnSortingButton, "Department")
    .click();

    cy.get(SELECTOR_TABLES.orderDescPointer)
    .should("be.visible");

    cy.log("**checking that sorted values matches**");
    const elementsToStrings = (cells$) => _.map(cells$, "textContent");
    const departmentsToSrtings = (departments) => _.map(departments, String);
    cy.get(SELECTOR_TABLES.departmentColumn)
    .then(elementsToStrings)
    .then(departmentsToSrtings)
    .then((departments) => {
      const sorted = _.orderBy(departments, ["desc"]);
      const sortedJson = JSON.stringify(sorted);//to string array of expected cells
      const departmentsJSON = JSON.stringify(departments);//to string array of actual cells
      expect(departmentsJSON, "cells are sorted in descending order").to.deep.equal(sortedJson)
    });
  });
});
