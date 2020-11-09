const solution = (arr) => {
  let sum = 0;
  arr.map((value) => (sum += value));
  return sum / arr.length;
};
