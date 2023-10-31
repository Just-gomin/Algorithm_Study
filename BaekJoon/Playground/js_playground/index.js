// ------------------------------
// Input with File System
// ------------------------------

// Read Inputs (from. https://help.acmicpc.net/language/info [node.js & TypeScript])
const fs = require("fs");
const { exit } = require("process");

// 입력값 파일 경로 결정
// node 실행 시 환경변수 [RUNNING_ON]을 "local"라는 값을 부여하여 '백준 온라인' 과 '로컬' 환경 구분
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";

// 입력 값
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// ------------------------------
// Input with Read Line
// ------------------------------

// // Read Inputs (from. https://velog.io/@leenzy/readline-%EB%AA%A8%EB%93%88-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });


function solution(input) {
  let answer = 0;

  const [N, M] = input[0].split(' ').map(Number);
  const A = new Array(N);

  let cloud = [[N - 1, 0], [N - 1, 1], [N - 2, 0], [N - 2, 1]]; // (N, 1), (N, 2), (N-1, 1), (N-1, 2)

  for (let i = 0; i < N; i++) {
    A[i] = input[i + 1].split(' ').map(Number);
  }

  /**
   * 구름을 이동 시키는 함수
   * @param {number} d 방향에 대한 인덱스
   * @param {number} s 거리
   */
  const moveCloud = (d, s) => {
    const directions = [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]]; // ←, ↖, ↑, ↗, →, ↘, ↓, ↙

    const makeValidIndex = (i) => {
      i = i % N;
      return i < 0 ? i + N : i;
    };

    for (let i = 0; i < cloud.length; i++) {
      let [r, c] = cloud[i];
      let [dr, dc] = directions[d - 1];
      const r1 = makeValidIndex(r + dr * s);
      const c1 = makeValidIndex(c + dc * s);
      cloud[i] = [r1, c1];
    }
  };

  /**
   * 구름이 있는 격자의 칸에 비를 내리는 함수. 격자가 연결된 것을 고려해, 인덱스를 N으로 나눈 나머지로 지정.
   */
  const rain = () => {
    for (const pos of cloud) {
      const [r, c] = pos;
      A[r][c] += 1;
    }
  };

  /**
   * 물 복사 버그 수행
   */
  const waterCopyBug = () => {
    const diagonals = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
    const isValidIndex = (r, c) => (0 <= r && r < N) && (0 <= c && c < N);

    cloud.map((v) => {
      const [r, c] = v;

      diagonals.map((diagonal) => {
        const [dr, dc] = diagonal;
        const [r1, c1] = [r + dr, c + dc];

        if (isValidIndex(r1, c1) && A[r1][c1] !== 0) A[r][c] += 1;
      });
    });
  };

  /**
   * A를 순회 하며 물의 양이 2 이상인 격자에 대해 구름 생성
   */
  const makeCloud = () => {
    let newCloud = [];

    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        const isNotCloudPos = cloud.findIndex((pos) => pos[0] === r && pos[1] === c) === -1;

        if (isNotCloudPos && A[r][c] >= 2) {
          A[r][c] -= 2;
          newCloud.push([r, c]);
        }
      }
    }

    cloud = [...newCloud];
  };

  const movementCommand = (d, s) => {
    moveCloud(d, s);
    rain();
    waterCopyBug();
    makeCloud();
  };

  for (let i = 0; i < M; i++) {
    const [di, si] = input[i + N + 1].split(' ').map(Number);
    movementCommand(di, si);
  }

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      answer += A[r][c];
    }
  }

  return answer;
}

console.log(solution(input));