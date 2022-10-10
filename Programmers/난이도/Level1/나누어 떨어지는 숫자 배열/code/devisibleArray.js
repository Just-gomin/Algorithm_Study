const solution = (arr = [], divisor = -1) => {
  let answer = arr.filter((value, index) => value % divisor === 0);
  console.log(Array.isArray(answer));
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
};

const ans1 = solution([3, 2, 6], 5);
console.log("ans1 : ", ans1);
const ans2 = solution([5, 9, 7, 10], 5);
console.log("ans2 : ", ans2);
