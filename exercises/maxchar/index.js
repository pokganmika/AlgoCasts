/* jshint esversion: 6 */
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // my solution
  // let result = '';
  // let champion = 0;
  // let count = 1;
  // const temp = str.split('').sort();
  // for (let i = 0; i < temp.length; i++) { 
  //   if (temp[i] === temp[i + 1] && temp[i + 1] !== undefined) {
  //     count++;
  //   } else if (temp[i] !== temp[i + 1]) { 
  //     if (count > champion) { 
  //       result = temp[i];
  //       champion = count;
  //     }
  //     count = 1;
  //   }
  // }
  // return result;

  // ----- -----

  const chars = {};
  let max = 0;
  let maxChar = '';
  for (let char of str) { 
    // if (!chars[char]) chars[char] = 1;
    // else chars[char]++;

    // if (chars[char]) chars[char]++;
    // else chars[char] = 1;

    chars[char] = chars[char] + 1 || 1;
  }

  for (let char in chars) { 
    if (chars[char] > max) { 
      max = chars[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
