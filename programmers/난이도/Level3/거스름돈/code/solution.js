function solution(n = 0, money = []) {
  if (n == 0) {
    return 1;
  } else if (n != 0 && money.length == 0) {
    return 0;
  } else if (money.length == 1) {
    return n % money[0] == 0 ? 1 : 0;
  }

  let answer = 0;

  let currency = money.splice(0, 1);

  answer += solution(n, [...money]);

  while (n > 0) {
    n = n - currency;
    answer += solution(n, [...money]);
  }

  return answer % 1000000007;
}
