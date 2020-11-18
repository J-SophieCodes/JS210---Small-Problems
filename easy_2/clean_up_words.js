function cleanUp(str) {
  return str.replace(/\W+/g, ' ');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "