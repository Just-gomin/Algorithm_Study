/*
    # 문제 해결 단서
    0. 입력 형식 : n(노드의 개수, 2 ~ 20000), vertex(간선의 정보, 1 ~ 50000, [a,b]=a와 b사이에 간선이 존재한다.)
    1. 1번 노드로 부터 가장 멀리 떨어진 노드의 수를 구합니다.
    
    # 문제 해결 방안
    1. 주어진 간선의 정보를 이용해 그래프를 행렬로 표현합니다.
    2. 플로이드 알고리즘을 이용해 각 node로 부터 1번(index=0)까지의 최소 거리를 계산합니다.
    3. 거리가 가장 먼 노드들의 수를 셉니다.

    * 플로이드 알고리즘의 경우 node의 수가 늘어남에 따라 연산량이 많아져, 실행이 중단되었습니다. 다익스트라 알고리즘으로 접근하도록 합니다.
*/

const solution = (n = 2, vertexes = []) => {
  let distances = Array(n)
    .fill(0)
    .map((_) => Array(n).fill(9999));

  for (let i = 0; i < n; i++) distances[i][i] = 0;
  vertexes.forEach((vertex) => {
    distances[vertex[0] - 1][vertex[1] - 1] = 1;
    distances[vertex[1] - 1][vertex[0] - 1] = 1;
  });

  for (let stop = 0; stop < n; stop++) {
    for (let start = 0; start < n; start++) {
      for (let destination = 0; destination < n; destination++) {
        if (
          distances[start][destination] >
          distances[start][stop] + distances[stop][destination]
        )
          distances[start][destination] =
            distances[start][stop] + distances[stop][destination];
      }
    }
  }
  let max = -9999;
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (distances[i][0] != 9999 && distances[i][0] > max) {
      max = distances[i][0];
      count = 1;
    } else if (distances[i][0] == max) {
      count += 1;
    }
  }
  return count;
};
