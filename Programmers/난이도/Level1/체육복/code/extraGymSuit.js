/*
  # 문제해결
  - 여벌의 의미는 총 2벌을 가져왔다는 의미이다.
  - 체육 수업을 들을 수 있는 최대 학생 수는 n명이다.
  - 도난 당한 학생이 여벌을 가진 학생인지 확인한다.
  - 도난 당한 학생이 여벌을 가지지 않은 학생이라면 앞 뒤 번호의 학생이 여벌을 보유한 학생인지 확인한다.
  - 여벌을 보유한 학생이 도난을 당하지 않았는지 확인한다.
  - 앞 뒤 번호의 학생이 둘다 두벌을 가지고 있는 경우에는 앞 학생의 체육복을 빌린다. 

*/

// # Solution1
const solution = (n, lost = [], reserve = []) => {
  // 초기에 체육 수업을 받을 수 있는 학생 수 는 n명
  let answer = n;

  // 도난 당한 학생과 여벌 보유 학생 번호 정렬
  lost.sort();
  reserve.sort();

  // 검사 진행
  for (let index = 0; index < lost.length; index++) {
    let lstd = lost[index]; // 도난 당한 학생의 번호

    let prelstd = lstd - 1 !== 0 ? lstd - 1 : null; // 도난 당한 학생 앞 번호
    let afterlstd = lstd + 1 !== n + 1 ? lstd + 1 : null; // 도난 당한 학생 뒷 번호

    // 도난 당한 학생이 여벌을 소지 하지 않았을 때만 아래 과정 진행
    if (!reserve.includes(lstd)) {
      if (
        prelstd !== null &&
        reserve.includes(prelstd) &&
        !lost.includes(prelstd)
      ) {
        reserve.splice(reserve.indexOf(prelstd), 1);
      } else if (
        afterlstd !== null &&
        reserve.includes(afterlstd) &&
        !lost.includes(afterlstd)
      ) {
        reserve.splice(reserve.indexOf(afterlstd), 1);
      } else {
        answer--;
      }
    }
  }

  return answer;
};
