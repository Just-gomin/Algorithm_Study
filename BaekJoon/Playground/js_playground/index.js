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
  .split("\n")
  .map((v) => v.trim());

// ------------------------------
// Input with Read Line
// ------------------------------

// // Read Inputs (from. https://velog.io/@leenzy/readline-%EB%AA%A8%EB%93%88-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

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
   * 
   * @param {number} r 행 번호
   * @param {number} c 열 번호
   * @param {number} dx x 가변량 (-1, 0, 1)
   * @param {number} dy y 가변량 (-1, 0, 1)
   * @returns {boolean} 해당 변위가 자리 인덱스의 유효한 범위에 있는지 확인하는 함수
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
    let curSeatInfo = seatInfoArr.shift();
    seats[curSeatInfo.r][curSeatInfo.c] = student;
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