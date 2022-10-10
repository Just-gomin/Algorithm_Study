/*
const solution = (arr1, arr2) => {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
};
*/
const solution = (arr1, arr2) =>
  arr1.map((row, index1) =>
    row.map((value, index2) => value + arr2[index1][index2])
  );

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
