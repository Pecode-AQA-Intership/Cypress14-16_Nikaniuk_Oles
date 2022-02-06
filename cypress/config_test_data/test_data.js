import faker from 'faker';

export const BASE_URL = "https://demoqa.com/text-box"
export const RANDOM_NAME = faker.name.findName();
export const RANDOM_EMAIL = faker.internet.email();
export const RANDOM_ADDRESS = faker.address.streetAddress();
export const RANDOM_PERNAMENT_ADDRESS = faker.address.secondaryAddress();

export const INPUT_USER_NAME = '#userName';
export const INPUT_EMAIL = '#userEmail';
export const INPUT_CURRENT_ADDRESS = '#currentAddress';
export const INPUT_PERNAMENT_ADDRESS = '#permanentAddress';
export const SUBMIT_BUTTON = '#submit';

export const OUTPUT_USER_NAME = '#output #name';
export const OUTPUT_EMAIL = '#output #email';
export const OUTPUT_CURRENT_ADDRESS = '#output #currentAddress';
export const OUTPUT_PERNAMENT_ADDRESS = '#output #permanentAddress';