// Assignment Code

//Randomized Generator Functions into Object for easy use
// const randomized = {
//     lower: randomLower,
//     upper: randomUpper,
//     number: randomNumber,
//     symbol: randomSymbol,
// }

// Promt for Password Length desired
const passLength = prompt("Please enter desired password length as a number between a minimum of 8 and a maximum of 128.")

if (passLength > 8 && passLength < 128) {
    alert('Valid length entered: ' + passLength)
} else {
    alert('Please enter a valid number between 8 and 128. Please start again by refreshing the page.');
    //------- return;
};

// Confirmation of whether or not to include lowercase, uppercase, number, &/or symbol characters
const yesLower = confirm('Click OK to include lowercase letters, Cancel for no.')
const yesUpper = confirm('Click OK to include uppercase letters, Cancel for no.')
const yesNumber = confirm('Click OK to include numbers, Cancel for no.')
const yesSymbol  = confirm('Click OK to include symbols, Cancel for no.')

//Error alert if no to all 4 criteria prompts
if (!yesLower && !yesUpper && !yesNumber && !yesSymbol) {
    alert('At least one criteria of lowercase, uppercase, number, or symbol must be included. Please start again by refreshing the page.');
    //------- return;
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

// Randomized Generator Functions
function randomLower() {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    return lower[Math.floor(Math.random() * lower.length)];
} 

function randomUpper() {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upper[Math.floor(Math.random() * upper.length)];
}

function randomNumber() {
    const number = "0123456789";
    return number[Math.floor(Math.random() * number.length)];
}

function randomSymbol() {
    const symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    return symbol[Math.floor(Math.random() * symbol.length)];
}