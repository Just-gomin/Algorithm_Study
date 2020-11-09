/*
    # 문제 해결
    - answer의 길이가 0이면 단어를 넣는다.
    - anwer에 단어들이 들어있는 경우 answer의 마지막 단어와 비교
    - 마지막 단어와 비교했을 때 후순위 일 경우 answer에 단어 삽입.
    - 아닌 경우 중간 단어와 비교. 중간 단어와 후순위 비교후 그의 결과에 따라 끝단어, 첫단어, 중간단어의 index들을 갱신하며 적절한 위치 발견시 splice 메소드를 이용해 단어 삽입.
*/

// # 타인의 답안 참고
const solution = (strings = [], n = 0) => {
  let answer = [];
  answer = strings.sort((word1, word2) =>
    word1[n] === word2[n]
      ? word1.localeCompare(word2)
      : word1[n].localeCompare(word2[n])
  );
  return answer;
};

const ans1 = solution(["sun", "bed", "car"], 1);
console.log(ans1);

const ans2 = solution(["abce", "abcd", "cdx"], 2);
console.log(ans2);
