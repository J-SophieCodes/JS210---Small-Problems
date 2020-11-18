function triangle(max) {
  for (let row = 1; row <= max; row++) {
    console.log('*'.repeat(row).padStart(max, ' '));
  }
}

triangle(5);
triangle(9);