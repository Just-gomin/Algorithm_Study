const solution = (d, budget) => {
  let count = 0;
  let total = 0;
  d.sort((a, b) => a - b);
  for (count = 0; count < d.length; count++) {
    total += d[count];
    if (total > budget) break;
  }
  return count;
};
