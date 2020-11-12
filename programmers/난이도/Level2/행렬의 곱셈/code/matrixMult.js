/*
    # 문제 해결 단서
    1. 행렬 A(a*b),B(b*c)의 곱의 결과 행렬 C(a*c)
    2. a = A.length, b = A[0].length or B.length, c = B[0].length;

    # 문제 해결 방안
    1. 주어진 행렬들을 통해 결과 행렬의 크기를 예상하고 빈행렬을 만듭니다.
    2. 총 3개의 for문을 사용합니다.
        - i(<a) loop -> k(<c) loop -> j(<b) loop
        j 의 이동이 행렬연산의 요점이므로 j가 가장 마지막에서 반복됩니다.
    3. j loop의 연산이 끝나면 k loop를 빠져나오기 전, 결과행렬[i]에 j loop의 결과를 push해줍니다.
*/

const solution = (arr1 = [], arr2 = []) => {
  let a = arr1.length,
    b = arr2.length,
    c = arr2[0].length;
  let result = [];

  for (let i = 0; i < a; i++) {
    result.push([]);
  }

  for (let i = 0; i < a; i++) {
    for (let k = 0; k < c; k++) {
      let sum = 0;
      for (let j = 0; j < b; j++) {
        sum += arr1[i][j] * arr2[j][k];
      }
      result[i].push(sum);
    }
  }
  console.log(result);
  return result;
};

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);
