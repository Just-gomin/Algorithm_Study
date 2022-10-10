/*
    #문제 해결 단서
    1. 수식은 그대로 이고, 연산자의 우선 순위만을 고려하여 최대 값을 갖도록합니다.
    2. 숫자의 개수보다 연산자의 개수는 하나 적습니다.

    #문제 해결 방안
    1. expression을 숫자, 연산자 단위로 분리해 List를 생성합니다.
    2. 연산자들의 우선 순위를 정합니다.(연산자 종류_factorial)(순열을 통해 주어진 연산자 종류에서 가능한 조합을 모두 생성)
    3. 우선 순위들을 바탕으로 연산을 수행합니다.
    4. 우선 순위 한 단위가 끝날 때 마다 최고치를 갱신해서 마지막에 남은 최대값을 반환합니다.

    #Permutation Source : https://stackoverflow.com/a/20871714
*/

const permutator = (li) => {
  let result = [];
  const permute = (nums, m = []) => {
    if (nums.length === 0) result.push(m);
    else {
      for (let i = 0; i < nums.length; i++) {
        let curr = nums.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };
  permute(li);
  return result;
};

const solution = (expression = "") => {
  let answer = 0;
  // 수식 분할
  let regexp = /\*|\-|\+/g;
  let liExp = expression.split(regexp);
  let operations = expression.match(regexp);
  let opSet = [];
  new Set(operations).forEach((element) => opSet.push(element));
  let opIdx = 0;
  for (let i = 1; i < liExp.length; i += 2) {
    liExp.splice(i, 0, operations[opIdx]);
    opIdx += 1;
  }

  // 연산자의 순열 생성
  let priors = permutator(opSet);

  // 연산자 우선 순위 순열에 따라 결과 계산
  priors.map((ops = []) => {
    let cpexp = liExp.slice();
    ops.map((op) => {
      let calexp = [];
      for (let i = 0; i < cpexp.length; i++) {
        if (cpexp[i] === op) {
          let num1 = calexp.pop() - "0";
          let num2 = cpexp[++i] - "0";
          let result = 0;
          switch (op) {
            case "*":
              result = num1 * num2;
              break;
            case "+":
              result = num1 + num2;
              break;
            case "-":
              result = num1 - num2;
              break;
          }
          calexp.push(result + "");
        } else calexp.push(cpexp[i]);
      }
      cpexp = calexp.slice();
    });
    let result = cpexp[0] - "0" > 0 ? cpexp[0] - "0" : -1 * (cpexp[0] - "0");
    if (answer < result) answer = result;
  });
  return answer;
};

console.log(solution("50*6-3*2"));
