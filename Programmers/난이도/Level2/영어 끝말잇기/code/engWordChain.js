/*
    # 문제 해결 단서
    1. 사람의 수와 끝말잇기를 진행한 기록이 주어집니다.
    2. 이전에 나왔던 단어를 중복해서 말할 때, 연속하는 단어들의 알파벳 연결 점이 다른 경우(--a, b-- => 탈락) 탈락을 하게됩니다.
    3. 사람의 수(n)는 2~10, 단어의 수(words.length)는 n~100 입니다.
        
    # 문제 해결 방안
    1. 알파벳의 수만큼 배열을 생성합니다.
    2. words.map((word,index))를 통해 단어의 첫 알파벳에 따라 분류를 진행합니다.
    3. 이전에 나오지 않았다면 push, 이전에 나온 단어라면 return 값을 계산합니다.
    4. index 값에 1을 더한 뒤 n으로 나눈 나머지 값을 통해 몇번째 사람인지 알아냅니다.
    5. index+1을 n으로 나누었을 때 몫을 구하고 1을 더해서 몇번째 차례였는지 구합니다.
    
*/

const solution = (n = 0, words = []) => {
  let stack = [];
  for (let i = 0; i < 26; i++) stack.push([]);
  let order = 0,
    round = 0;
  let lastAlpha = "";

  const getFailure = (index) => {
    order = (index % n) + 1;
    round = Math.floor(index / n) + 1;
  };

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (i == 0) {
      stack[word.charCodeAt(0) - "a".charCodeAt(0)].push(word);
      lastAlpha = word.charAt(word.length - 1);
    } else {
      if (lastAlpha == word.charAt(0)) {
        if (stack[word.charCodeAt(0) - "a".charCodeAt(0)].includes(word)) {
          getFailure(i);
          break;
        } else {
          stack[word.charCodeAt(0) - "a".charCodeAt(0)].push(word);
          lastAlpha = word.charAt(word.length - 1);
        }
      } else {
        getFailure(i);
        break;
      }
    }
  }
  return [order, round];
};

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
