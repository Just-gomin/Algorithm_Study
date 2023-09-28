/*
  - 문제 Link : https://www.acmicpc.net/problem/2178

  # Solution
  - 미로에서 1은 이동할 수 있는 칸을 나타내고, 0은 이동할 수 없는 칸
  - 미로가 주어졌을 때, (1, 1)에서 출발하여 (N, M)의 위치로 이동할 때 지나야 하는 최소의 칸 수를 구하는 프로그램을 작성
  - N, M(2 ≤ N, M ≤ 100)

  - 주어진 미로의 정보를 이차원 배열로 저장
  - 해당 좌표의 블록까지 도달한 블록수 저장을 위한 이차원 배열 생성
  - 시작점인 (1, 1)부터 bfs를 진행
    - 상하좌우 좌표들에 대해 유효한 인덱스를 가졌는지, 방문하지 않았으며 벽이 아닌지 확인
    - 이전 블록에 도달하기 까지 거친 블록수에 1을 더해 현재의 블록까지 걸린 거리를 계산
*/

const fs = require("fs");
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

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
