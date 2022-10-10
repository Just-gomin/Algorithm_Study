function solution(maps = [[]]) {
  let n = maps.length;
  let m = maps[0].length;

  let queue = [];
  let diff = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  queue.push([0, 0]);

  // BFS
  while (queue.length > 0) {
    let v = queue.splice(0, 1);
    let x = v[0][0];
    let y = v[0][1];

    for (let d of diff) {
      let nx = x + d[0];
      let ny = y + d[1];

      // 다음 갈 좌표가 유효한 영역내에 있는지 확인
      if (!(0 <= nx && nx < n) || !(0 <= ny && ny < m)) {
        continue;
      }

      // 이미 방문한 좌표인지 혹은 벽인지 확인
      if (maps[nx][ny] != 1) {
        continue;
      }

      // 다음 갈 좌표가 목적지 이면 함수 종료 및 경로 길이 반환
      if (nx == n - 1 && ny == m - 1) {
        return maps[x][y] + 1;
      }

      // 경로 길이 갱신
      maps[nx][ny] = maps[x][y] + 1;

      // 다음 좌표 Queue에 삽입
      queue.push([nx, ny]);
    }
  }

  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
