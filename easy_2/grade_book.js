function sum(total, currentValue) {
  return total + currentValue;
}

function getLetterGrade(score) {
  if (score >= 90) return 'A';
  else if (score >= 80) return 'B';
  else if (score >= 70) return 'C';
  else if (score >= 60) return 'D';
  else return 'F';
}

function getGrade(...grades) {
  let average = grades.reduce(sum) / grades.length;
  return getLetterGrade(average);
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"