/*
    # 문제 해결
    1. 문자열 길이에서 하나 적게 greedy search를 진행한다.
    2. 현재 가진 와 다음 수를 비교해 작은 것을 탈락시킨다.
    3. 탈락시킨 숫자를 count하고 count가 K와 같아 질때, search를 중단한다.
*/
const solution = (number, k) => {
  let answer = [];
  let index = 0;
  let delCount = k;
  answer.push(number[index++]);
  while (answer.length < number.length - k || index < number.length) {
    if (delCount !== 0 && answer[answer.length - 1] < number[index]) {
      answer.pop();
      delCount--;
      console.log(answer);
      continue;
    }
    answer.push(number[index++]);
    console.log(answer);
  }
  return answer.slice(0, number.length - k).join("");
};

console.log(solution("4177252841", 4));
