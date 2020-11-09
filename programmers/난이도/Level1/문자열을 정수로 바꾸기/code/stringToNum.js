/*
// # parseInt를 통해 하는 방법
const solution = (s) => {
  return parseInt(s);
};
*/

const solution = (s) => {
  let answer = 0;
  let digit = 1;
  for (let index = s.length - 1; index > 0; index--) {
    answer = answer + (s[index] - "0") * digit;
    digit = digit * 10;
  }
  if (s[0] !== "+") {
    if (s[0] === "-") {
      answer *= -1;
    } else {
      answer += s[0] * digit;
    }
  }
  return answer;
};

console.log(solution("100"));
