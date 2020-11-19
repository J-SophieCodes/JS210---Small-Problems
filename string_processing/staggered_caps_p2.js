function stagger(_, p1, p2, p3) {
  return p1.toUpperCase() + p2 + p3.toLowerCase();
}

function staggeredCase(str) {
  return str.replace(/([a-z])([^a-z]*)([a-z])/gi, stagger);
}


console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"