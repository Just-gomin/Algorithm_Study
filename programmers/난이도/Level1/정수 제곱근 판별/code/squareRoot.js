const solution = (n) => {
  let answer = -1;
  let root = Math.sqrt(n);
  answer = root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
  return answer;
};
