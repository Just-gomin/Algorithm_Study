const solution = (n) => {
  let result = 0;
  if (n === 0) return 0;
  if (n === 1) return 1;
  for (let num = 2; num <= n / 2; num++) {
    if (n % num === 0) result += num;
  }
  result += 1 + n;
  return result;
};
