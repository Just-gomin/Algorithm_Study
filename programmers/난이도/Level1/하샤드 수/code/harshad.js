const solution = (x) => {
  let num = x,
    divisor = 0;

  while (num >= 1) {
    divisor += num % 10;
    num = Math.floor(num / 10);
  }

  return x % divisor === 0 ? true : false;
};

console.log(solution(11));
