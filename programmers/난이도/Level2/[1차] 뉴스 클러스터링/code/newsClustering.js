/*
    # 문제 해결 단서
    1. 자카드 유사도라는 개념을 사용합니다.
    2. 문자열을 두 글자씩 끊어서 다중집합의 원소를 만드는 것이 선행되어야 합니다.
    3. 공백, 숫자, 특수문자를 포함한 글자쌍은 제외 합니다.
    
    # 문제 해결 방안
    1. 먼저 문자열을 모두 소문자로 바꿔주고 다중 집합을 생성합니다.
    2. 합집합과 교집합을 구합니다.
    3. 자카드 유사도를 구하고 65536을 곱한 뒤 소수점 아래는 버리며 값을 반환합니다.
*/

const solution = (str1 = "", str2 = "") => {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let jaccSimi;
  if (str1 == "" && str2 == "") jaccSimi = 1;
  else {
    let set1 = [],
      set2 = [];
    let stack = [];
    str1.split("").map((value) => {
      if (stack.length == 0) stack.push(value);
      else {
        set1.push(stack[stack.length - 1] + value);
        stack.push(value);
      }
    });
    stack = [];
    str2.split("").map((value) => {
      if (stack.length == 0) stack.push(value);
      else {
        set2.push(stack[stack]);
      }
    });
  }
  return jacSimi;
};
