// Assignment Code

function generatePassword() {
    
    // Variables for available Password Criteria
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const number = "0123456789";
        const symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    
    // Promt for Password Length desired
    const passLength = prompt("Please enter desired password length as a number between a minimum of 8 and a maximum of 128.")

    if (passLength >= 8 && passLength <= 128) {
        alert('Valid length entered: ' + passLength)
    } else {
        alert('Please enter a valid number between 8 and 128. Please start again.');
        return '';
    };

    // Confirmation of whether or not to include lowercase, uppercase, number, &/or symbol characters
    const yesLower = confirm('Click OK to include lowercase letters, Cancel for no.')
    const yesUpper = confirm('Click OK to include uppercase letters, Cancel for no.')
    const yesNumber = confirm('Click OK to include numbers, Cancel for no.')
    const yesSymbol  = confirm('Click OK to include symbols, Cancel for no.')

    //Error alert if no to all 4 criteria prompts
    if (!yesLower && !yesUpper && !yesNumber && !yesSymbol) {
        alert('At least one criteria of lowercase, uppercase, number, or symbol must be included. Please start again.');
        return '';
    };

    // Confirmed criteria to include in generated password
    let randomized = '';
    if (yesLower) randomized += lower;
    if (yesUpper) randomized += upper;
    if (yesNumber) randomized += number;
    if (yesSymbol) randomized += symbol;

    // Generate password
    let finalPass = '';
    for (let i = 0; i < passLength; i++) {
        let randomList = [Math.floor(Math.random() * randomized.length)];
        finalPass += randomized[randomList];
    }

return finalPass;
};

// Click EventListener for Generate Button 
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}