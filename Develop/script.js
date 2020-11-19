// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var upper = lower.toUpperCase()

var number = [0,1,2,3,4,5,6,7,8,9]

var symbol = ['!','@','#','$','^','&','*','(',')','{','}','?','<','>']

var  randomLower = lower [Math.floor(Math.random() * lower.length)]
var  randomUpper = upper [Math.floor(Math.random() * upper.length)]
var  randomNumber = number [Math.floor(Math.random() * number.length)]
var  randomSymbol = symbol [Math.floor(Math.random() * symbole.length)]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
