/*
    # 문제 해결 단서
    1. 4블록의 모양이 2*2일 경우에 블록들이 터지게 됩니다.
    2. 2*2 모양이 겹쳐서 블록이 존재하는 경우라면, 이 또한 한번에 터지게 됩니다.
        ex ) ["xxy","xxy","yxx"], ["xxy","xxy","xxy"], ["xxx","xxx","yyy"]
    3. 높이와 너비는 2~30까지의 값을 받습니다.
    
    # 문제 해결 방안
    1. 문자열로 이루어진 board의 각 원소들을 배열로 만듭니다.
    2. 높이와 너비에 맞게 for문을 2개 중첩하여 2*2 블록이 모두 같은 것으로 이루어져있는지 확인을 합니다.
    3. 2*2블록이 모두 같은 문자이면, 모두 boom 배열에 담아 둡니다.
    4. 이미 boom에 속해있다면 그것은 제외하고 진행합니다.
    5. boom에 속한 원소들을 모두 터뜨립니다.
    6. 터진 후 의 블록들을 내려서 새로운 board를 생성합니다.
    7. 2 ~ 6 의 과정을 반복합니다. boom 배열이 빌 때까지 진행합니다.
*/

const isLiInList = (list, ele) => {
  let result = false;
  list.map((value) => {
    if (value[0] == ele[0] && value[1] == ele[1]) result = true;
  });
  return result;
};

const solution = (row, col, board) => {
  let result = 0;
  let nboard = [],
    boomlist = [];
  for (let i = 0; i < row; i++) nboard.push(board[i].split(""));

  const boomFilter = () => {
    for (let i = 0; i < row - 1; i++) {
      for (let j = 0; j < col - 1; j++) {
        let block = nboard[i][j];
        if (
          block != "" &&
          block == nboard[i][j + 1] &&
          block == nboard[i + 1][j] &&
          block == nboard[i + 1][j + 1]
        ) {
          let waiting = [
            [i, j],
            [i + 1, j],
            [i, j + 1],
            [i + 1, j + 1],
          ];
          waiting.map((pos) => {
            if (!isLiInList(boomlist, pos)) boomlist.push(pos);
          });
        }
      }
    }
  };

  const boom = () => {
    boomlist.map((pos) => {
      let i = pos[0],
        j = pos[1];
      nboard[i][j] = "";
      result += 1;
    });
    boomlist = [];
  };

  const blockDowm = () => {
    for (let j = 0; j < col; j++) {
      for (let i = row - 1; i > 0; i--) {
        if (nboard[i][j] == "") {
          for (let k = i - 1; k >= 0; k--) {
            if (nboard[k][j] !== "") {
              nboard[i][j] = nboard[k][j];
              nboard[k][j] = "";
              break;
            }
          }
        }
      }
    }
  };

  boomFilter();
  while (boomlist.length != 0) {
    boom();
    blockDowm();
    boomFilter();
  }

  return result;
};

console.log(solution(5, 6, ["AAAAAA", "BBAATB", "BBAATB", "JJJTAA", "JJJTAA"]));
