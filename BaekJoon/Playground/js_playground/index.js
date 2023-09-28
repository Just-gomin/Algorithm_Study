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
  let answer = [];

  const [N, M] = input[0].split(' ').map(Number);

  const maze = new Array(N + 1);
  answer = new Array(N + 1);

  maze[0] = new Array(M + 1).fill(0);
  for (let i = 1; i <= N; i++) {
    answer[i] = new Array(M + 1).fill(0);
    maze[i] = [0, ...input[i].split('').map(Number)];
  }

  const isValidPosition = (r, c) => (0 < r && r <= N) && (0 < c && c <= M);

  const up = [-1, 0], down = [1, 0], left = [0, -1], right = [0, 1];
  const dirArr = [up, down, left, right];

  let queue = [[1, 1]];
  answer[1][1] = 1;
  while (answer[N][M] === 0) {
    let [r, c] = queue.shift();

    for (const dir of dirArr) {
      let nr = r + dir[0], nc = c + dir[1];
      if (isValidPosition(nr, nc) && maze[nr][nc] !== 0) {
        if (answer[nr][nc] !== 0) continue;
        queue.push([nr, nc]);
        answer[nr][nc] = answer[r][c] + 1;
      }
    }
  }

  return answer[N][M];
}

console.log(solution(input));