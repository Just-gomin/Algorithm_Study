/*
    # 문제 해결 단서
    0. 입력 형식 : new_id(문자열, 1 ~ 1000의 길이)
        - 알파벳 소문자, 숫자, 특수문자로 구성
        - 나타날 수 있는 특수문자는 -_.~!@#$%^&*()=+[{]}:?,<>/ 로 한정
    1. 아이디의 규칙
        - 아이디의 길이는 3자 이상 15자 이하여야 합니다.
        - 아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다.
        - 단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.
    2. 신규 아이디 생성 절차
        - 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
        - 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
        - 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
        - 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
        - 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
        - 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
            만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
        - 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
    
    # 문제 해결 방안
    1. 위의 신규 아이디 생성 철차를 구현합니다.
*/

const solution = (new_id = "") => {
  let answer = [];
  // 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
  // 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
  let filted_id = new_id.toLowerCase().match(/[a-z]|[0-9]|[_.\-]/g);

  // 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
  filted_id.forEach((value, index) => {
    if (
      index === 0 ||
      (value === "." && filted_id[index - 1] !== ".") ||
      value !== "."
    )
      answer.push(value);
  });

  // 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
  if (answer[0] === ".") answer.splice(0, 1);
  if (answer[answer.length - 1] === ".") answer.splice(answer.length - 1, 1);

  // 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
  if (answer.length === 0) answer.push("a");

  // 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
  // - 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
  if (answer.length > 15) {
    answer = answer.slice(0, 15);
    if (answer[answer.length - 1] == ".") answer.pop();
  }

  // 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
  while (answer.length < 3) answer.push(answer[answer.length - 1]);

  return answer.join("");
};
