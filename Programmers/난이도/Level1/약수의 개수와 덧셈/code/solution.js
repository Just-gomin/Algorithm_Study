function solution(left, right) {
  var answer = 0;
  for (let i = left; i < right + 1; i++) {
    if (Math.floor(Math.sqrt(i)) == Math.sqrt(i)) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
