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

  - N, M, 구슬배치(fields) 정보들을 변수에 저장한다.
  - 
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

class Coordinate {
  constructor(r, c) {
    this.r = r;
    this.c = c;
  }

  /**
   * 위치 변경 함수
   * @param {number} r 행의 좌표
   * @param {number} c 열의 좌표
   */
  change(r, c) {
    this.r = r;
    this.c = c;
  }

  /**
   *
   * @param {Coordinate} other 다른 좌표
   * @returns 해당 객체의 행,열 좌표와 다른 좌표 객체의 행,열 좌표가 서로 동일한지 확인한 결과
   */
  same(other) {
    return this.r === other.r && this.c === other.c;
  }
}
class Tile extends Coordinate {
  constructor(r, c, bead = 0) {
    super.r = r;
    super.c = c;
    this.bead = bead;
  }
}

function solution(input) {
  const beadExploCnt = [0, 0, 0, 0];

  const [N, M] = input[0].split(" ").map(Number);

  const sharkCoord = new Coordinate((N + 1) / 2 - 1, (N + 1) / 2 - 1); // 상어의 위치
  const field = new Array(N); // 구슬의 배치를 저장하는 2차원 배열
  const tileArr = []; // 문제의 주어진 과정을 진행을 위해 구슬 배치 정보를 담는 1차원 배열

  const up = new Coordinate(0, -1); // 상
  const down = new Coordinate(0, 1); // 하
  const left = new Coordinate(-1, 0); // 좌
  const right = new Coordinate(1, 0); // 우

  const isValidCoord = (coord) => 0 <= coord.r && coord.r < N && 0 <= coord.c && coord.c < N;

  // 구슬 배치 저장
  for (let i = 0; i < N; i++) {
    field[i] = input[i + 1].split(" ").map(Number);
  }

  // 상어 위치를 기준으로, 좌하우상 방향으로 순회 하며 구슬을 1차원 배열로 변환
  let curCoord = sharkCoord;
  const serializeDirArr = [left, down, right, up]; // 구슬 직렬화 방향
  let distance = 0;
  let keepDistance = false;
  let serializeDir = -1;

  while (isValidCoord(curCoord)) {
    if (!keepDistance) distance += 1;
    keepDistance = !keepDistance;
    serializeDir = (serializeDir + 1) % 4;

    for (let i = 0; i < distance; i++) {
      curCoord.change(
        curCoord.r + serializeDirArr[serializeDir].r,
        curCoord.c + serializeDirArr[serializeDir].c
      );

      tileArr.push(
        new Tile(curCoord.r, curCoord.c, field[curCoord.r][curCoord.c])
      );
    }
  }

  // 구슬 폭발, 이동, 재폭발, 변화
  const exploDirArr = [up, down, left, right]; // 구슬 폭발 방향

  for (let i = 0; i < M; i++) {
    const [si, di] = input[N + i].split(" ").map(Number);

    // 구슬 폭발
    let exploDir = exploDirArr[di];
    let exploCoordArr = [];

    for (let s = 1; s <= si; s++) {
      exploCoordArr.push(
        new Coordinate(
          sharkCoord.r + s * exploDir.r,
          sharkCoord.c + s * exploDir.c
        )
      );
    }

    for (const tile of tileArr) {
      if (exploCoordArr.findIndex((v) => v.same()) !== -1) {
        beadExploCnt[tile.bead] += 1;
        tile.bead = 0;
      }
    }

    // 재폭발
    let startIdx = 0, endIdx = 1, cnt = 0;
    let prebead = tileArr[startIdx].bead;

    while (endIdx < tileArr.length) {
      let curbead = tileArr[endIdx].bead;
      if (curbead === prebead) cnt++;
      else {
        if (cnt >= 4) {
          beadExploCnt[prebead] += cnt;
          for (let idx = startIdx; idx < endIdx; idx++) {
            tileArr[idx].bead = 0;
          }

          startIdx = 0, endIdx = 1, cnt = 0;
          prebead = tileArr[startIdx].bead;
        }
        else {
          startIdx = endIdx;
        }
      };

      endIdx += 1;
      prebead = curbead;
    }

    // 변화
    let newBeads = [];
    startIdx = 0, cnt = 0;
    curCoord = sharkCoord;
    while (true) {
      if (newBeads.length > N) break;
      // 구슬 그룹 파악
      // 구슬 배치
    }
  }

  return beadExploCnt.reduce((pre, cur, i, _) => pre + cur * i, 0);
}

console.log(solution(input));
