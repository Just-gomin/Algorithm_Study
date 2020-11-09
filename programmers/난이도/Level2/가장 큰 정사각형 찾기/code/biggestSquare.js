/*
    // # 문제 해결방법
    - 밑변의 최대 길이와 높이의 최댓값 구하기.
*/
const solution = (board) => {
  let width = board[0].length,
    height = board.length;
  let side = 0;
  for (let i = 1; i < height; i++) {
    for (let j = 1; j < width; j++) {
      if (board[i][j] === 1) {
        board[i][j] =
          Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
      }
    }
  }
  console.log(board);
  board.map((line, index) => {
    let max = Math.max(...line);
    if (side < max) side = max;
  });
  return side * side;
};
