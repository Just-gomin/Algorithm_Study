/*
    # 문제 해결 단서
    0. 입력 형식 : lines = ["S(응답완료시간) T(처리시간)"로 된 로그 N개] (1 <= N <= 2000) , 응답완료시간 S를 기준으로 오름차순으로 정렬된 상태입니다.
        - S : 2016-09-15 hh:mm:ss.sss 의 형식
        - T : 0.1s, 0.312s, 2s 와 같이 최대 소수점 셋째 자리까지 기록하며 뒤에는 초를 의미하는 s로 끝납니다.
    1. 예를 들어, 로그 문자열 2016-09-15 03:10:33.020 0.011s은 2016년 9월 15일 오전 3시 10분 **33.010초**부터 2016년 9월 15일 오전 3시 10분 **33.020초**까지 **0.011초** 동안 처리된 요청을 의미합니다. (처리시간은 시작시간과 끝시간을 포함)
    2. 서버에는 타임아웃이 3초로 적용되어서 처리시간은 0.001 <= T <= 3.000 입니다.
    3. 초당 최대 처리량을 리턴합니다.

    # 문제 해결 방안
    1. 초당 최대 계산량을 구하는 문제이므로, 처리 시작시간과 완료시간을 모두 초단위로 계산합니다.
    2. 시작시간부터 완료시간까지 처리량을 하나씩 늘려 줍니다. 
*/

const solution = (lines = []) => {
  let result = -99;
  let hps = {};
  let start = 99999999,
    fin = -999999;
  lines.forEach((log) => {
    let logArr = log.split(" ");
    let hLen = parseFloat(logArr[2].match(/[.\d]+/g).join(""));
    let finTime = 0,
      startTime = 0;
    logArr[1].split(":").forEach((value, index) => {
      finTime += parseFloat(value) * Math.pow(60, 2 - index);
    });
    startTime = finTime - hLen + 0.001;
    startTime = parseInt(startTime);
    finTime = parseInt(finTime);
    if (fin < finTime) fin = finTime;
    if (start > startTime) start = startTime;
    for (let i = startTime; i <= finTime; i++) {
      if (hps["" + i] === undefined) hps["" + i] = 1;
      else hps["" + i] += 1;
    }
  });
  for (let i = start; i <= fin; i++) {
    if (result < hps["" + i]) result = hps["" + i];
  }
  return result;
};

let example1 = ["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"];
let example2 = ["2016-09-15 01:00:04.002 2.0s", "2016-09-15 01:00:07.000 2s"];

console.log(solution(example1));
console.log(solution(example2));
