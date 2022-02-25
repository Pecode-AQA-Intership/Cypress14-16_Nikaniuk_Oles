const { _ } = Cypress;

export const elementsToStrings = (cells$) => _.map(cells$, "textContent");
export const cellToString = (cell) => _.map(cell, String);
export const cellToNumber = (cell) => _.map(cell, Number);


export function putMonth () {
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const RANDOM_MONTHS = parseInt(Math.random() * MONTHS.length);
    return MONTHS[RANDOM_MONTHS]
};

export function putSubject () {
    const SUBJECTS = ["English", "Chemistry", "Computer Science", "Commerce", "Economics", "Social Studies", "Maths", "Accounting", "Arts", "History", "Physics", "Biology", "Hindi", "Civics"];
    const RANDOM_SUBJECTS = parseInt(Math.random() * SUBJECTS.length);
    return SUBJECTS[RANDOM_SUBJECTS]
};
