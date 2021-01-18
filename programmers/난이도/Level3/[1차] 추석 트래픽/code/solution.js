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
    2. 최소 시간 단위가 0.001s인데 이를 시작 시간과 완료시간에 모두 1000을 곱해 1ms 단위로 끝나게 합니다.
    3. 문제에서 요구하고 있는 결과 값은 초당 최대 계산량으로, 한 트래픽에 대해서 계산이 끝나더라도 다음 트래픽 처리 까지 걸리는 시간이 1초 내라면 수를 세어야합니다. 따라서 끝나는 시간에 999ms를 더해서 계산을 진행합니다.
    4. 시작 시간은 Start라는 상태, 끝나는 시간은 END라는 상태를 부여하고, 시간을 오름차순으로 정렬 시킵니다. 단, 시간이 동일한 경우에 한해서는 시작, 끝 순으로 정렬합니다.
    
    # 솔루션 참고
    - Link : https://softworking.tistory.com/379 
*/

const solution = (lines = []) => {
  let result = 0;
  let start = -1,
    fin = 1;
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
    newLogs.push([startTime, start], [finTime + 999, fin]);
  });

  // newLogs 정렬
  newLogs.sort((log1, log2) => {
    if (log1[0] !== log2[0]) {
      return log1[0] - log2[0];
    }
    return log1[1] - log2[1];
  });

  // 최대치 측정
  let works = 0;
  for (let i = 0; i < newLogs.length; i++) {
    if (newLogs[i][1] === start) works += 1;
    else works -= 1;

    if (works > result) result = works;
  }
  return result;
};

let example1 = ["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"];
let example2 = ["2016-09-15 01:00:04.002 2.0s", "2016-09-15 01:00:07.000 2s"];

console.log(solution(example1));
console.log(solution(example2));
