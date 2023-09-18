/*
  - 문제 Link : https://www.acmicpc.net/problem/21611

  # Solution
  - N은 항상 홀수, 3 ≤ N ≤ 49
  - (r, c)는 격자의 r행 c열
  - 격자의 가장 왼쪽 윗 칸은 (1, 1)이고, 가장 오른쪽 아랫 칸은 (N, N)이며 마법사 상어는 ((N+1)/2, (N+1)/2)에 있다.
  - 1 ≤ M ≤ 100
  - 방향 di, 1 ≤ di ≤ 4 (1: 상, 2: 하, 3: 좌, 4: 우)
  - 거리 si, 1 ≤ si ≤ (N-1)/2
  - 칸에 들어있는 구슬이 K개라면, 구슬이 들어있는 칸의 번호는 1번부터 K번까지이다.
  - 입력으로 주어진 격자에는 4개 이상 연속하는 구슬이 없다.
*/

const fs = require("fs");
const { exit } = require("process");
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

class TileInfo {
  constructor(r, c, bead) {
    this.r = r;
    this.c = c;
    this.bead = bead;
  }
}

function solution(input) {
  let bead1ExplosionCount = 0;
  let bead2ExplosionCount = 0;
  let bead3ExplosionCount = 0;

  const [N, M] = input[0].split(' ').map(Number);

  const sharkPosition = [(N + 1) / 2 - 1, (N + 1) / 2 - 1]; // 상어의 위치
  const field = new Array(N); // 구슬의 배치를 저장하는 2차원 배열
  const beads = []; // 문제의 주어진 과정을 진행을 위해 구슬 정보를 담는 1차원 배열
  const direction = { 'left': [-1, 0], 'right': [1, 0], 'up': [0, -1], 'down': [0, 1] };

  const isValidPosition = (r, c) => (0 <= r && r < N) && (0 <= c && c < N);

  // 구슬 배치 저장
  for (let i = 0; i < N; i++) {
    field[i] = input[i + 1].split(' ').map(Number);
  }

  let currentPosition = sharkPosition;
  // 상어 위치를 기준으로, 좌하우상 방향으로 순회 하며 구슬을 1차원 배열로 변환
  while (isValidPosition(...currentPosition)) {

  }


  return bead1ExplosionCount + 2 * bead2ExplosionCount + 3 * bead3ExplosionCount;
}

console.log(solution(input));
