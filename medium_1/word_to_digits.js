const NUM_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

// function toNumber(word) {
//   let num = NUM_WORDS.indexOf(word);
//   return num >= 0 ? num : word;
// }

// function wordToDigit(text) {
//   return text.split(/\b/)
//              .map(toNumber)
//              .join('');
// }

function wordToDigit(text) {
  let re = new RegExp('\\b(' + NUM_WORDS.join('|') + ')\\b', 'g');
  return text.replace(re, word => NUM_WORDS.indexOf(word));
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."