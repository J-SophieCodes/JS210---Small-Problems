/*
Description:
  - polyalphabetic substitution

Problem Definition:
  - input: strings (plaintext and keyword)
  - output: string
  - rules/model:
    - 

Examples / Test Cases:


Data Structure:
  - input:
  - rules:
    -

Algorithm:
  - map the keyword into an array of shifts
  - for each char in string
    - pass the char and shift into caesarCipher
    - idx of shift = char idx % length of keyword
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

function vigenereEncrypt(plaintext, keyword) {
  let shifts = keyword.split('').map(alphaIndex);
  let shiftIndex = 0;
  let ciphertext = '';

  for (let idx = 0; idx < plaintext.length; idx++) {
    let char = plaintext[idx];

    if (/[^a-z]/i.test(char)) {
      ciphertext += char;
    } else {
      let shift = shifts[shiftIndex % shifts.length];
      ciphertext += encryptChar(char, shift);
      shiftIndex++;
    }
  }

  return ciphertext;
}

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat'));

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'A'));

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'Aa'));

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'cab'));

console.log(vigenereEncrypt('Dog', 'Rabbit'));
