/*
    # 문제 해결 단서
    0. 입력 형식 : key(2차원 배열, M*M 크기), lock(2차원 배열, N*N 크기). 
        - 3 <= M <= N <= 20.
        - 0 : 홈, 1 : 돌기 
    1. 열쇠는 회전, 이동이 가능합니다.
    2. 자물쇠 영역을 벗어난 부분에 있는 열쇠의 홈과 돌기는 자물쇠를 여는데 영향을 주지 않습니다.
    3. 자물쇠 영역에선 열쇠와 자물쇠의 홈과 돌기가 정확히 일치해야 합니다.
    4. 회전을 시킨 배열 3개를 더 만들어 모든 영역에서 일치하는지 검사합니다.
    
    # 문제 해결 방안
    1. lock의 홈의 개수를 파악합니다.
    2. 회전을 진행한 배열들을 생성합니다.
    3. lock(0,0)과 key(M-1,M-1) 한칸이 겹치는 경우를 시작으로,
        - 오른쪽으로 한칸 이동 시킨 경우
        - 아래쪽으로 한칸 이동 시킨 경우
        - 오른쪽으로 한칸, 아래쪽으로 한칸 이동한 경우(대각선 이동)
        에 대하여 검사를 진행합니다.
    4. 검사를 진행 중 다음과 같은 상황들을 고려합니다.
        - lock의 돌기와 key의 돌기가 겹치는 부분 발생시 중단하고 넘어 갑니다.
        - 겹치는 부분이 없이 확인이 완료되었을 때, lock의 홈의 개수와 key의 돌기와 lock의 홈이 들어 맞은 수의 일치여부를 확인합니다.
    5. 검사의 결과 중 true가 발생하면 true를 반환합니다.
    6. 마지막 까지 true가 발생하지 않으면 false를 반환합니다.
*/

const rightTurn = (key = []) => {
  let m = length(key);
  let result = [];
  for (let j = 0; j < m; j += 1) {
    let line = [];
    for (let i = m - 1; i >= 0; i -= 1) {
      line.push(key[i][j]);
    }
    result.push(line);
  }
  return result;
};

const solution = (key = [], lock = []) => {
  let answer = false;

  let m = length(key),
    n = length(lock);

  let key2 = rightTurn(key);
  let key3 = rightTurn(key2);
  let key4 = rightTurn(key3);

  let gap = 0;
  lock.forEach((line) => {
    line.forEach((value) => {
      if (value == 0) gap += 1;
    });
  });

  const isFit = (right = 0, down = 0) => {};

  let checker = [];
  for (let i = 0; i < m - 1 + n - 1; i++) {
    let line = [];
    for (letj = 0; j < m - 1 + n - 1; j++) {
      line.push(-1);
    }
    checker.push(line);
  }

  for (let i = 0; i < m - 1 + n - 1; i++) {
    let result = [];
    for (let j = 0; j < m - 1 + n - 1; j++) {
      result.push();
    }
    checker.push(result);
  }
  return answer;
};
