/* 
  피보나치 수열의 값은 빠르게 증가하기 때문에 몇번의 시행이 지나면 int의 표현범위를 벗어나게 됩니다.

  따라서 피보나치 수열의 값을 그대로 계산하여 저장하는 것보다, (a + b)%c ≡ (a%c + b%c)%c 임을 이용해서 주어진 문제를 해결합니다.
*/
const solution = (n) => {
  let fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibo.push(((fibo[i - 1] % 1234567) + (fibo[i - 2] % 1234567)) % 1234567);
  }
  console.log(fibo);
  return fibo[n] % 1234567;
};

console.log(solution(20));
