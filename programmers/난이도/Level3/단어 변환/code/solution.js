/*
    # 문제 해결 단서
    0. 입력 형식 : begin(시작 단어), target(변환 목표 단어), words(단어 배열, 길이 3~50, 중복되는 단어 없음)
        - 단어들은 알파벳 소문자로만 이루어져 있으며, 단어의 길이는 3~10이하이며 모든 단어의 길이는 동일합니다.
        - begin과 target은 같지 않습니다.
    1. begin으로 부터 target까지 단어를 변환합니다.
    2. 단어는 한 단계를 거칠 때마다 1글자씩 변환 가능합니다.
    3. words에 있는 단어로만 변환 가능합니다.
    4. 최소 몇 단계를 거쳐 begin이 target으로 변환될 수 있는지를 반환합니다.
    5. 반환 할 수 없는 경우, 0을 반환합니다.
    
    # 문제 해결 방안
    1. 현재 단어와 words의 단어들 중 문자가 하나만 변경되는 경우를 추출합니다.
    2. 해당 단어들 중 target이 있다면, 현재 까지 거친 단계의 수를 반환합니다.
    3. target이 존재하지 않는다면, 추출해 놓은 단어들 각각을 이용해서 위의 과정을 재 진행합니다. 
*/
const solution = (begin = "", target = "", words = []) => {
  let answer = 0;
  if (words.indexOf(target) === -1) return answer;

  const maxCount = words.length + 1;

  const change = (now = "", count = 0) => {
    if (count > maxCount) return 9999;
    else if (now === target) return count;

    let candi = [];
    words.forEach((word) => {
      let diff = 0;
      for (let i = 0; i < word.length; i++) {
        if (now[i] !== word[i]) diff += 1;
      }
      if (diff <= 1) candi.push(word);
    });

    if (candi.indexOf(target) !== -1) return count + 1;
    else {
      let min = 9999;
      candi.forEach((word) => {
        let result = change(word, count + 1);
        if (min > result) min = result;
      });
      return min;
    }
  };

  answer = change(begin, 0);
  return answer;
};
