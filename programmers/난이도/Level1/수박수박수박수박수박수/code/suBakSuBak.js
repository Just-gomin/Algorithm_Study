/*
// string의 repeat 메서드를 활용한 해답
const solution = (n) => {
  return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
};
*/

// # for문을 이용한 해답
const solution = (n) => {
  let answer = "";
  let word = "";
  for (let itr = 1; itr <= n; itr++) {
    itr % 2 === 1 ? (word = "수") : (word = "박");
    answer = answer + word;
  }
  return answer;
};

const ans = solution(30);
console.log(ans);
