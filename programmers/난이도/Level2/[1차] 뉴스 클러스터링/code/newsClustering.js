/*
    # 문제 해결 단서
    1. 자카드 유사도라는 개념을 사용합니다.
    2. 문자열을 두 글자씩 끊어서 다중집합의 원소를 만드는 것이 선행되어야 합니다.
    3. 다중 집합은 중복되는 원소를 허용하고 있습니다.
      3-1. 다중집합은 중복되는 값들을 허용하므로 한 집합의 원소가 다른 집합에 있는지 여부 만으로 교집합을 구해서는 안됩니다.
    4. 공백, 숫자, 특수문자를 포함한 글자쌍은 제외 합니다.
    
    # 문제 해결 방안
    1. 먼저 문자열을 모두 소문자로 바꿔줍니다.
    2. 다중 집합을 만들어 줍니다.
    3. 합집합과 교집합을 구합니다.
    4. 자카드 유사도를 구하고 65536을 곱한 뒤 소수점 아래는 버리며 값을 반환합니다.
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

    let intersect = [],
      union = [];

    const makePair = (value, set) => {
      if (stack.length == 0) stack.push(value);
      else {
        set == set1
          ? set1.push(stack.pop() + value)
          : set2.push(stack.pop() + value);
        stack.push(value);
      }
    };

    const isValidPair = (pair) =>
      "a" <= pair.charAt(0) &&
      pair.charAt(0) <= "z" &&
      "a" <= pair.charAt(1) &&
      pair.charAt(1) <= "z";

    const getInterUni = (set1 = [], set2 = []) => {
      set1.map((value) => {
        let idx = set2.findIndex((pair) => pair == value);
        if (idx != -1) {
          intersect.push(value);
          set2.splice(idx, 1);
        }
        union.push(value);
      });
      if (set2.length != 0) set2.map((value) => union.push(value));
    };

    str1.split("").map((value) => {
      makePair(value, set1);
    });
    stack = [];
    str2.split("").map((value) => {
      makePair(value, set2);
    });

    set1 = set1.filter((pair) => isValidPair(pair));
    set2 = set2.filter((pair) => isValidPair(pair));

    getInterUni(set1, set2);

    jaccSimi = union.length == 0 ? 1 : intersect.length / union.length;
  }
  return Math.floor(jaccSimi * 65536);
};

console.log(solution("handshake", "shake hands"));
