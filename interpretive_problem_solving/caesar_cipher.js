/*
Description:
- a substitution cipher in which each letter in a plaintext is 
  substituted by the letter located a given number of positions away 
  in the alphabet.

Problem Definition:
  - input:
    - the shift value (key)
    - the plaintext
  - output:
    - the encrypted plaintext (ciphertext)
  - rules/model:
    - only encrypts letters; other characters left as is
    - substituted letters are in the same letter case as the original letter
    - if shift exceeds z or Z, wraps around from beginning

Examples / Test Cases:


Data Structure:
  - input: string
  - rules: string
    -

Algorithm:
  - declare a cipher string and initialized to ''
  - for each character in string
    - test if character match /[^a-z]/i
      - if true: add char to cipher 
      - else: transform char and add to cipher

  - char transform function
    - takes char and key as arguments
    - if match /[a-z]/
      - newCharCode = (charCode - 97 + key) % 25 + 97
    - else
      - newCharCode = (charCode - 65 + key) % 25 + 65
    - return letter from newCharCode
*/

const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz';

function encryptChar(char, key) {
  let newChar = ALPHABETS[(alphaIndex(char) + key) % ALPHABETS.length];

  if (/[A-Z]/.test(char)) {
    newChar = newChar.toUpperCase();
  }

  return newChar;
}

function alphaIndex(char) {
  return ALPHABETS.indexOf(char.toLowerCase());
}

function caesarEncrypt(str, key) {
  let cipher = '';

  for (let idx = 0; idx < str.length; idx++) {
    let char = str[idx];
    if (/[^a-z]/i.test(char)) {
      cipher += char;
    } else {
      cipher += encryptChar(char, key);
    }
  }

  return cipher;
}

// simple shift
console.log(caesarEncrypt('A', 0) === "A");
console.log(caesarEncrypt('A', 3) === "D");
console.log(caesarEncrypt('a', 3) === "d");

// wrap around
console.log(caesarEncrypt('y', 5) === "d");
console.log(caesarEncrypt('a', 47) === "v");

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) === "ZABCDEFGHIJKLMNOPQRSTUVWXY");
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) === "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");