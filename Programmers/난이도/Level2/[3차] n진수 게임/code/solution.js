/*
    # 문제 해결 단서
    0. 입력 형식 : n(진법), t(미리 구할 숫자의 개수), m(게임에 참가하는 인원), p(순서) 
    1. 해당 게임은 여러 사람이 둥글게 앉아 숫자를 하나씩 차례대로 말하는 게임입니다.
        - 0 부터 시작
    2. 두 자리 이상의 숫자를 말할 때는 숫자를 한자리 씩 끊어서 말합니다.
    3. 10진법의 수만이 아닌 최대 16진법의 수까지 말합니다.
        - 10이상의 수는 영어 대문자 A, B, C,...로 표현합니다.
    4. 입력 값들로 하여금, 10진법의 수를 n 진법의 수로 변환 하고, p번째 사람이 말할 숫자를 t개가 될 때 까지 계산합니다.

    # 문제 해결 방안
    1. 숫자를 0부터 하나씩 증가 시키며 n진법의 수로 변환합니다.
    2. 변환 시킨 수 중에 사용자가 말 하게될 수를 result에 담습니다.
*/
const convertFromDecimal = (number, base) => {
  let result = "";
  while (number > 0) {
    let temp = number % base;
    number = (number - temp) / base;
    if (temp >= 10) temp = String.fromCharCode("A".charCodeAt() + temp - 10);
    result = "" + temp + result;
  }
  return result === "" ? "0" : result;
};

const solution = (n, t, m, p) => {
  let result = [];
  let mCounter = 1;
  let tCounter = 0;
  let number = 0;
  while (tCounter < t) {
    let num = convertFromDecimal(number++, n).split("");
    num.forEach((value) => {
      if (mCounter > m) mCounter = 1;
      if (mCounter === p && tCounter < t) {
        result.push(value);
        tCounter += 1;
      }
      mCounter += 1;
    });
  }
  return result.join("");
};

console.log(solution(2, 4, 2, 1)); //result : "0111"
console.log(solution(16, 16, 2, 1)); // result : "02468ACE11111111"
console.log(solution(16, 16, 2, 2)); // result : "13579BDF01234567"
