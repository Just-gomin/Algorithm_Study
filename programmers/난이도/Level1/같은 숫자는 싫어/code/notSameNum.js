/*
// # solution 1
const solution = (arr) => {
  let answer = [];
  let beforeNum = -1;
  for (let num of arr) {
    if (beforeNum === -1) {
      beforeNum = num;
      answer.push(num);
    } else {
      if (beforeNum !== num) {
        beforeNum = num;
        answer.push(num);
      }
    }
  }
  console.log(answer);
  return answer;
};
*/

const solution = (arr) =>
  arr.filter((value, index) => value !== arr[index + 1]);

const ans = solution([1, 1, 3, 3, 0, 1, 1]);
console.log(ans);
