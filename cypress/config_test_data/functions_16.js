import {STATES} from "./test_data.js";

export function putMonth () {
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
    const RANDOM_MONTHS = parseInt(Math.random() * MONTHS.length);
    return MONTHS[RANDOM_MONTHS]
};

export function putSubject () {
    const SUBJECTS = ["English", "Chemistry", "Computer Science", "Commerce", "Economics", "Social Studies", "Maths", "Accounting", "Arts", "History", "Physics", "Biology", "Hindi", "Civics"];
    const RANDOM_SUBJECTS = parseInt(Math.random() * SUBJECTS.length);
    return SUBJECTS[RANDOM_SUBJECTS]
};

export function putState () {
    const RANDOM_STATES = parseInt(Math.random() * STATES.length);
    return STATES[RANDOM_STATES]
};

export function putNCRCity () {
    const NCR_CITIES = ["Delhi", "Gurgaon", "Noida"];
    const RANDOM_NCR_CITIES = parseInt(Math.random() * NCR_CITIES.length);
    return NCR_CITIES[RANDOM_NCR_CITIES]
};

export function putUttarPradeshCity () {
    const UTTAR_PRADESH_CITIES = ["Agra", "Lucknow", "Merrut"];
    const RANDOM_UTTAR_PRADESH_CITIES = parseInt(Math.random() * UTTAR_PRADESH_CITIES.length);
    return UTTAR_PRADESH_CITIES[RANDOM_UTTAR_PRADESH_CITIES]
};

export function putHaryanaCity () {
    const HARYANA_CITIES = ["Karnal", "Panipat"];
    const RANDOM_HARYANA_CITIES = parseInt(Math.random() * HARYANA_CITIES.length);
    return HARYANA_CITIES[RANDOM_HARYANA_CITIES]
};

export function putRajasthanCity () {
    const RAJASTHAN_CITIES = ["Jaipur", "Jaiselmer"];
    const RANDOM_RAJASTHAN_CITIES = parseInt(Math.random() * RAJASTHAN_CITIES.length);
    return RAJASTHAN_CITIES[RANDOM_RAJASTHAN_CITIES]
};