/*
    # 문제 풀이
    1. x 좌표를 입력해 대각선이 지나는 y좌표보다 낮은 곳에 위치한 사각형들을 센다.
    2. 사각형의 개수는 (W-X)* Math.floor(H/W) 이다.
    3. 계산된 사각형의 수에 2를 곱해 반환한다. 
*/
const solution = (W, H) => {
  let count = 0;
  for (let x = 1; x < W; x++) {
    count += Math.floor((H * x) / W);
  }
  return 2 * count;
};

console.log(solution(4, 5));
