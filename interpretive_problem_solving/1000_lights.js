/*
Description:
- 1000 switches, initially off
- first pass, toggle every light
- second pass, toggle every 2nd light
- third pass, toggle every 3rd light
- nth pass, toggle every nth light

Problem Definition:
  - input: integer (total number of switches)
  - output: array of lights on after 'n' repetitions
  - rules/model:
    - array index and light position will be offset by 1

Examples / Test Cases:
lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

Data Structure:
  - input: integer
  - rules: list processing (array)

Algorithm:
  - METHOD 1: return all squares less than or equal to n
  - METHOD 2: Loop through the rounds from 1 to n, and for each round:
    - If the current round is i, toggle the lights whose indices are
      multiples of i.
    - Use map to return a new array to represent the new states.
    - Filter/map the lights array to return a new array containing the
      indices of the lights that are on.
*/

// function lightsOn(switches) {
//   let on = [];

//   for (let root = 1; root <= Math.sqrt(switches); root++) {
//     on.push(root ** 2);
//   }

//   return on;
// }

function lightsOn(switches) {
  let on = new Array(switches).fill(false);

  for (let pass = 0; pass < switches; pass++) {
    for (let light = 0; light < switches; light++) {
      if ((light + 1) % (pass + 1) === 0) {
        on[light] = !on[light];
      }
    }
  }

  return on.map((lightOn, idx) => {
    return lightOn ? idx + 1 : lightOn;
  }).filter(lightOn => lightOn);
}

console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]