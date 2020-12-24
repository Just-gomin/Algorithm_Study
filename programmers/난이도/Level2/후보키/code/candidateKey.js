/*
    # 문제 해결 단서
    1. 후보키의 특성은 유일성과 최소성입니다.
        - 유일성(uniqueness) : 릴레이션에 있는 모든 튜플에 대해 유일하게 식별되어야 한다.
        - 최소성(minimality) : 유일성을 가진 키를 구성하는 속성(Attribute) 중 하나라도 제외하는 경우 유일성이 깨지는 것을 의미한다. 즉, 릴레이션의 모든 튜플을 유일하게 식별하는 데 꼭 필요한 속성들로만 구성되어야 한다.
    2. 후보키는 1개의 속성만이 아니라 2개 이상의 조합으로 구성될 수 있습니다.

    # 문제 해결 방안
    1. 속성 1개로 후보키 확인
        해당 인덱스의 값을 array에 넣고 Set을 통해서 고유값만을 남긴 뒤 튜플의 수와 비교.(유일성)
    2. 속성 n개로 후보키 확인
        1) 위 1과정에서 후보키가 되지 못한 속성들에 대한 조합을 구합니다.(최소성)
        2) 1)에서 구한 조합들을 이용해 해당 인덱스의 값들을 string화하여 array에 넣고 Set을 통해서 고유값을 남긴 뒤 튜플의 수와 비교합니다.(유일성)
*/

const solution = (relation = []) => {
  let result = [];
  let ntuple = relation.length(),
    nattribute = relation[0].length();
  let remainIDX = [];
  for (let i = 0; i < nattribute; i++) remainIDX.push(i);

  // attr 1개 후보키
  remainIDX.map((attr) => {
    let checker = [];
    relation.map((tuple) => {
      checker.push(tuple[attr]);
    });
    let unique = new Set(checker);
    if (unique.length() == ntuple) {
      result.push(attr);
      remainIDX.filter((value) => value != attr);
    }
  });

  return result.length();
};
