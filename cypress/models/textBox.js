import TextBox from "../page-objects/text_Box.js";
import {
    RANDOM_NAME,
    RANDOM_EMAIL,
    RANDOM_ADDRESS,
    RANDOM_PERNAMENT_ADDRESS,
} from "../fixtures/test_data_config/test_data.js";

const textBox = new TextBox();

export function populatingAndSubmittingTextBox () {
    textBox.inputUserNameField().type(RANDOM_NAME).should("have.value", RANDOM_NAME);
    textBox.userEmailField().type(RANDOM_EMAIL).should("have.value", RANDOM_EMAIL);
    textBox.currentAddressField().type(RANDOM_ADDRESS).should("have.value", RANDOM_ADDRESS);
    textBox.inputPernamentAddressField().type(RANDOM_PERNAMENT_ADDRESS).should("have.value", RANDOM_PERNAMENT_ADDRESS);
    textBox.submitButton().click().should("not.be.disabled");
};

export function verifyingOutputInformationOfTextBox () {
    textBox.outputUserNameField().should("include.text", RANDOM_NAME);
    textBox.outputUserEmailField().should("include.text", RANDOM_EMAIL);
    textBox.outputCurrentAddressField().should("include.text", RANDOM_ADDRESS);
    textBox.outputPernamentAddressField().should("include.text", RANDOM_PERNAMENT_ADDRESS);
};