const solution = (array = [], commands = []) => {
  let answer = [];

  commands.map((command) => {
    let tempArr = array.filter(
      (value, index) => index >= command[0] - 1 && index <= command[1] - 1
    );
    tempArr.sort((a, b) => a - b);
    answer.push(tempArr[command[2] - 1]);
  });

  return answer;
};

const sol = solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
console.log("answer : ", sol);
