/*jshint esversion: 6 */
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // my solution

  // ===== for loop =====
  // let result = '';
  // for (let i = 0; i < str.length; i++) { 
  //   result = str[i] + result;
  // }
  // return result;

  // ===== reduce =====
  // return str.split('').reverse().reduce((prev, curr) => prev + curr);
  // return str.split('').reduce((prev, curr) => curr + prev);

  // ----- -----

  // solution #1 (method)
  // return str.split('').reverse().join('');

  // solution #2 (for of loop)
  // let reversed = '';
  // for (let character of str) { 
  //   reversed = character + reversed;
  // }
  // return reversed;

  // solution #3
  // return str.split('').reduce((reversed, character) => {
  //   return character + reversed;
  // }, '');

  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
