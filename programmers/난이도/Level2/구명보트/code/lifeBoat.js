/*
    // # 효울성 0점
const solution = (people, limit) => {
  people.sort((a, b) => b - a);

  let counter = 0;
  let index = 0;

  while (people.length !== 0) {
    let curr = people[index];
    let partIndex = -1;
    for (let i = index + 1; i < people.length; i++) {
      if (people[i] <= limit - curr) {
        partIndex = i;
        break;
      }
    }
    if (partIndex !== -1) people.splice(partIndex, 1);
    people.splice(index, 1);
    counter++;
  }
  return counter;
};
*/

const solution = (people, limit) => {
  let answer = 0;
  let counter = new Array(241).fill(0);

  people.map((value, index) => counter[value]++);

  // 사람들의 최대 몸무게 부터 보트 수 구하기 시작.
  for (let weight = 240 <= limit ? 240 : limit; weight > 39; weight--) {
    // 해당 몸무게의 사람이 없으면 해당 루프 종료 후 다음 루프 진행.
    if (counter[weight] === 0) continue;

    // 해당 몸무게와 같이 탈수 있는 몸무게의 최대치 계산
    let remain = limit - weight;
    // 만약 같이 탈 수 있는 몸무게가 40kg 미만이면 해당 몸무게의 사람들은 혼자 탈 수 밖에 없기에 보트 수를 해당 몸무게의 사람 수 만큼 추가.
    if (remain < 40) {
      answer += counter[weight];
      counter[weight] = 0;
    }
    // 같이 탈 수 있는 몸무게가 범위 내에 존재하는 사람들에 대해서 보트 수 계산
    else {
      // 해당 몸무게와 같이 탑승할 수 있는 사람들에 대해서 같이 탑승할 때의 보트 수 구하기.
      while (counter[weight] !== 0 && remain > 39) {
        if (counter[remain] !== 0) {
          // 최대치와 해당 몸무게가 동일한 경우 같은 무게의 사람들 끼리 탑승 진행.
          if (remain === weight) {
            answer += (counter[weight] - (counter[weight] % 2)) / 2;
            counter[weight] = counter[weight] % 2;
          } else if (counter[weight] >= counter[remain]) {
            answer += counter[remain];
            counter[weight] -= counter[remain];
            counter[remain] = 0;
          } else {
            counter[remain] -= counter[weight];
            answer += counter[weight];
            counter[weight] = 0;
          }
        }
        remain--;
      }
      if (counter[weight] !== 0) {
        answer += counter[weight];
        counter[weight] = 0;
      }
    }
  }
  return answer;
};

const solution = (people, limit) => {
  people.sort((a, b) => a - b);
  let index = 0;
  for (index = 0, j = people.length - 1; index < j; j--) {
    if (people[index] + people[j] <= limit) index++;
  }
  return people.length - index;
};

console.log(solution([40, 40, 80], 160));
