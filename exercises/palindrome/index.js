/*jshint esversion: 6 */
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // my solution

  // const basicArr = str.split('');
  // const reversedArr = str.split('').reverse();

  // for (let i = 0; i < str.length; i++) { 
  //   if (basicArr[i] !== reversedArr[i]) return false;
  // }
  // return true;

  // ----- -----

  // solution #1 (method)
  // const reversed = str.split('').reverse().join('');
  // return reversed === str;

  // solution #2 (every) *****
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
