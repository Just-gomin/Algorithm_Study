/*
  # 문제풀이
  - board로 주어지는 배열은 모두 가로줄이다. board[0]가 맨위의 가로줄.
*/

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

const solution = (board, moves) => {
  let answer = 0; // 터진 인형 수
  let basket = []; // 크레인으로 집어 담은 인형
  let pickCount = 0; // 크레인을 실행한 횟수

  for (let move of moves) {
    // 크레인 실행 횟수가 인형을 고를 수 있는 최대 횟수를 초과한 경우 실행 중지
    if (pickCount > board.length * board.length) {
      break;
    }

    // 인형 선택 및 바구니에 담으며 마지막에 담긴 인형과 동일 할 시 터짐, 아닐 경우 바구니에 담기
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] !== 0) {
        if (basket != [] && basket[basket.length - 1] === board[i][move - 1]) {
          answer += 2;
          basket.splice(basket.length - 1, 1);
        } else {
          basket.push(board[i][move - 1]);
        }
        board[i][move - 1] = 0;
        break;
      }
    }

    pickCount++;
  }

  return answer;
};

let result = solution(board, moves);
console.log(result, "\n");
