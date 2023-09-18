/*
  - 문제 Link : https://www.acmicpc.net/problem/21608

  - 참고 자료: https://howudong.tistory.com/185
  
  # Solution
  - 학생수 N^2 명, 3 ≤ N ≤ 20
  - 자리 번호 (r, c) => r행 c열
  - 교실 가장 왼쪽 윗 칸 (1, 1), 가장 오른쪽 아랫 칸(N, N)
  - |r1 - r2| + |c1 - c2| = 1을 만족하는 두 칸이 (r1, c1)과 (r2, c2)를 인접하다고 한다.
  - 자리 정하는 규칙
    1. 비어있는 칸 중에서 좋아하는 학생이 인접한 칸이 가장 많은 칸으로 자리를 정한다.
    2. 1을 만족하는 칸이 여러 개이면, 인접한 칸 중에서 비어있는 칸이 가장 많은 칸으로 자리를 정한다.
    3. 2를 만족하는 칸도 여러 개인 경우에는 행의 번호가 가장 작은 칸으로, 그러한 칸도 여러 개이면 열의 번호가 가장 작은 칸으로 자리를 정한다.
  - 학생의 만족도를 구해야 한다. 학생의 만족도는 자리 배치가 모두 끝난 후에 구할 수 있다. 
    학생의 만족도를 구하려면 그 학생과 인접한 칸에 앉은 좋아하는 학생의 수를 구해야 한다.
    그 값이 0이면 학생의 만족도는 0, 1이면 1, 2이면 10, 3이면 100, 4이면 1000이다.

  - 공석 확인, 공석들의 우선 순위 결정이 문제 해결에 있어 중요하다.
  - 해당 자리의 위치 정보와, 공석 수, 인접한 선호 학생수를 저장할 수 있는 Class인 SeatInfo를 선언한다.
  - 자리 배치 학생 순번을 저장하기 위한 students 배열, 학생들의 선호 학생 정보를 저장하기 위한 배열 favors,
    자리 배치 정보를 저장하기 위한 seats 배열, 공석 확인 및 정렬을 위한 seatInfoArr 배열을 선언한다.
  - 문제에서 주어지는 정보들을 위에서 선언한 배열들에 알맞게 저장한다.
  - 자리 배치 정보를 저장하기 위해 seats 배열을 이차원 배열로 만들며, seatInfoArr 배열에도 자리 정보만 가진 SeatInfo를 추가 한다.
  - 학생 순번 대로 순회를 시작한다.
    - 자리 정보를 갱신한다. (인접 자리의 공석 수, 선호 학생 수 정보 수집)
    - 문제에서 주어진 조건 대로 자리 정보를 정렬 시킨다.
    - 우선 순위가 가장 높은 자리 정보를 추출한다.
    - 해당 자리에 학생을 배치 한다.
  - 자리를 순회하며 학생들의 만족도를 누계한다.
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

class SeatInfo {
  constructor(row, column, fav, empty) {
    this.r = row;
    this.c = column;
    this.fav = fav;
    this.empty = empty;
  }
}

const seatCompare = (a, b) => {
  // 1. 비어있는 칸 중에서 좋아하는 학생이 인접한 칸이 가장 많은 칸
  if (a.fav != b.fav) return b.fav - a.fav;
  // 2. 인접하는 칸 중 비어있는 칸이 많은 칸
  if (a.empty != b.empty) return b.empty - a.empty;
  // 3. 행 번호가 작은 칸
  if (a.r != b.r) return a.r - b.r;

  // 4. 열 번호가 작은 칸
  return a.c - b.c;
}

function solution(input) {
  let answer = 0;

  const N = Number(input[0]);
  const students = []; // 자리 배치 학생 순번
  const favors = new Array(N ** 2 + 1); // 선호 학생 정보
  const seats = new Array(N); // 자리 저장 배열
  const seatInfoArr = []; // 공석 확인 위한 SeatInfo 배열
  const dArr = [[0, -1], [0, 1], [-1, 0], [1, 0]]; // 상/하/좌/우 좌표 계산을 위한 배열

  /**
   * 해당 자리 위치에 대한 변위가 유효한 범위에 있는지 확인하는 함수
   * 
   * @param {number} r 행 번호
   * @param {number} c 열 번호
   * @param {number} dx x 가변량 (-1, 0, 1)
   * @param {number} dy y 가변량 (-1, 0, 1)
   * @returns {boolean} true: 유효한 자리, false: 유효하지 않은 자리
   */
  const isValidSeatIdx = (r, c, dx, dy) => (0 <= r + dx && r + dx < N) && (0 <= c + dy && c + dy < N);

  /**
   * 자리 정보 갱신 함수
   * - 인접한 빈자리 수 확인
   * - 인접한 선호 학생 수 확인
   * 
   * @param {number} student : 자리 배치 하려는 학생의 번호
   */
  const updateSeatInfo = (student) => {
    for (let i = 0; i < seatInfoArr.length; i++) {
      let curSeat = seatInfoArr[i];
      let empty = 0;
      let fav = 0;

      for (let d of dArr) {
        if (isValidSeatIdx(curSeat.r, curSeat.c, d[0], d[1])) {
          if (seats[curSeat.r + d[0]][curSeat.c + d[1]] === 0) empty += 1;
          else fav += favors[student].findIndex(v => v === seats[curSeat.r + d[0]][curSeat.c + d[1]]) !== -1 ? 1 : 0;
        }
      }

      seatInfoArr[i].empty = empty;
      seatInfoArr[i].fav = fav;
    }
  };

  // 자리 배치 학생 번호 순서 및 선호 학생 번호 저장
  for (let i = 1; i <= N ** 2; i++) {
    const [num, ...fav] = input[i].split(' ').map(Number);
    students.push(num);
    favors[num] = fav;
  }

  // 자리 정보 저장 배열 생성
  for (let i = 0; i < N; i++) {
    seats[i] = new Array(N).fill(0);
    for (let j = 0; j < N; j++) {
      seatInfoArr.push(new SeatInfo(i, j, 0, 0));
    }
  }

  // 자리 배치
  for (const student of students) {
    updateSeatInfo(student);
    seatInfoArr.sort(seatCompare);
    let curSeatInfo = seatInfoArr.shift(); // 우선 순위가 가장 높은 자리 추출
    seats[curSeatInfo.r][curSeatInfo.c] = student; // 해당 자리에 학생 배치
  }

  // 만족도 조사
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const student = seats[i][j];
      let fav = 0;
      for (const d of dArr) {
        if (isValidSeatIdx(i, j, d[0], d[1])) {
          fav += favors[student].findIndex(v => v === seats[i + d[0]][j + d[1]]) !== -1 ? 1 : 0;
        }
      }
      if (fav !== 0) answer += 10 ** (fav - 1);
    }
  }

  return answer;
}

console.log(solution(input));
