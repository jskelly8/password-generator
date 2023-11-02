// Assignment Code
// DOM Elements

// Randomized Generator Functions into Object for easy use
// const randomized = {
//     lower: randomLower,
//     upper: randomUpper,
//     number: randomNumber,
//     symbol: randomSymbol,
// }

// console.log(randomized.lower);

// Click EventListener for Generate Button 
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
// Generate New & Secure Password Function
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

// console.log(randomLower);