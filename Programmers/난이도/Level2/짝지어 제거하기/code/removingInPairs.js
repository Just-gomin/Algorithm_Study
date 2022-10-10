/*
    # 문제 해결 단서
    1. 연속된 문자가 동일할 경우 제거합니다.
    2. 문자열의 길이가 홀수이면 짝지어 제거가 되지 않습니다.
    
    # 문제 해결 방안
    1. 문자열의 길이가 홀수 이면 0을 반환합니다.
    2. 문자열의 길이 만큼 반복문을 실행합니다.
    3. 반복문을 실행하는 동안 stack에 한 글자씩 담게되는데, 담기 전에 검사를 실시합니다.
      - 스택의 마지막 문자와 문자열의 i번째 글자가 동일합니까?
      1) 동일 하다면 stack의 마지막 문자를 제거합니다. 
      2) 동일 하지 않다면 stack에 문자를 push 합니다.
    4. 반복문을 진행한 뒤 stack의 길이가 0이면 1을 반환하고 그렇지 않으면 0을 반환 합니다.
*/

// # 효율성 실패
// const solution = (s = "") => {
//   let arr = s.split("");
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === arr[i + 1]) {
//       arr.splice(i, 2);
//       i = -1;
//     }
//   }
//   return arr.length === 0 ? 1 : 0;
// };

const solution = (s = "") => {
  let arr = s.split("");

  if (arr.length % 2 == 1) return 0;
  else {
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
      let si = stack.length - 1;
      if (si < 0) stack.push(arr[i]);
      else if (stack[si] == arr[i]) stack.pop();
      else stack.push(arr[i]);
      console.log(stack);
    }
    return stack.length == 0 ? 1 : 0;
  }
};

console.log(solution("bbaa"));
