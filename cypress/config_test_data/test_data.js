import faker from "faker";
import {
    putMonth,
    putSubject,
    putState,
    putNCRCity,
    putUttarPradeshCity,
    putHaryanaCity,
    putRajasthanCity
} from "./functions_16.js";

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
export const STATE = putState();
export const NCR_CITY = putNCRCity();
export const UTTAR_PRADESH_CITY = putUttarPradeshCity();
export const HARYANA_CITY = putHaryanaCity();
export const RAJASTHAN_CITY = putRajasthanCity();

