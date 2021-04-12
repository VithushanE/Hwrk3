
var generateBtn = document.querySelector('generate');

// to set global vars 
var userOptions = {
  expectSpecialChars: false,
  expectNumericChars: false,
  expectUppercaseChars: false,
  expectLowercaseChars: false,
};

// write the password to #password
function begin(){
  console.log('to start');
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// to create a return string 
function generatePassword(userOptions){

// have array of special characters to include 
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCase =["!","@","#","$","%","^","&","*"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"]; 

var userOptionalChars = {}; 
var passwordLength = alert('Lets create a password!');


  //gathering user options to store in variables 
  function userOptions(){ 
    var question1 =prompt('Good! First off, the password need to be between 8 to 128 characters. How many characters would you like? ')
    console.log(question1);
    if (question1 <8 || question1 > 128 ){
      alert('This needs to be between 8 and 128 characters!');
      userOptions();

    }  else if(8<passwordLength < 128){

    // Lowercase question 
      var question2 = confirm('Would you like any lowercase characters?');
      if (question2){
      userOptions.expectLowercaseChars = true;
      } 

      // uppercase question 
      var question3 = confirm('Would you like any uppercase characters?');
      if (question3){
      userOptions.expectUppercaseChars = true;
      }
      
      // number question 
      var question4 = confirm('Would you like any numbers?' )
      if (question4){
        userOptions.expectNumericChars =true;
      }
      
      // Last question 
      var question5 = confirm('Would you like any special characters?')
      if (question5){
        userOptions.expectSpecialChars = true
      }

      // check if at least one is true 
      if(question2 == true || question3 == true || question4 == true || question5 == true){
        alert('Nice! You selected one or more promots to make your password!');
      }
      else {
      alert("Select one of the choices to generate your password!");
      userOptions();
    } 
  }

}

// to generate the password: 
function newPassword(userOptions){
  var password = [];
  var optionsChoices = [];
  var solved = '';
  // to add lower 
  if(userOptions.expectLowercaseChars == true){
    userOptionalChars.push(lowerCase);
  }
  // to add upper
  if(userOptions.expectUppercaseChars == true){
    userOptionalChars.push(upperCase);
  }
  // to add special 
  if(userOptions.specialCase == true){
    userOptionalChars.push(specialCase);
  }
  // if numeric 
  if(userOptions.expectNumericChars == true){
    userOptionalChars.push(numbers);
  }
  console.log(userOptionalChars);

  // grab pushed arrays from userOptional chars and combine them in optionsArray
  for (var h = 0; h < userOptionalChars.length; h++){
    optionsChoices = optionsChoices.concat(userOptionalChars[h]);
  }
  console.log("Options array is ", optionsChoices);

  // for creating loop password
  for (var i = 0; i < passwordLength; i++){
    password.push(optionsChoices[Math.floor(Math.random() * length) + 1 ]);
}for (var x = 0; x < password.length; x++){
  solved += password[x];
}
password = solved; 
return password;
}

userOptions();

return newPassword(userOptions)
}


generateBtn.addEventListener("click", begin);