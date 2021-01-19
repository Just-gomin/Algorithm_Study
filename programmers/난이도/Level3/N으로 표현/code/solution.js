/*
    # 문제 해결 단서
    0. 입력형식 : N(1~9), number(N으로 표현할 숫자, 1~32000)
    1. 수식에는 N과 괄호 및 사칙연산만 가능하며 나머지는 무시합니다.
    2. number를 N과 사칙연산으로만 표현하는데, 필요한 N의 개수를 구합니다.
    3. 최소값이 8이 넘어가는 경우,-1을 return합니다.

    
    # 문제 해결 방안
    1. depth first search를 통해 N을 붙이거나 사칙연산을 진행합니다.
    2. dfs 진행 중 number를 만들었다면, N의 사용횟수를 반환합니다.
    3. dfs 진행 중, N의 사용횟수가 8이 넘어갔다면, -1을 반환합니다.

    # 알고리즘을 한번 그려보고 작성
*/

let n = 0,
  target = 0;

const dfs = (count, value) => {
  if (count > 8) return -1;
  if (value === target) return count;
};

const solution = (N, number) => {
  let result = 0;
  n = N;
  target = number;
  result = dfs(0, 0);
  return result;
};
