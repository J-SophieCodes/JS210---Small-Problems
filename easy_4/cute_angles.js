function format(num) {
  return String(Math.trunc(num)).padStart(2, '0');
}

function process(number) {
  number %= 360;
  return number < 0 ? number + 360 : number;
}

function dms(number) {
  let deg = process(number);
  let min = (deg % 1) * 60;
  let sec = (min % 1) * 60;
  return `${Math.trunc(deg)}\u00b0${format(min)}'${format(sec)}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360), '\n');          // 360°00'00" or 0°00'00"
console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"