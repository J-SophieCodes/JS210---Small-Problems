function ordinal(num) {
  if ([11, 12, 13].includes(num % 100)) return 'th';
  else if (num % 10 === 1) return 'st';
  else if (num % 10 === 2) return 'nd';
  else if (num % 10 === 3) return 'rd';
  else return 'th';
}

function century(year) {
  let num = Math.ceil(year / 100);
  return String(num) + ordinal(num);
}


console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"