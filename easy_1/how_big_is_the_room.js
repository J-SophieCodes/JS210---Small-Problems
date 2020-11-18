let rlSync = require('readline-Sync');
let unit = rlSync.question('Are the measurements in meters or feet? ',
                            {limit: ['feet', 'meters'], caseSensitive: false});
let roomLength = parseFloat(rlSync.question(`Enter the length of the room in ${unit}: `));
let roomWidth = parseFloat(rlSync.question(`Enter the width of the room in ${unit}: `));

const SQM_TO_SQFT = 10.7639;
let areaInSqm;
let areaInSqft;

if ((/meters/i).test(unit)) {
  areaInSqm = (roomLength * roomWidth).toFixed(2);
  areaInSqft = (areaInSqm * SQM_TO_SQFT).toFixed(2);
} else {
  areaInSqft = (roomLength * roomWidth).toFixed(2);
  areaInSqm = (areaInSqft / SQM_TO_SQFT).toFixed(2);
}

console.log(`The area of the room is ${areaInSqm} square meters (${areaInSqft} square feet).`);