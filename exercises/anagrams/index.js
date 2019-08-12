/* jshint esversion: 6 */
// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// ===== my solution (Array) =====

// function anagrams(stringA, stringB) {
//   const a = stringA.toLowerCase().split('').sort();
//   const b = stringB.toLowerCase().split('').sort();
//   for (let i = 0; i < a.length; i++) { 
//     if (a[i] !== b[i]) return false;
//   }
//   return true;
// }

// ===== Object / RegExp (function) =====

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) return false;

//   for (let char in aCharMap) { 
//     if (aCharMap[char] !== bCharMap[char]) return false;
//   }
//   return true;
// }

// function buildCharMap(str) { 
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) { 
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

// ===== Object / RegExp (sort) =====

function anagrams(stringA, stringB) { 
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) { 
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
