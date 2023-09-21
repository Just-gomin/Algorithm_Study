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

  static copy = (other) => new this(other.r, other.c);
}
class Tile extends Coordinate {
  constructor(r, c, bead = 0) {
    super(r, c);
    this.bead = bead;
  }
}

function solution(input) {
  const beadExploCnt = [0, 0, 0, 0];

  const [N, M] = input[0].split(" ").map(Number);

  const sharkCoord = new Coordinate((N + 1) / 2 - 1, (N + 1) / 2 - 1); // 상어의 위치
  const field = new Array(N); // 구슬의 배치를 저장하는 2차원 배열
  const tileArr = []; // 문제의 주어진 과정을 진행을 위해 구슬 배치 정보를 담는 1차원 배열

  const up = new Coordinate(-1, 0); // 상
  const down = new Coordinate(1, 0); // 하
  const left = new Coordinate(0, -1); // 좌
  const right = new Coordinate(0, 1); // 우

  const destroyed = 0; // 파괴 또는 폭발 후 구슬의 상태 값

  const isValidCoord = (coord) => 0 <= coord.r && coord.r < N && 0 <= coord.c && coord.c < N;

  // 구슬 배치 저장
  for (let i = 0; i < N; i++) {
    field[i] = input[i + 1].split(" ").map(Number);
  }

  // 상어 위치를 기준으로, 좌하우상 방향으로 순회 하며 구슬을 1차원 배열로 변환
  let curCoord = Coordinate.copy(sharkCoord);
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

      if (isValidCoord(curCoord)) {
        tileArr.push(
          new Tile(curCoord.r, curCoord.c, field[curCoord.r][curCoord.c])
        );
      }
    }
  }

  /**
   * 파괴: 주어진 거리와 방향으로 구슬을 파괴
   * 
   * @param {number} si 파괴 거리
   * @param {number} di 파괴 방향
  */
  const blizzard = (si, di) => {
    const destroyDirArr = [undefined, up, down, left, right]; // 구슬 폭발 방향. 상하좌우
    let destroyDir = destroyDirArr[di];
    let destroyCoordArr = [];

    for (let s = 1; s <= si; s++) {
      destroyCoordArr.push(
        new Coordinate(
          sharkCoord.r + s * destroyDir.r,
          sharkCoord.c + s * destroyDir.c
        )
      );
    }

    for (const tile of tileArr) {
      if (destroyCoordArr.findIndex((v) => v.same(tile)) !== -1) {
        tile.bead = destroyed;
      }
    }
  };

  /**
   * 폭발: 폭발 후 구슬이 빈칸을 채우면서, 4개 이상 모인 경우 구슬 폭발
   */
  const explore = () => {
    let startIdx = 0, endIdx = 0, cnt = 1;
    let prebead = tileArr[startIdx].bead;

    while (++endIdx < tileArr.length) {
      let curbead = tileArr[endIdx].bead;

      // 폭발한 자리는 건너뛴다.
      if (curbead === destroyed) continue;

      // 폭발한 자리가 아니며, 이전 구슬과 현재 구슬이 같은 경우
      if (curbead === prebead) cnt++;

      if (curbead !== prebead && cnt >= 4) {
        beadExploCnt[prebead] += cnt;

        for (let idx = startIdx; idx < endIdx; idx++) {
          tileArr[idx].bead = destroyed;
        }

        startIdx = 0, endIdx = 0, cnt = 1;
        prebead = tileArr[startIdx].bead;
      }

      if (curbead !== prebead && cnt < 4) {
        startIdx = endIdx;
        prebead = curbead;
        cnt = 1;
      };
    }
  };

  /**
   * 변화: 잔여 구슬로 새로운 구슬 배치 생성
   */
  const beadRemake = () => {
    let newBeads = [];
    let prebead = destroyed, cnt = 0;
    for (const tile of tileArr) {
      if (tile.bead === destroyed) continue;

      if (tile.bead === prebead) cnt++;
      else {
        if (prebead !== destroyed) newBeads.push(cnt, prebead);
        prebead = tile.bead;
        cnt = 1;
      }
    }

    for (let i = 0; i < tileArr.length; i++) {
      tileArr[i].bead = i < newBeads.length ? newBeads[i] : destroyed;
    }
  };

  // 구슬 파괴, 이동, 폭발, 변화
  for (let i = 1; i <= M; i++) {
    const [si, di] = input[N + i].split(" ").map(Number);
    blizzard(si, di);
    explore();
    beadRemake();
  }

  return beadExploCnt.reduce((pre, cur, i, _) => pre + cur * i, 0);
}

console.log(solution(input));