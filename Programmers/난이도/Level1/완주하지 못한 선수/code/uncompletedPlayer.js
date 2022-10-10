/*
    #문제 설명
    수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
    단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

    마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

    # 제한사항
    - 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
    - completion의 길이는 participant의 길이보다 1 작습니다.
    - 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
    - 참가자 중에는 동명이인이 있을 수 있습니다.

    # 입출력 예
    participant	|| completion || return
    [leo, kiki, eden] || [eden, kiki] || leo
    [marina, josipa, nikola, vinko, filipa] || [josipa, filipa, marina, nikola] || vinko
    [mislav, stanko, mislav, ana] || [stanko, ana, mislav] || mislav

*/

const solution = (participant, completion) => {
  // 참가자가 한명인 경우 해당 참가자를 바로 반환
  if (participant.length === 1) {
    return participant[0];
  }
  // 참가자와 완주자 이름을 통해 정렬
  participant.sort();
  completion.sort();

  //참가자와 완주자의 마지막 이름이 다를 경우 참가자를 반환
  if (
    participant[participant.length - 1] !== completion[completion.length - 1]
  ) {
    return participant[participant.length - 1];
  }

  // 참가자와 완주자를 차례로 비교하다, 서로 다른 이름이 나오는 경우 그때의 참여자 반환
  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
};
