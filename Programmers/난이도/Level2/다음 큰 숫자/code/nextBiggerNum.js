const toBinary = (num) => {
  let binary = [];
  while (num !== 0) {
    binary.push(num % 2);
    num = (num - (num % 2)) / 2;
  }
  return binary;
};
const solution = (n) => {
  let answer = n + 1;
  let binaryN = toBinary(n);
  let numN0 = 0,
    numN1 = 0;
  binaryN.map((value) => (value === 1 ? numN1++ : numN0++));
  while (true) {
    let binaryAns = toBinary(answer);
    let numAns0 = 0,
      numAns1 = 0;
    binaryAns.map((value) => (value === 1 ? numAns1++ : numAns0++));
    if (numAns1 === numN1) break;
    answer++;
  }
  return answer;
};

const shortSolution = (n = 0, big = n + 1) =>
  n.toString(2).match(/1/g).length === big.toString(2).match(/1/g).length
    ? big
    : solution(n, big + 1);

console.log(shortSolution(78));
