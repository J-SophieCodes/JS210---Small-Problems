/*
Description:
Write a function that takes a word string as an argument, and returns 
true if the word can be spelled using the set of blocks, or false 
otherwise. You can consider the letters to be case-insensitive when 
you apply the rules.

Problem Definition:
  - input: string
  - output: boolean
  - rules/model:
    - only those words that do not use both letters from any given block
    - only use each block once
    - case-insensitive

Examples / Test Cases:
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true

Data Structure:
  - input: string
  - rules: arrays
    -

Algorithm:
  - store blocks as nested arrays
  - for each char in string input
    - find index of block that contains the char
      - if index < 0, return false
      - else, splice block
  - return true if entire iteration done
*/

const BLOCKS = [
  ['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'], 
  ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], 
  ['V', 'I'], ['L', 'Y'], ['Z', 'M']
];

function isBlockWord(str) {
  str = str.toUpperCase();
  let blocks = BLOCKS.slice();

  for (let idx = 0; idx < str.length; idx++) {
    let index = blocks.findIndex(block => block.includes(str[idx]));
    if (index <  0) {
      return false;
    } else {
      blocks.splice(index, 1);
    }
  }

  return true;
}


console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false