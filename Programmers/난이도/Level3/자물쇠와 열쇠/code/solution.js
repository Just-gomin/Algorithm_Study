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
    1. key를 rotate 시킬 수 있는 함수를 생성합니다.
    2. Key와 Lock을 대조 시킬 수 있는 Map을 생성합니다. ({n+2*(m-1)}^2 크기)
    3. Map에 Key를 표시합니다.
    4. Map의 lock부분이 모두 1로 채워진다면 true, 2혹은 0이 존재한다면 false를 반환합니다.

    # 문제 풀이 참고
    - https://regularmember.tistory.com/186
    - 2021.02.05_다른 사람 풀이 확인
*/

const rotate = (key = []) => {
  const keyLen = key.length;
  let rKey = [];
  for (let j = 0; j < keyLen; j += 1) {
    let line = [];
    for (let i = keyLen - 1; i >= 0; i -= 1) {
      line.push(key[i][j]);
    }
    rKey.push(line);
  }
  return rKey;
};

const solution = (key = [], lock = []) => {
  const keyLen = key.length;
  const lockLen = lock.length;
  const mapLen = lockLen + 2 * (keyLen - 1);
  const offset = keyLen - 1;
  const limit = keyLen + lockLen - 1;

  // Map 생성
  let map = Array(mapLen)
    .fill(0)
    .map((value) => Array(mapLen).fill(0));

  for (let i = 0; i < lockLen; i++) {
    for (let j = 0; j < lockLen; j++) {
      map[offset + i][offset + j] = lock[i][j];
    }
  }

  // Marker
  const markMap = (row, col, marker) => {
    for (let i = 0; i < keyLen; i++) {
      for (let j = 0; j < keyLen; j++) {
        map[row + i][col + j] += key[i][j] * marker;
      }
    }
  };

  // 자물쇠가 열렸는지 확인
  const isUnlocked = () => {
    for (let i = 0; i < lockLen; i++) {
      for (let j = 0; j < lockLen; j++) {
        if (map[offset + i][offset + j] % 2 == 0) return false;
      }
    }
    return true;
  };

  // 전체적인 과정 진행.
  for (let x = 0; x < 4; x++) {
    for (let r = 0; r < limit; r++) {
      for (let c = 0; c < limit; c++) {
        markMap(r, c, 1);
        if (isUnlocked()) return true;
        markMap(r, c, -1);
      }
    }
    key = rotate(key);
  }

  return false;
};
