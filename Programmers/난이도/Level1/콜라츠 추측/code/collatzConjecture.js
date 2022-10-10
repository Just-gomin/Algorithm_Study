const solution = (n) => {
  let count = 0;
  while (n !== 1) {
    if (count > 500) return -1;
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    count++;
  }
  if (n === 1) return count;
};
