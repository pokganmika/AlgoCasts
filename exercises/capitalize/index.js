/* jshint esversion: 6 */
// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // my solution
  // let result = str.split('');
  // for (let i = 0; i < result.length; i++) { 
  //   if (result[0]) result[0] = result[0].toUpperCase();
  //   if (result[i] === ' ' && result[i + 1] !== undefined) result[i + 1] = result[i + 1].toUpperCase();
  // }
  // return result.join('');

  // ===== slice =====

  // const words = [];

  // for (let word of str.split(' ')) { 
  //   words.push(word[0].toUpperCase() + word.slice(1));
  // }

  // return words.join(' ');

  // ===== for loop =====

  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) { 
    if (str[i - 1] === ' ') result += str[i].toUpperCase();
    else result += str[i];
  }

  return result;
}

module.exports = capitalize;
