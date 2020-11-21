// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

var number = [0,1,2,3,4,5,6,7,8,9]

var symbol = ['!','@','#','$','^','&','*','(',')','{','}','?','<','>']

var  randomLower = lower [Math.floor(Math.random() * lower.length)]
var  randomUpper = upper [Math.floor(Math.random() * upper.length)]
var  randomNumber = number [Math.floor(Math.random() * number.length)]
var  randomSymbol = symbol [Math.floor(Math.random() * symbol.length)]


generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {


 // prompt for insert a number between 8 and 128 for the length of password
 var passLength = parseInt(prompt("How many characters you want for your password?" +'\n Your password must be between 8 and 128 characters.'));

 // If number less than 8 or greater than 128, a string or NaN, user is asked for isert again
while (passLength < 8 || passLength > 128 || typeof(passLength) != "number" || passLength === NaN || passLength === null) {
  alert('Please choose a valid number between 8 and 128');
  passLength = parseInt(prompt("How many characters you want for your password?" +'\n Your password must be between 8 and 128 characters.'));
}

 var confirmLower = confirm('Would you add lowercase letters?');
 var confirmUpper = confirm('Would you add uppercase letters?');
 var confirmNumber = confirm('Would you add numbers?');
 var confirmSymbol = confirm('Would you add symbols?');


 
// if users do not choose any criteria
while (!confirmLower && !confirmUpper &&
  !confirmNumber && !confirmSymbol) {
    alert ('You must choose a criteria!');
 confirmLower = confirm('Would you add lowercase letters?');
 confirmUpper = confirm('Would you add uppercase letters?');
 confirmNumber = confirm('Would you add numbers?');
 confirmSymbol = confirm('Would you add symbols?');
}


    //  if user choose criteria
  if (confirmLower) {
    console.log(randomLower);
  }
  if (confirmUpper) {
    console.log(randomUpper);
  }
  if (confirmNumber) {
    console.log(randomNumber);
  } 
  if (confirmSymbol) {
    console.log(randomSymbol);
  }

}

  
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // writePassword();


