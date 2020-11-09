/*
    # 문제 풀이
    -- 숫자 생성 --
    1. numbers를 바탕으로 숫자를 생성하고, combinations에 저장합니다.
    2. combinations에 담긴 숫자 각각에 쓰인 숫자를 numbers에서 지워 숫자를 생성합니다.
    -- 소수 판별 --
    1. 생성된 수 중에 가장 큰수까지의 prime Numbers를 에리토스네스의 체를 통해 걸러냅니다.
*/

const findPrimeNums = (lastNum) => {
  let primeNums = [0, 0];
  for (let index = 2; index <= lastNum; index++) {
    primeNums[index] = index;
  }
  for (let num = 2; num <= lastNum; num++) {
    for (let checker = num + num; checker <= lastNum; checker += num) {
      if (primeNums[checker] !== 0) primeNums[checker] = 0;
    }
  }
  return primeNums;
};

const makeNums = (numbers, digits) => {
  if (digits === 0) return [];

  let nums = makeNums(numbers, digits - 1);
  let combinations = [];

  if (digits !== 1) {
    nums.map((value) => {
      let copyNums = numbers.split("");
      let part = value.split("");

      part.map((num) => {
        copyNums.splice(copyNums.indexOf(num), 1);
      });

      for (let pos = 0; pos < copyNums.length; pos++) {
        combinations.push(value + copyNums[pos]);
      }
    });
  }

  for (let index = 0; index < numbers.length; index++) {
    combinations.push(numbers[index]);
  }

  return combinations;
};

const solution = (numbers) => {
  const combinations = makeNums(numbers, numbers.length);
  combinations.map((value, index) => (combinations[index] = value - "0"));
  combinations.sort((a, b) => b - a);
  const primeNums = findPrimeNums(combinations[0]);
  let sorted = [];
  combinations.map((value) => {
    if (sorted.findIndex((primeNum, index) => primeNum === value) === -1) {
      if (primeNums[value] !== 0) sorted.push(value);
    }
  });
  return sorted.length;
};

console.log(solution("17"));
