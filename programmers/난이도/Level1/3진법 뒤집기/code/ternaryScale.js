/*
    # 문제 해결방안

    1. n을 3진법으로 변환 후 뒤집는다.
        -> n을 3으로 나눈 나머지를 리스트에 push해주는 과정으로 뒤집기까지 같이 진행됩니다.
    2. 뒤집은 수를 다시 10진법으로 나타냅니다.
        -> 리스트의 k번째 있는 수에 대해서 v_k * 3^(listLength-1-k)를 통해 10진법으로 바꿔줍니다.
        -> 0번째에 위치한 수가 가장 자리수가 높고, 마지막에 위치한 수가 자리수가 가장 낮으므로 listLength-1-(index)를 통해 지수를 결정합니다. 
*/

const solution = (n) => {
  let answer = 0;
  let tnary = [];
  while (n != 0) {
    let remain = n % 3;
    tnary.push(remain);
    n = (n - remain) / 3;
  }
  tnary.map((value, index) => {
    answer += value * Math.pow(3, tnary.length - 1 - index);
  });
  return answer;
};
