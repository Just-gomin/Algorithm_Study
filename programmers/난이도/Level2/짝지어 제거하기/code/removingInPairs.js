/*
    # 문제 해결 단서
    1. 연속된 문자가 동일할 경우 제거합니다.
    2. 문자열의 길이가 홀수이면 짝지어 제거가 되지 않습니다.
    
    # 문제 해결 방안
    1. 문자열의 길이 만큼 반복문을 실행합니다.
    2. 반복문을 실행하던 중 i번째 문자와 i+1번째 문자가 같은 경우 i와 i+1번째 문자를 제거합니다.
    3. 제거 후 처음으로 돌아가 다시 검사를 실시합니다.
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

  const removeSpell = (low, high) => {
    if (high - low <= 2) {
      for (let i = low; i < high; i++) {
        if (arr[i] === arr[i + 1]) arr.splice(i, 2);
      }
    } else {
      let mid = Math.floor((high - low) / 2);
      removeSpell(low, mid);
      removeSpell(mid + 1, high);
    }
  };

  if (arr.length % 2 == 1) return 0;
  else {
    removeSpell(0, arr.length - 1);
    return arr.length == 0 ? 1 : 0;
  }
};

console.log(solution("bbaa"));
