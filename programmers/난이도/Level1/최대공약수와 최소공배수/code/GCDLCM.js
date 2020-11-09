/*
// # 두 수의 약수를 찾아 비교하는 방법
const getAliquots = (num) => {
  let aliquots = [1];
  for (let divisor = 2; divisor <= num / 2; divisor++) {
    if (num % divisor === 0) aliquots.push(divisor);
  }
  aliquots.push(num);
  return aliquots;
};

const solution = (n, m) => {
  let answer = [];

  if (n > m && n % m === 0) answer = [m, n];
  else if (n < m && m % n === 0) answer = [n, m];

  let nAliquots = getAliquots(n);
  let mAliquots = getAliquots(m);

  console.log("nAliquots : ", nAliquots, "\nmAliquots : ", mAliquots);
  let gcd = 0;

  nAliquots.map((value) => {
    if (mAliquots.includes(value)) {
      gcd = gcd < value ? value : gcd;
    }
  });
  answer = [gcd, (n * m) / gcd];
  return answer;
};
*/

// 최대 공약수 = 숫자로 나누어 지지 않는 나머지와의 약수를 찾는다.
const getGCD = (num1, num2) => {
  return num2 ? getGCD(num2, num1 % num2) : Math.abs(num1);
};

const solution = (num1, num2) => {
  let gcd = getGCD(num1, num2);
  return [gcd, (num1 * num2) / gcd];
};

// console.log(solution(30, 967546));
console.log(solution(21, 12));
