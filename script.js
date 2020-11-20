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

// Write password to the #password input
function writePassword() {

  // prompt for insert a number between 8 and 128
   var insert = parseInt(prompt("How many characters you want for your password?" +'\n Your password must be between 8 and 128 characters.'));

  // If number less than 8 or greater than 128, a string or NaN, user is asked for isert again
  while (insert < 8 || insert > 128 || typeof(insert) != "number" || insert === NaN || insert === null) {
       alert('Please Choose a valid number between 8 and 128');
       insert = parseInt(prompt("How many characters you want for your password?" +'\n Your password must be between 8 and 128 characters.'));
  }
  if (insert=true) {
     confirmLower = confirm('Would you add lowercase letters?');
     confirmUpper = confirm('Would you add uppercase letters?');
     confirmNumber = confirm('Would you add numbers?');
     confirmSymbol = confirm('Would you add symbols?');
  }

   // if users do not choose any criteria
 if (!confirmLower && !confirmUpper &&
    !confirmNumber && !confirmSymbol) {
      alert ('You must choose a criteria!');
   confirmLower = confirm('Would you add lowercase letters?');
   confirmUpper = confirm('Would you add uppercase letters?');
   confirmNumber = confirm('Would you add numbers?');
   confirmSymbol = confirm('Would you add symbols?');
  }

  //choosing all criteria
  if (confirmLower && confirmUpper &&
  confirmNumber && confirmSymbol) {
  console.log(randomLower + randomUpper + randomNumber + randomSymbol);
  }
  
  // choosing 3 criteria
  if (confirmLower && confirmUpper && confirmNumber) {
  choices = (randomLower + randomUpper + randomNumber);
  }
  else if (confirmLower && confirmUpper && confirmSymbol) {
    console.log(randomLower + randomUpper + randomSymbol);
  }
  else if (confirmLower && confirmNumber && confirmSymbol) {
    console.log(randomLower + randomNumber + randomSymbol);
  }
  else {
    console.log(randomUpper + randomNumber + randomSymbol);
  }

  // choosing one criteria
  if (confirmLower) {
    console.log(randomLower);
  }
  else if (confirmUpper) {
    console.log(randomUpper);
  }
  else if (confirmNumbe) {
    console.log(randomNumber);
  } else {console.log(randomSymbol);
  }

};
  
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

