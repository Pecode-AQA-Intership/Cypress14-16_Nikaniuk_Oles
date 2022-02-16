import faker from 'faker';

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
export const RANDOM_DEPARTMENT = faker.lorem.words(1)
