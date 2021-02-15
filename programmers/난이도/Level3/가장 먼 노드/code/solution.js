/*
    # 문제 해결 단서
    0. 입력 형식 : n(노드의 개수, 2 ~ 20000), vertex(간선의 정보, 1 ~ 50000, [a,b]=a와 b사이에 간선이 존재한다.)
    1. 1번 노드로 부터 가장 멀리 떨어진 노드의 수를 구합니다.
    
    # 문제 해결 방안
    1. 주어진 간선의 정보를 이용해 그래프를 리스트로 표현합니다.
    2. BFS를 통해 1번 node로 부터 떨어진 거리를 구합니다.
    3. 이미 거리가 구해져 있는 노드의 경우 큐에 넣지않습니다.
    4. 모든 노드에서 1번 노드까지의 거리가 구해지면, 가장 멀리 있는 노드들의 수를 셉니다.

    * https://sarah950716.tistory.com/12 를 참고.
     처음엔 인접 행렬 방식으로 접근하여, 모든 경우를 다 확인하느라 시간이 많이 늘어났습니다.
     인접 리스트 방식을 채택하여, 확실히 연결된 node들 중에서만 판별을 하니 시간이 대폭 감소하였습니다.
*/

const solution = (n = 2, vertexes = []) => {
  let graph = Array(n + 1)
    .fill(0)
    .map((_) => Array());

  let distances = Array(n + 1).fill(0);
  let queue = [];

  const infoObj = (parentnode, node) => {
    return { pNode: parentnode, cNode: node };
  };

  vertexes.forEach((vertex) => {
    graph[vertex[0]].push(vertex[1]);
    graph[vertex[1]].push(vertex[0]);
  });

  graph[1].forEach((node) => {
    let obj = infoObj(1, node);
    queue.splice(0, 0, obj);
  });

  while (distances[0] !== n - 1) {
    const { pNode, cNode } = queue.pop();
    if (distances[cNode] === 0) {
      distances[cNode] = distances[pNode] + 1;
      distances[0] += 1;
      graph[cNode].forEach((node) => {
        if (node !== 1 && distances[node] === 0) {
          let obj = infoObj(cNode, node);
          queue.splice(0, 0, obj);
        }
      });
    }
  }

  let max = 0;
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (distances[i] > max) {
      max = distances[i];
      count = 1;
    } else if (distances[i] === max) count += 1;
  }

  return count;
};

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
); // result : 3
