/*
    # 문제 해결 단서
    1. LZW(Lempel-Ziv-Welch) 알고리즘 -> 이미지 파일 포맷인 GIF 등 다양한 응용에서 사용
    2. LZW의 압축 과정
        1. 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
        2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
        3. w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
        4. 입력에서 처리되지 않은 다음 글자가 남아있다면(c), w+c에 해당하는 단어를 사전에 등록한다.
        5. 단계 2로 돌아간다.
    
    # 문제 해결 방안
    1. 위의 과정을 코드로 작성합니다.
*/

const solution = (msg = "") => {
  let result = [];

  let dict = [];
  for (let i = "A".charCodeAt(); i <= "Z".charCodeAt(); i++) {
    dict.push(String.fromCharCode(i));
  }

  let pos = 0;
  while (pos < msg.length) {
    let wIdx = pos;
    let w = msg[wIdx];
    let index = 0;
    let loop = true;
    while (loop) {
      let isIn = dict.findIndex((value) => value === w);
      if (isIn != -1) {
        index = isIn;
        wIdx += 1;
        w += msg[wIdx];
        pos += 1;
      } else {
        dict.push(w);
        result.push(index + 1);
        loop = false;
      }
    }
  }

  return result;
};

const example1 = "KAKAO";
const example2 = "TOBEORNOTTOBEORTOBEORNOT";
const example3 = "ABABABABABABABAB";

console.log(solution(example1));
console.log(solution(example2));
console.log(solution(example3));
