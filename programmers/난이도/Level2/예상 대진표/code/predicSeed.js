/*
    # 문제 해결 단서
    1. 인원 수가 2의 거듭제곱으로 주어지므로, 부전 승이 발생하지 않습니다.
    2. 횟수를 셀 때 가장 중요한 것은 a,b 사이에 n/2가 존재하는 지의 여부입니다.
    3. 만약 두 번호 사이에 n/2가 있다면, 둘은 어쩔 수 없이 결승에서 만나게 됩니다.

    # 문제 해결 방안
    1. a,b가 n/2를 사이에 둘 때 까지 반복문을 돌립니다.
    2. 반복문 진행 중에는 n,a,b 모두를 갱신하게 됩니다.
        n -> n/2
        a -> a >= n/2 ? a - n/2 : a
        b -> b >= n/2 ? b - n/2 : b
    3. a,b가 n/2를 사이에 두게 되면 반복문을 종료하고 그때의 log_2(n)을 구합니다.
*/

const solution = (n, a, b) => {
  let answer = Math.log(n) / Math.log(2);
  let big = a - b > 0 ? a : b,
    small = a - b > 0 ? b : a;

  while (big <= n / 2 || n / 2 < small) {
    answer -= 1;
    n /= 2;
    if (small > n / 2) {
      a -= n / 2;
      b -= n / 2;
    }
    big = a - b > 0 ? a : b;
    small = a - b > 0 ? b : a;
  }

  return answer;
};

console.log(solution(8, 3, 7));
