// # 에라토스네스의 체를 이용한 풀이
const solution = (n) => {
  let primeNums = [0, 0];
  for (let index = 2; index <= n; index++) {
    primeNums[index] = index;
  }

  for (let num = 2; num <= n; num++) {
    for (let checker = num + num; checker <= n; checker += num) {
      if (primeNums[checker] !== 0) primeNums[checker] = 0;
    }
  }
  const answer = primeNums.filter((value) => value !== 0).length;
  return answer;
};

console.log(solution(1000000));
