import faker from "faker";
import {
    putMonth,
    putSubject,
    cellToString,
    cellToNumber
} from "./test_functions.js";

export const RANDOM_NAME = faker.name.findName();
export const RANDOM_EMAIL = faker.internet.email();
export const RANDOM_ADDRESS = faker.address.streetAddress();
export const RANDOM_PERNAMENT_ADDRESS = faker.address.secondaryAddress();

export const RANDOM_FIRST_NAME = faker.name.firstName();
export const RANDOM_LAST_NAME = faker.name.lastName();
export const RANDOM_AGE = faker.datatype.number({
    'min': 10,
    'max': 65
});
export const RANDOM_SALARY = faker.datatype.number({
    'min': 350,
    'max': 5000
});
export const RANDOM_DEPARTMENT = faker.commerce.department()
export const USERS_INFORMATION = {
    firstName: [
        "Cierra", "Alden", "Kierra"
    ],
    lastName: [
        "Vega", "Cantrell", "Gentry"
    ],
    age: [
        "39", "45", "29"
    ],
    email: [
        "cierra@example.com", "alden@example.com", "kierra@example.com"
    ],
    salary: [
        "10000", "12000", "2000"
    ],
    department: [
        "Insurance", "Compliance", "Legal"
    ]
}
export const RANDOM_FULL_PHONE_NUMBER = faker.datatype.number({
    'min': 1000000000,
    'max': 9999999999
});


export const GENDER = ["Male", "Female", "Other"];
export const HOBBIES = ["Sports", "Reading", "Music"];
export const STATES = ["NCR", "Uttar Pradesh", "Haryana", "Rajasthan"];
export const CITIES = ["Delhi", "Gurgaon", "Noida", "Agra", "Lucknow", "Merrut", "Karnal", "Panipat", "Jaipur", "Jaiselmer"];
export const RANDOM_YEAR = Math.floor(Math.random() * (2100 - 1900 + 1) + 1900);
export const RANDOM_DAY = Math.floor(Math.random() * 28);
export const MONTH = putMonth();
export const SUBJECT = putSubject();
export const COLUMNS_TO_SORT = [{
    type: "First Name",
    rowNumber: 1,
    formatFunction: cellToString
},
{
    type: "Last Name",
    rowNumber: 2,
    formatFunction: cellToString
},
{
    type: "Age",
    rowNumber: 3,
    formatFunction: cellToNumber
},
{
    type: "Email",
    rowNumber: 4,
    formatFunction: cellToString
},
{
    type: "Salary",
    rowNumber: 5,
    formatFunction: cellToString
},
{
    type: "Department",
    rowNumber: 6,
    formatFunction: cellToString
}];
