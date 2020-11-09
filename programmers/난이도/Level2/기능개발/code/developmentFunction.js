/*
    // # 문제해결
    1. progresses와 speeds를 통해서 개발 완료까지의 일 수를 계산합니다.
    2. 기준일 수를 정하고 기준일 수보다 작거나 같은 일수들이 나오면 다음 배포될 기능 수를 하나씩 늘입니다.
    3. 큰 수가 나오면 기준일 수를 변경하고 배포될 기능 수 가 0이 아니라면 결과에 추가합니다.
    4.  마지막 인덱스까지 진행했다면 count를 바로 결과에 추가합니다.
*/

const solution = (progresses, speeds) => {
  let result = [];
  let standard = 0,
    count = 0;
  progresses.map((value, index) => {
    let workDays = Math.ceil((100 - value) / speeds[index]);

    if (workDays > standard) {
      if (count !== 0) result.push(count);
      count = 1;
      standard = workDays;
    } else {
      count += 1;
    }

    if (index === progresses.length - 1) result.push(count);
  });

  return result;
};

console.log(solution([93, 30, 55], [1, 30, 5]));
