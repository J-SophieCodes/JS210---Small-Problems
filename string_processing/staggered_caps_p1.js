// function staggeredCase(str) {
//   let cap = true;
//   return str.split('')
//             .map(char => {
//               if (cap) {
//                 cap = !cap;
//                 return char.toUpperCase();
//               } else {
//                 cap = !cap;
//                 return char.toLowerCase();
//               }
//             }).join('');
// }

function stagger(_, p1, p2) {
  return p1.toUpperCase() + p2.toLowerCase();
}

function staggeredCase(str) {
  return str.replace(/(.)(.)/g, stagger);
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"