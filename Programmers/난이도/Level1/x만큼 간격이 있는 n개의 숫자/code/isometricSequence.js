/*
const solution = (x, n) => {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
};
*/

const solution = (x, n) =>
  Array(n)
    .fill(x)
    .map((value, index) => (index + 1) * value);
