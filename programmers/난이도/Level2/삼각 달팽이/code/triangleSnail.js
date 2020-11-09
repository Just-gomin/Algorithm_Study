const solution = (n) => {
  let answer = [];
  let pyramid = new Array(n).fill([]);
  let num = 1,
    numRange = (n * (n + 1)) / 2,
    go = 1,
    currStair = 0,
    fullStair = n - 1,
    inputIndex = 0;
  while (num < numRange + 1) {
    if (currStair === fullStair && go === 1) {
    } else {
      pyramid[currStair].push(num++);
    }
    currStair += go;
  }
};

console.log(solution(3));
