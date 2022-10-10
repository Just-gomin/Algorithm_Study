const solution = (a, b) => {
  let answer = 0;
  a.map((value, index) => (answer += value * b[index]));
  return answer;
};
