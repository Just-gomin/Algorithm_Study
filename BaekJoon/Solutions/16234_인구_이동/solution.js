/*
  - 문제 Link : https://www.acmicpc.net/problem/16234

  # Solution
  1. N×N크기의 땅이 있고, 땅은 1×1개의 칸으로 나누어져 있다
  2. 각각의 땅에는 나라가 하나씩 존재하며, r행 c열에 있는 나라에는 A[r][c]명이 살고 있다
  3. 인접한 나라 사이에는 국경선이 존재한다. 모든 나라는 1×1 크기이기 때문에, 모든 국경선은 정사각형 형태
  4. 인구 이동은 하루 동안 다음과 같이 진행되고, 더 이상 아래 방법에 의해 인구 이동이 없을 때까지 지속된다.
      - 국경선을 공유하는 두 나라의 인구 차이가 L명 이상, R명 이하라면, 두 나라가 공유하는 국경선을 오늘 하루 동안 연다.
      - 위의 조건에 의해 열어야하는 국경선이 모두 열렸다면, 인구 이동을 시작한다.
      - 국경선이 열려있어 인접한 칸만을 이용해 이동할 수 있으면, 그 나라를 오늘 하루 동안은 연합이라고 한다.
      - 연합을 이루고 있는 각 칸의 인구수는 (연합의 인구수) / (연합을 이루고 있는 칸의 개수)가 된다. 편의상 소수점은 버린다.
      - 연합을 해체하고, 모든 국경선을 닫는다.
  5. 입력
    - 첫째 줄에 N, L, R이 주어진다. (1 ≤ N ≤ 50, 1 ≤ L ≤ R ≤ 100)
    - 둘째 줄부터 N개의 줄에 각 나라의 인구수가 주어진다. r행 c열에 주어지는 정수는 A[r][c]의 값이다. (0 ≤ A[r][c] ≤ 100)
    - 인구 이동이 발생하는 일수가 2,000번 보다 작거나 같은 입력만 주어진다.

  1. N*N 행렬 생성 및 인구 수 저장
  2. 인구 이동이 없을 때까지 반복문 수행
    1. 행 기준 for loop
      1. 열 기준 for loop
        1. 방문하지 않은 땅이면 BFS 진행
          1. 더 이상 인접 국가가 등장하지 않으면 인구 이동 처리
        2. 방문한 땅이면 Pass
  3. 반복한 횟수 반환    
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

  const [N, L, R] = input[0].split(' ').map(Number);
  const A = new Array(N);
  for (let i = 0; i < N; i++) {
    A[i] = input[i + 1].split(' ').map(Number);
  }

  /**
   * 
   * @returns 인구 이동 여부. true: 인구 이동 발생 / false: 인구 이동 없음
   */
  const movePopulation = () => {
    const visited = new Array(N); // 국경 공유를 확인한 나라 관리

    for (let i = 0; i < N; i++) {
      visited[i] = new Array(N).fill(false);
    }

    let totalMovementAmount = 0; // 오늘 움직인 인구의 총 합
    let sharedCountries = []; // 국경을 공유하는 나라

    /**
     * 
     * @param {number} r row index
     * @param {number} c column index
     * @returns 좌표 인덱스의 유효 여부
     */
    const validIndex = (r, c) => {
      return (0 <= r && r < N) && (0 <= c && c < N);
    }

    /**
     * 나라의 row, column이 주어지면 국경을 공유할 나라들을 너비 탐색 진행.
     * 국경을 공유 한다면 sharedCountries에 좌표 추가.
     * 
     * @param {number} r row index
     * @param {number} c column index
     */
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

    // row와 column 범위 만큼 순회 진행해 인구 인동 처리
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

  // 인구 이동이 없을 때 까지 반복 진행
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