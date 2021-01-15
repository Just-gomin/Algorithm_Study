/*
    # 문제 해결 단서
    0. 입력 형식 : lines = ["S(응답완료시간) T(처리시간)"로 된 로그 N개] (1 <= N <= 2000) , 응답완료시간 S를 기준으로 오름차순으로 정렬된 상태입니다.
        - S : 2016-09-15 hh:mm:ss.sss 의 형식
        - T : 0.1s, 0.312s, 2s 와 같이 최대 소수점 셋째 자리까지 기록하며 뒤에는 초를 의미하는 s로 끝납니다.
    1. 예를 들어, 로그 문자열 2016-09-15 03:10:33.020 0.011s은 2016년 9월 15일 오전 3시 10분 **33.010초**부터 2016년 9월 15일 오전 3시 10분 **33.020초**까지 **0.011초** 동안 처리된 요청을 의미합니다. (처리시간은 시작시간과 끝시간을 포함)
    2. 서버에는 타임아웃이 3초로 적용되어서 처리시간은 0.001 <= T <= 3.000 입니다.
    3. 초당 최대 처리량을 리턴합니다.

    # 문제 해결 방안
    1. 각 로그들을 통해 시작 시간과 완료 시간을 계산하고 이를 배열로 묶어 새로운 로그 배열을 생성합니다. 
    2. 최소 시간 단위가 0.001s인데 이를 시작 시간과 완료시간에 모두 1000을 곱해 1s 단위로 끝나게 합니다.
    3. 1000 단위 씩 진행되는 반복분을 통해 해당 1000단위 동안 처리되는 트래픽의 수를 세서 최대 값을 산출합니다. 
*/

const solution = (lines = []) => {
  let result = 0;
  let start = 9999999,
    fin = -9999999;
  let newLogs = [];

  // 시작 시간과 완료 시간을 담은 새로운 로그 생성
  lines.forEach((log) => {
    let logArr = log.split(" ");
    let hLen = parseFloat(logArr[2].match(/[.\d]+/g).join("")) * 1000;
    let finTime = 0,
      startTime = 0;
    logArr[1].split(":").forEach((value, index) => {
      finTime += parseFloat(value) * Math.pow(60, 2 - index) * 1000;
    });
    startTime = finTime - hLen + 1;
    if (fin < finTime) fin = finTime;
    if (start > startTime) start = startTime;
    newLogs.push([startTime, finTime]);
  });

  // 1초 단위로 해당 구간에서 처리 중인 트래픽량을 세서 최대값을 계산
  for (let s = start; s <= fin - 999; s += 1) {
    let f = s + 999;
    let count = 0;
    newLogs.forEach((log) => {
      if (s <= log[0] && log[0] <= f) count += 1;
      else if (s <= log[1] && log[1] <= f) count += 1;
    });
    if (result < count) result = count;
  }
  return result;
};

let example1 = ["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"];
let example2 = ["2016-09-15 01:00:04.002 2.0s", "2016-09-15 01:00:07.000 2s"];

console.log(solution(example1));
console.log(solution(example2));
