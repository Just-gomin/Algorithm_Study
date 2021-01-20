/*
    # 문제 해결 단서
    0. 입력형식 : N(1~9), number(N으로 표현할 숫자, 1~32000)
    1. 수식에는 N과 괄호 및 사칙연산만 가능하며 나머지는 무시합니다.
    2. number를 N과 사칙연산으로만 표현하는데, 필요한 N의 개수를 구합니다.
    3. 최소값이 8이 넘어가는 경우,-1을 return합니다.

    
    # 문제 해결 방안
    1. N의 사용횟수에 따른 계산 결과를 담을 수 있는 배열 cal을 생성합니다. cal = [[],[],...,[]] (size : 8)
    2. dynamic programing을 진행합니다. 계산 값들을 cal에 넣고, 낮은 인덱스에서 높은 인덱스로 가며 만들고자하는 수가 발견된다면, 해당 인덱스를 반환하는 방법입니다.
    3. 전체를 탐색해도 발견하지 못하는 경우엔, -1을 반환합니다.
*/

let n = 0;
let cal = [];

const dp = (count, value) => {
  if (count > 8) return;
  else if (count >= 1 && count <= 8) cal[count - 1].push(value);
  for (let i = 1; i <= 8 - count; i++) {
    let num = 0;
    for (let j = 0; j < i; j++) num += Math.pow(10, j) * n;
    dp(count + i, value + num);
    dp(count + i, value - num);
    dp(count + i, value * num);
    dp(count + i, parseInt(value / num));
  }
};

const solution = (N, number) => {
  let result = -1;
  n = N;
  for (let i = 0; i < 8; i++) cal.push([]);
  dp(0, 0);
  for (let c = 0; c < 8; c++) {
    cal[c].forEach((value) => {
      if (value === number) result = c + 1;
    });
    if (result !== -1) return result;
  }
  return result;
};

let example1 = solution(5, 12); // result : 4
let example2 = solution(2, 11); // result : 3
console.log(example1, example2);
