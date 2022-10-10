const solution = (n) => {
  let result = "";
  const nums3 = ["4", "1", "2"];
  let remainder = -1;

  while (n !== 0) {
    remainder = n % 3;
    n = (n - remainder) / 3;
    if (remainder === 0) n -= 1;
    result = nums3[remainder] + result;
  }
  return result;
};

console.log(solution(300));
