/*
    # 문제 해결 단서
    1. 띄어쓰기를 기준으로 한단어씩 나뉩니다.
    2. 단어의 첫 글자는 영어 소문자는 대문자로, 이외의 글자들은 소문자 및 숫자 그대로 둡니다.
    
    # 문제 해결 방안
    1. 문자열을 배열로 분리합니다.
    2. 반복문을 통해 각 단어들을 JadenCase로 만들어 줍니다.
*/

// # 첫 solution
// const solution = (s = "") => {
//   let sArr = s.split(" ");
//   let result = [];
//   sArr.map((value) => {
//     let word = value.toLowerCase().split("");
//     if ("a" <= word[0] && word[0] <= "z") word[0] = word[0].toUpperCase();
//     result.push(word.join(""));
//   });
//   return result.join(" ");
// };

// # 축약형 Solution
const solution = (s = "") =>
  s
    .split(" ")
    .map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    )
    .join(" ");

console.log(solution("3people unFollowed me"));
