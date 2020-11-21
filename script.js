// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var symbol = ["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];


// Add event listener to generate button
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

 var includeLower = confirm('Would you add lowercase letters?');
 var includeUpper = confirm('Would you add uppercase letters?');
 var includeNumber = confirm('Would you add numbers?');
 var includeSymbol = confirm('Would you add symbols?');


 
  // if users do not choose any criteria
  while (!includeLower && !includeUpper &&
  !includeNumber && !includeSymbol) {
  alert ('You must choose a criteria!');
  includeLower = confirm('Would you add lowercase letters?');
  includeUpper = confirm('Would you add uppercase letters?');
  includeNumber = confirm('Would you add numbers?');
  includeSymbol = confirm('Would you add symbols?');
  }
    var choices;
    //choosing all criteria
    if (includeLower && includeUpper &&
      includeNumber && includeSymbol) {
     choices = lower.concat(upper, numbers, symbol); // do not use [] b.c. of getting many commas even no comma in symbols
     }
     // choosing 3 criteria
     else if (includeLower && includeUpper && includeNumber) {
       choices = lower.concat (upper, numbers);
     }
     else if (includeLower && includeUpper && includeSymbol) {
       choices = lower.concat(upper, symbol);
     }
     else if (includeLower && includeNumber && includeSymbol) {
       choices = lower.concat(numbers, symbol);
     }
     else if (includeUpper && includeNumber && includeSymbol) {
       choices = upper.concat(numbers,symbol);
     }
     // choosing 2 criteria
     else if (includeLower && includeUpper) {
       choices = lower.concat(upper);
     }
     else if (includeLower && includeNumber) {
       choices = lower.concat(numbers);
     }
     else if (includeLower && includeSymbol) {
       choices = lower.concat(symbol);
     }
     else if (includeUpper && includeNumber) {
       choices = upper.concat(numbers);
     }
     else if (includeUpper && includeSymbol) {
       choices = upper.concat(symbol);
     }
     else if (includeNumber && includeSymbol) {
       choices = numbers.concat(symbol);
     }
     // choosing one criteria
     else if (includeLower) {
       choices = (lower);
     }
     else if (includeUpper) {
       choices = (upper);
     }
     else if (includeNumber) {
       choices = (numbers);
     } else if (includeSymbol) {
       choices = (symbol);
    };

    var password = [];

        // loop for random values
    for (var i = 0; i < passLength; i++) {
      var passChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(passChoices);
    }

    var ps = password.join("");
        UserInput(ps);
        return ps;

 
}

function UserInput(ps) {
        document.getElementById("password").textContent = ps;
}

      // var password = generatePassword();
      

      // passwordText.value = password;


      // writePassword();
      


    