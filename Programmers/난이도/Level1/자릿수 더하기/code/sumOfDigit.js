const solution = (n) => {
  let answer = 0;
  let strNum = n + "";
  for (let index = 0; index < strNum.length; index++) {
    answer += strNum[index] - "0";
  }
  return answer;
};
