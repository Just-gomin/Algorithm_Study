const solution = (land) => {
  for (let row = 1; row < land.length; row++) {
    for (let col = 0; col < 4; col++) {
      land[row][col] += Math.max(
        ...land[row - 1].filter((value, index) => index !== col)
      );
    }
  }
  console.log(land);
  return Math.max(...land[land.length - 1]);
};

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
