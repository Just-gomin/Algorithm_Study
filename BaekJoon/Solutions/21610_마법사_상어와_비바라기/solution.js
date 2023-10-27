/*
  - 문제 Link : https://www.acmicpc.net/problem/21610

  # 문제해결
  1. 크기가 N×N인 격자.
    - 격자의 가장 왼쪽 윗 칸은 (1, 1)이고, 가장 오른쪽 아랫 칸은 (N, N).
    - 마법사 상어는 연습을 위해 1번 행과 N번 행을 연결했고, 1번 열과 N번 열도 연결했다. 즉, N번 행의 아래에는 1번 행이, 1번 행의 위에는 N번 행이 있고, 1번 열의 왼쪽에는 N번 열이, N번 열의 오른쪽에는 1번 열이 있다.
  2. 격자의 각 칸에는 바구니가 하나 있고, 바구니는 칸 전체를 차지. 바구니에 저장할 수 있는 물의 양에는 제한이 없다.
  3. (r, c)는 격자의 r행 c열에 있는 바구니를 의미하고, A[r][c]는 (r, c)에 있는 바구니에 저장되어 있는 물의 양을 의미.
  4. 비바라기를 시전하면 (N, 1), (N, 2), (N-1, 1), (N-1, 2)에 비구름이 생긴다. 구름은 칸 전체를 차지한다. 이제 구름에 이동을 M번 명령하려고 한다. i번째 이동 명령은 방향 di과 거리 si로 이루어져 있다. 
  5. 방향은 총 8개의 방향이 있으며, 8개의 정수로 표현한다. 1부터 순서대로 ←, ↖, ↑, ↗, →, ↘, ↓, ↙ 이다.
  6. 이동을 명령하면 다음이 순서대로 진행
    1. 모든 구름이 di 방향으로 si칸 이동한다.
    2. 각 구름에서 비가 내려 구름이 있는 칸의 바구니에 저장된 물의 양이 1 증가한다.
    3. 구름이 모두 사라진다.
    4. 2에서 물이 증가한 칸 (r, c)에 물복사버그 마법을 시전한다. 물복사버그 마법을 사용하면, 대각선 방향으로 거리가 1인 칸에 물이 있는 바구니의 수만큼 (r, c)에 있는 바구니의 물이 양이 증가한다.
      이때는 이동과 다르게 경계를 넘어가는 칸은 대각선 방향으로 거리가 1인 칸이 아니다.
      예를 들어, (N, 2)에서 인접한 대각선 칸은 (N-1, 1), (N-1, 3)이고, (N, N)에서 인접한 대각선 칸은 (N-1, N-1)뿐이다.
    5. 바구니에 저장된 물의 양이 2 이상인 모든 칸에 구름이 생기고, 물의 양이 2 줄어든다. 이때 구름이 생기는 칸은 3에서 구름이 사라진 칸이 아니어야 한다.
  7. M번의 이동이 모두 끝난 후 바구니에 들어있는 물의 양의 합을 반환
  8. 입력
    첫째 줄에 N, M이 주어진다. (2 ≤ N ≤ 50, 1 ≤ M ≤ 100)
    둘째 줄부터 N개의 줄에는 N개의 정수가 주어진다. r번째 행의 c번째 정수는 A[r][c]를 의미한다. (0 ≤ A[r][c] ≤ 100)
    다음 M개의 줄에는 이동의 정보 di, si가 순서대로 한 줄에 하나씩 주어진다. (1 ≤ di ≤ 8, 1 ≤ si ≤ 50)

  1. 격자 A 생성.
  2. cloud 배열 생성.
  3. M 만큼 순회 진행
    1. 위의 이동 명령 각 항목에 대한 함수를 만들어 수행
  4. A 행렬을 순회 하며 물의 양을 합하고 반환.
*/

const fs = require("fs");
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

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

    cloud = cloud.map((v) => {
      let [r, c] = v;
      let [dr, dc] = directions[d - 1];
      return [r + dr * s, c + dc * s];
    })
  };

  /**
   * 구름이 있는 격자의 칸에 비를 내리는 함수. 격자가 연결된 것을 고려해, 인덱스를 N으로 나눈 나머지로 지정.
   */
  const rain = () => {
    const makeValidIndex = (i) => i < 0 ? N + i : i & N;;

    for (const pos of cloud) {
      const [r, c] = pos;
      const r1 = makeValidIndex(r);
      const c1 = makeValidIndex(c);

      A[r1][c1] += 1;
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

        if (isValidIndex(r1, c1)) A[r1][c1] += 1;
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
        if (A[r][c] >= 2) {
          A[r][c] -= 2;
          newCloud.push([r, c]);
        }
      }
    }

    newCloud.filter((newPos) => {
      return cloud.findIndex((pos) => pos[0] === newPos[0] && pos[1] === newPos[1]) === -1;
    })

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
