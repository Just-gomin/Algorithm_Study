const makeBinaryNum = (num, length) => {
  let binaryNum = [];
  while (num !== 0) {
    binaryNum.splice(0, 0, num % 2);
    num = (num - (num % 2)) / 2;
  }
  if (binaryNum.length !== length) {
    for (let i = binaryNum.length; i < length; i++) binaryNum.splice(0, 0, 0);
  }
  return binaryNum;
};

const solution = (n, arr1, arr2) => {
  let answer = new Array(n);
  arr1 = arr1.map((value, index) => makeBinaryNum(value, n));
  arr2 = arr2.map((value, index) => makeBinaryNum(value, n));
  arr1.map((value1, index1) => {
    answer[index1] = "";
    value1.map((value2, index2) => {
      answer[index1] += value2 === 0 && arr2[index1][index2] === 0 ? " " : "#";
    });
  });
  return answer;
};

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
