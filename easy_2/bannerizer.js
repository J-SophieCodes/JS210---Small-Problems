function logInBox(text, width) {
  width = (width - 4) || (text.length);
  let border = '+' + '-'.repeat(width + 2) + '+';
  let padding = '|' + ' '.repeat(width + 2) + '|';

  let re = new RegExp(`.{0,${width}}\\b`, 'g');
  let textRows = (text.match(re) || [''])
                      .map(line => `| ${line.trimStart().padEnd(width, ' ')} |`)
                      .join('\n');

  console.log(`${border}\n${padding}\n${textRows}\n${padding}\n${border}`);
}

logInBox('To boldly go where no one has gone before.', 20);
logInBox('', 5);