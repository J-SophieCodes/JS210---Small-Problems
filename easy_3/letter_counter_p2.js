function wordSizes(str) {
  return (str.match(/\S+/g) || []).reduce((tally, word) => {
    let size = word.replace(/\W/g,'').length;
    tally[size] = tally[size] + 1 || 1;
    return tally;
  }, {});
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));