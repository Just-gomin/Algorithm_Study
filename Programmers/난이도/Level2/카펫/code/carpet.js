const solution = (brown, yellow) => {
  let width = 1,
    height = 1;
  for (let w = 1; w <= yellow; w++) {
    if (w * (brown / 2 - 2 - w) === yellow && width < w) {
      height = yellow / w;
      width = w;
    }
  }
  return [width + 2, height + 2];
};

console.log(solution(50, 22));
