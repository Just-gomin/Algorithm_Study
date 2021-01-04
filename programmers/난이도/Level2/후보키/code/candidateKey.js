/*
    # 문제 해결 단서
    1. 후보키의 특성은 유일성과 최소성입니다.
        - 유일성(uniqueness) : 릴레이션에 있는 모든 튜플에 대해 유일하게 식별되어야 한다.
        - 최소성(minimality) : 유일성을 가진 키를 구성하는 속성(Attribute) 중 하나라도 제외하는 경우 유일성이 깨지는 것을 의미한다. 즉, 릴레이션의 모든 튜플을 유일하게 식별하는 데 꼭 필요한 속성들로만 구성되어야 한다.
    2. 후보키는 1개의 속성만이 아니라 2개 이상의 조합으로 구성될 수 있습니다.

    # 문제 해결 방안
    1. 1개의 속성 자체만으로도 후보키가 되는 경우와, 2가지 이상의 속성의 조합이 후보키가되는 경우를 나누어 생각합니다.
    2. 2개 이상의 속성의 조합이 후보키가 되는 경우, (2 ~ 해당 조합의 속성 수 -1)개의 속성 조합으로 된 후보키들과 비교해 최소성을 만족하는지 확인합니다.
*/

// nCr
const get_nCr = (selectNum = 1, data = []) => {
  let result = [];
  if (selectNum === 1) return data.map((value) => [value]);
  else if (selectNum === data.length) return [data];
  else if (selectNum <= 0) return [];

  data.forEach((value, index, arr) => {
    const rest = arr.slice(index + 1);
    const combinations = get_nCr(selectNum - 1, rest);
    const attached = combinations.map((combination) => [value, ...combination]);
    result.push(...attached);
  });

  return result;
};

const solution = (relation = []) => {
  let result = [];
  let ntuple = relation.length,
    nattribute = relation[0].length;
  let remainIDX = [];

  // 1개 속성이 후보키가 되는 경우
  for (let i = 0; i < nattribute; i++) {
    let tempSet = relation.map((tuple) => tuple[i]);
    let checkSet = new Set(tempSet);
    if (checkSet.size === ntuple) result.push([i]);
    else remainIDX.push(i);
  }

  // 2개 이상의 속성이 후보키가 되는 경우
  for (let itr = 2; itr <= remainIDX.length; itr++) {
    let minimalityChecker = result.filter((candidate) => candidate.length >= 2);
    let tempCandidates = [];
    let combinations = get_nCr(itr, remainIDX);

    combinations.forEach((combination) => {
      let tempSet = [];
      relation.forEach((tuple) => {
        let checker = "";
        combination.forEach((attr) => (checker += tuple[attr]));
        tempSet.push(checker);
      });

      // 해당 조합이 후보키가 되는지 확인.
      let checkSet = new Set(tempSet);
      if (checkSet.size === ntuple) {
        // 후보키가 최소성을 만족하는지 확인
        let minimality = true;
        minimalityChecker.forEach((candidate) => {
          let counter = 0;
          candidate.forEach((attr) => {
            if (combination.findIndex((value) => value === attr) !== -1)
              counter++;
          });
          if (counter == candidate.length) minimality = false;
        });
        if (minimality) tempCandidates.push(combination);
      }
    });
    result.push(...tempCandidates);
  }
  return result.length;
};

let example = [
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
];

console.log(solution(example)); // result = 2
