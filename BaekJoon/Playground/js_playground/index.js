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

  const [N, L, R] = input[0].split(' ').map(Number);
  const A = new Array(N);
  for (let i = 0; i < N; i++) {
    A[i] = input[i + 1].split(' ').map(Number);
  }

  const movePopulation = () => {
    const visited = new Array(N);
    for (let i = 0; i < N; i++) {
      visited[i] = new Array(N).fill(false);
    }

    let totalMovementAmount = 0;
    let sharedCountries = [];

    const validIndex = (r, c) => {
      return (0 <= r && r < N) && (0 <= c && c < N);
    }

    const bfs = (r, c) => {
      const queue = [[r, c]];
      const direction = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상하좌우

      while (queue.length != 0) {
        const [r1, c1] = queue.shift();

        for (const diff of direction) {
          const [r2, c2] = [r1 + diff[0], c1 + diff[1]];

          if (validIndex(r2, c2) && !visited[r2][c2]) {
            const populationDiff = Math.abs(A[r1][c1] - A[r2][c2]);

            if (L <= populationDiff && populationDiff <= R) {
              queue.push([r2, c2]);
              sharedCountries.push([r2, c2]);
              visited[r2][c2] = true;
            }
          }
        }
      }
    }

    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        if (visited[r][c]) continue;

        visited[r][c] = true;
        sharedCountries.push([r, c]);
        bfs(r, c);

        if (sharedCountries.length !== 1) {
          let sum = 0;
          let counter = 0;

          sharedCountries.map((v) => {
            sum += A[v[0]][v[1]];
            counter += 1;
          });

          totalMovementAmount += sum;

          let newPopulation = Math.floor(sum / counter);

          sharedCountries.map((v) => {
            A[v[0]][v[1]] = newPopulation;
          });
        }
        sharedCountries = [];
      }
    }

    return totalMovementAmount !== 0;
  }

  while (true) {
    const isMoved = movePopulation();

    if (isMoved) {
      answer += 1;
      continue;
    }

    break;
  }

  return answer;
}

console.log(solution(input));