/*
// # solution 1
const solution = (a, b) => {
  let answer = 0;
  let big = 0,
    small = 0;
  if (a == b) {
    return a;
  } else {
    big = a > b ? a : b;
    small = a > b ? b : a;
  }
  for (let num = small; num < big + 1; num++) {
    answer += num;
  }
  return answer;
};
*/

const solution = (a, b) => {
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
};

const ans = solution(3, 5);
console.log(ans);
