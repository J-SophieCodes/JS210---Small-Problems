// const COMMANDS = {
//   PUSH(stack, register) { stack.push(register) },
//   POP(stack) { return stack.pop() },
//   PRINT(_, register) { console.log(register) },
//   ADD(stack, register) { return register + COMMANDS.POP(stack) },
//   SUB(stack, register) { return register - COMMANDS.POP(stack) },
//   MULT(stack, register) { return register * COMMANDS.POP(stack) },
//   DIV(stack, register) { return register / COMMANDS.POP(stack) },
//   MOD(stack, register) { return register % COMMANDS.POP(stack) },
// };

// const DIGITS = /\d/;

// function minilang(str) {
//   let stack = [];
//   let register = 0;
//   let tokens = str.split(' ');

//   while (tokens.length > 0) {
//     let token = tokens.shift();

//     if (DIGITS.test(token)) {
//       register = Number(token);
//     } else if (['PUSH', 'PRINT'].includes(token)) {
//       COMMANDS[token](stack, register);
//     } else {
//       register = parseInt(COMMANDS[token](stack, register), 10);
//     }
//   }
//   console.log('');
// }


minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

function minilang(program) {
  let stack = [];
  let register = 0;

  const COMMANDS = {
    ADD() { register += stack.pop() },
    SUB() { register -= stack.pop() },
    MULT() { register *= stack.pop() },
    DIV() { register = parseInt(register / stack.pop(), 10) },
    MOD() { register = parseInt(register % stack.pop(), 10) },
    PUSH() { stack.push(register) },
    POP() { register = stack.pop() },
    PRINT() { console.log(register) }
  };

  program.split(' ').forEach(op => {
    (/\d/.test(op)) ? register = Number(op) : COMMANDS[op]();
  });

  console.log('');
}
