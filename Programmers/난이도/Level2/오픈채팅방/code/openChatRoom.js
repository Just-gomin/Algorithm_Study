/*
    # 문제 해결 단서
    1.채팅방의 출입과 닉네임 변경에 따른 기록을 관리합니다.
    2. 첫 단어는 Enter, Leave, Change입니다.
    3. 닉네임은 중복이 가능하기 때문에 uid를 이용해 구분합니다.
    
    # 문제 해결 방안
    1. 주어진 record를 최초 확인 시, 출입 기록을 따로 분류합니다. 
        1) Enter로 부터 uid와 닉네임을 추출합니다.
        2) Change로 부터 uid에 해당하는 닉네임을 변경합니다.
    2. 1의 과정이 끝나면 추출한 출입 기록과 닉네임 객체를 가지고 형식에 맞추어 기록을 변환하여 반환합니다.
*/

const solution = (record) => {
  let result = [];
  let ioList = [],
    nic = {};

  record.map((value) => {
    let temp = value.split(" ");
    if (temp[0] == "Enter") {
      nic[temp[1]] = temp[2];
      ioList.push(temp);
    } else if (temp[0] == "Change") nic[temp[1]] = temp[2];
    else ioList.push(temp);
  });

  ioList.map((value) => {
    value[0] == "Enter"
      ? result.push(`${nic[value[1]]}님이 들어왔습니다.`)
      : result.push(`${nic[value[1]]}님이 나갔습니다.`);
  });

  return result;
};

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
