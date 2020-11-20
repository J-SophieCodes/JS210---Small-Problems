/*
Description:
Write a function that takes a string, and returns an object containing 
the following three properties:

Problem Definition:
  - input: string
  - output: list
  - rules/model:
    - % characters in the string that are lowercase letters
    - % characters that are uppercase letters
    - % characters that are neither
    - assume that the string will always contain at least one character
    - percentages saved as strings with 2 decimal places

Examples / Test Cases:
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

Data Structure:
  - input: string
  - rules:
    - use regex

Algorithm:
  - count chars that match /[a-z]/g
  - count chars that match /[A-Z]/g
  - count chars that match /[^a-z]/gi 
*/

function percentage(count, total) {
  return (count / total * 100).toFixed(2);
}

function matches(str, regexp) {
  return str.match(regexp) || [];
}

function letterPercentages(str) {
  let totalChars = str.length;
  let lowercase = matches(str, /[a-z]/g).length;
  let uppercase = matches(str, /[A-Z]/g).length;
  let neither = str.length - lowercase - uppercase;
  console.log(lowercase, uppercase, neither);

  return {
    lowercase: percentage(lowercase, totalChars),
    uppercase: percentage(uppercase, totalChars),
    neither: percentage(neither, totalChars)
  }
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }