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

class seatInfo {
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

  for (let i = 1; i <= N ** 2; i++) {
    if (i <= N) seats[i - 1] = new Array(N).fill(0);

    const [num, ...fav] = input[i].split(' ').map(Number);
    students.push(num);
    favors[num] = fav;
  }

  for (const student of students) {
    // 
  }

  return answer;
}

console.log(solution(input));
