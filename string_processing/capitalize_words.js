// function capitalize(word) {
//   return word[0].toUpperCase() + word.slice(1).toLowerCase();
// }

// function wordCap(str) {
//   return str.replace(/\S+/g, capitalize);
// }

function wordCap(str) {
  return str.replace(/(^|\s)./g, char => char.toUpperCase());
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'