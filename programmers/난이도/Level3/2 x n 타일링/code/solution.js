/*
    # 문제 해결 단서
    0. 입력 형식 : n(가로 길이, 1<= n <= 60000)
    1. 가로 길이가 2, 세로 길이가 1인 2x1 직사각형 타일이 존재합니다.
    2. 직사각형 타일로 세로길이가 2, 가로 길이가 n인 바닥을 가득 채우는 방법을 구합니다.
    3. 즉, 1과 2의 덧셈 순서로 n을 만들 수 있는 방법을 제시합니다.
    4. 경우의 수가 너무 많아 질 수 있으므로, 1,000,000,007으로 나눈 나머지를 반환합니다.

    # 문제 해결 방안
    1. 모두 1로만 n을 만드는 경우를 시작으로, 1을 2개씩 없애고 2를 한개 씩 추가하는 경우를 점진적으로 해나갑니다.
    2. 1과 2의 배치의 경우의 수를 구합니다.
    
    # 
    1과 2의 배치의 경우의 수를 고민하는 중, 이항정리를 떠올렸고,
    이항 계수들을 쭉 써보던 중 1과 2의 배치의 경우의  수가 피보나치 수열을 따르고 있음을 발견하고, 해결했습니다.
    하지만, 문제의 의도 상 이항정리와 Dynamic Programing을 요구하는 듯하여, 다시 풀어보는게 좋을거 같습니다.
    
*/

// 이항 정리를 이용한 해결 시도
// const solution = (n) => {
//   let result = 0;
//   let num1 = n;
//   let num2 = 0;
//   let comb = [];

//   for (let i = 0; i <= n; i++) {
//     comb.push([]);
//     for (let j = 0; j <= i; j++) {
//       if (j == 0 || j == i) comb[i].push(1);
//       else comb[i].push((comb[i - 1][j - 1] + comb[i - 1][j]) % 1000000007);
//     }
//   }

//   while (num1 >= num2) {
//     result += comb[num1][num2] % 1000000007;
//     num1 -= 1;
//     num2 += 1;
//   }

//   return result;
// };

// 피보나치 수열을 이용한 해결
const solution = (n) => {
  let num1 = 0;
  let num2 = 1;
  let count = 1;
  while (count <= n) {
    let temp = num2;
    num2 = (num1 + num2) % 1000000007;
    num1 = temp;
    count += 1;
  }
  return num2;
};

let example1 = 4; // result : 5
console.log(solution(example1));

let example2 = 6; // result : 13
console.log(solution(example2));
