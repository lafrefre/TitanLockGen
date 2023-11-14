const generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', writePassword);

function writePassword() {
  var length = prompt("Your password needs to contain characters between (8-128)");
  if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  }
  var includeLowerCase = confirm("You have to use lowercase letters");
  var includeUpperCase = confirm("You have to use uppercase letters");
  var includeNumbers = confirm("You have to use numbers");
  var includeSpecialCharacters = confirm("You have to use special characters");
  if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters) {
    alert("You must select at least one character type");
    return;
  }
  var password = generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSpecialCharacters);
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSpecialCharacters) {
  var charpool = '';
  var password = '';
  if (includeLowerCase) charpool += lowerCaseLetters;
  if (includeUpperCase) charpool += upperCaseLetters;
  if (includeNumbers) charpool += numbers;
  if (includeSpecialCharacters) charpool += specialCharacters;
  for (var i = 0; i < length; i++) {
    password += charpool.charAt(Math.floor(Math.random() * charpool.length));
  }
  return password;
}

//trying to get files 