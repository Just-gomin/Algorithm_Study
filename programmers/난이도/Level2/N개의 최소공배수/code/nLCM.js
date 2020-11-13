/*
    # 문제 해결 단서
    1. 두 수에 대해 최대 공배수는 (두 수의 곱)/(두 수의 최대공약수) 입니다.
    2. n개의 수에 대한 최대 공배수는 앞에서 부터 2개에 대한 최소 공배수를 구하고 그 수와 다음 수에 대해 최소공배수를 구하는 식으로 진행 합니다.
    
    # 문제 해결 방안
    1. 최대 공약수를 구하는 함수를 작성합니다.
    2. n개의 입력에 대해서 i 번째 수와 i-1번째 까지의 최소 공배수의 최소공배수를 구합니다.
*/

const getGCD = (x = 0, y = 0) => (y ? getGCD(y, x % y) : x);

const solution = (arr = []) => {
  let result = 0;
  if (arr.length === 1) result = arr[0];
  else {
    let gcd = 1;
    let lcm = 1;
    for (let i = 0; i < arr.length; i++) {
      gcd = getGCD(arr[i], lcm);
      lcm = (lcm * arr[i]) / gcd;
    }
    result = lcm;
  }
  return result;
};

console.log(solution([1, 2, 3]));
