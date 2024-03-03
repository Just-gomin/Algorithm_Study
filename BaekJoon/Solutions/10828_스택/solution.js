const fs = require("fs");
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";
const [n, ...input] = fs.readFileSync(filePath).toString().split("\n");

var stack = [];
var answer = [];

function stackMethod(command, value = 0) {
  switch (command) {
    case "push":
      stack.push(value);
      break;
    case "pop":
      if (stack.length === 0) {
        answer.push(-1);
      } else {
        var poppedVale = stack.pop(value);
        answer.push(poppedVale);
      }
      break;
    case "size":
      answer.push(stack.length);
      break;
    case "empty":
      answer.push(stack.length === 0 ? 1 : 0);
      break;
    case "top":
      answer.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
      break;
  }
}

for (var key in input) {
  var curCommand = input[key];

  const [cmd, val] = curCommand.split(" ");

  stackMethod(cmd, val);
}

console.log(answer.join("\n"));
