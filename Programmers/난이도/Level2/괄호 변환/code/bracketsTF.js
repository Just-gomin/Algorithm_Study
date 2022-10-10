const isRightOrder = (brackets) => {
  let checker = [];

  brackets.map((value, index) => {
    if (
      checker.length !== 0 &&
      value === ")" &&
      checker[checker.length - 1] === "("
    ) {
      checker.pop();
    } else checker.push(value);
  });

  return checker.length === 0;
};

const solution = (p) => {
  let answer = [];
  let w = p.split("");

  if (p === "") return "";
  else if (isRightOrder(w)) return p;

  let u = [],
    v = [];
  let left = 0,
    right = 0;
  let index = 0;

  do {
    w[index] === "(" ? left++ : right++;
    u.push(w[index]);
    index++;
  } while (left !== right);

  while (index < w.length) {
    v.push(w[index++]);
  }

  if (isRightOrder(u)) {
    u.map((value) => answer.push(value));
    solution(v.join(""))
      .split("")
      .map((value) => answer.push(value));
  } else {
    answer.push("(");
    solution(v.join(""))
      .split("")
      .map((value, index) => {
        answer.push(value);
      });
    answer.push(")");
    for (let i = 1; i < u.length - 1; i++) {
      if (u[i] === "(") answer.push(")");
      else answer.push("(");
    }
  }

  return answer.join("");
};

console.log(solution("()))((()"));
