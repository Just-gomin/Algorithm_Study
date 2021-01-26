/*
    # 문제 해결 단서
    0. 입력 형식 : a ( n개의 풍선, 1 <= n <= 1000000, n개의 풍선에는 서로 다른 숫자가 써져 있습니다.)
    1. 인접한 풍선 중 한개를 터트리고, 빈 공간이 없게 풍선을 밀착 시킵니다.
    2. 인접한 두 풍선 중에서 번호가 더 작은 풍선을 터트리는 행위는 최대 1번만 가능합니다.
        - 어떤 시점에서 인접한 두 풍선 중 번호가 더 작은 풍선을 터트리면, 그 이후에는 더 큰 풍선들만을 터트릴 수 있습니다.
    3. 어떤 풍선을 최후까지 살아 남을 수도 있지만, 어떤 풍선은 무슨 수를 써도 마지막 까지 남는 것이 불가능할 수도 있습니다.
    4. 위의 규칙대로 터트리기를 진행 했을 때, 최후에 남는 것이 가능한 풍선들의 개수를 반환합니다.
    
    # 문제 해결 방안
    1. 양쪽 끝의 숫자들은 항상 끝까지 살아 남을 수 있습니다.
    2. 양쪽 끝의 숫자들 중 더 큰 쪽에서 한칸 씩 옆으로 옮기며, 최소값들을 갱신하며 판별합니다.
    3. 좌우측 끝의 최솟 값이라 판단되는 숫자들 중 더 큰 숫자보다 작으면 해당 숫자는 살아남을 수 있고 좌우측 끝의 최소 값들 중 큰것을 갱신해야 정확한 판별이 되기 때문에 더 큰 쪽에서 옆으로 옮겨갑니다.

    # 참고
    https://programmers.co.kr/questions/13657
*/

const solution = (a = []) => {
  if (a.length === 1) return 1;

  let result = 1;

  let lmin = a[0];
  let rmin = a[a.length - 1];
  let l = 0;
  let r = a.length - 1;

  while (l < r) {
    if (lmin > rmin) {
      l += 1;
      if (a[l] <= lmin || a[l] <= rmin) result += 1;
      if (a[l] < lmin) lmin = a[l];
    } else {
      r -= 1;
      if (a[r] <= lmin || a[r] <= rmin) result += 1;
      if (a[r] < rmin) rmin = a[r];
    }
  }

  return result;
};

let example1 = [9, -1, -5]; //result : 3
let example2 = [-16, 27, 65, -2, 58, -92, -71, -68, -61, -33]; // result : 6

console.log(solution(example1));
console.log(solution(example2));
