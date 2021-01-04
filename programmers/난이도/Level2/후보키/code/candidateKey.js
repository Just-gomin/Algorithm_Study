/*
    # 문제 해결 단서
    1. 후보키의 특성은 유일성과 최소성입니다.
        - 유일성(uniqueness) : 릴레이션에 있는 모든 튜플에 대해 유일하게 식별되어야 한다.
        - 최소성(minimality) : 유일성을 가진 키를 구성하는 속성(Attribute) 중 하나라도 제외하는 경우 유일성이 깨지는 것을 의미한다. 즉, 릴레이션의 모든 튜플을 유일하게 식별하는 데 꼭 필요한 속성들로만 구성되어야 한다.
    2. 후보키는 1개의 속성만이 아니라 2개 이상의 조합으로 구성될 수 있습니다.

    # 문제 해결 방안
    1. 후보키를 구성하는 속성의 수를 하나씩 늘려가며 확인합니다.
    2. 1개의 속성으로 후보키를 검사하는 방법은 해당 속성의 값을 튜플들로 부터 추출하고, Set으로 만듭니다. 해당 Set의 길이와 튜플의 수가 동일하다면 해당 속성은 후보키가 될 수 있습니다.
    3. 후보키가 되지 못한 속성들을 추려서 조합합니다.
    4. 생성한 조합의 속성들로 후보키가 되는지 확인합니다.
    5. 후보키가 되지 못한 속성들로 3,4를 반복합니다.
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
  for (let i = 0; i < nattribute; i++) remainIDX.push(i);

  for (let i = 1; i <= nattribute; i++) {
    let combinations = get_nCr(i, remainIDX);
    combinations.forEach((combination) => {
      let tempSet = [];
      relation.forEach((tuple) => {
        let checker = "";
        combination.forEach((attr) => (checker += tuple[attr]));
        tempSet.push(checker);
      });
      let checkSet = new Set(tempSet);
      if (checkSet.size === ntuple) {
        combination.forEach(
          (attr) => (remainIDX = remainIDX.filter((value) => value != attr))
        );
        result.push(combination);
      }
    });
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
