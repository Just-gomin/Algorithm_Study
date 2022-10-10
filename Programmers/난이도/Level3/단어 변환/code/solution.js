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
    1. words 안에 target이 존재하지 않는 경우, 0을 반환합니다.
    2. words의 단어들 사이에 한단계 변화로 만들어 질 수 있는 경우 간선으로 연결된 그래프를 생성합니다.
    3. begin이 한단계 변화로 될 수 있는 단어들부터 출발하여 BFS를 진행합니다.
    4. target에 도착하면 걸린 단계수를 반환합니다.
    5. 진행할 수 있는 단계 수는 words의 길이입니다. 이를 초과하는 경우, 더이상 BFS를 진행하지 않습니다.
*/
const solution = (begin = "", target = "", words = []) => {
  let steps = 0;
  const wordsNum = words.length;
  const wordLen = begin.length;
  const targIdx = words.indexOf(target);

  if (targIdx === -1) return steps;

  let graph = Array(wordsNum)
    .fill(0)
    .map((_) => []);

  for (let i = 0; i < wordsNum; i++) {
    for (let j = 0; j < wordsNum; j++) {
      if (i !== j) {
        let diff = 0;
        for (let k = 0; k < wordLen; k++) {
          if (words[i][k] !== words[j][k]) diff += 1;
        }
        if (diff <= 1) graph[i].push(j);
      }
    }
  }

  const makeNode = (index = 0, count = 0) => {
    return { index: index, count: count };
  };

  let queue = [];
  words.forEach((word, index) => {
    let diff = 0;
    for (let i = 0; i < wordLen; i++) {
      if (begin[i] !== word[i]) diff += 1;
    }
    if (diff <= 1) queue.splice(0, 0, makeNode(index, 1));
  });

  while (queue.length !== 0) {
    let node = queue.pop();
    if (node.index === targIdx) {
      steps = node.count;
      break;
    }
    if (node.count < wordsNum) {
      graph[node.index].forEach((index) => {
        queue.splice(0, 0, makeNode(index, node.count + 1));
      });
    }
  }

  return steps;
};

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
