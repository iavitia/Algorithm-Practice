// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // let reversed = str
  //   .split("")
  //   .reverse()
  //   .join("");

  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed == str;
}

module.exports = palindrome;
