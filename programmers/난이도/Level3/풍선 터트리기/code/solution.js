/*
    # 문제 해결 단서
    0. 입력 형식 : a ( n개의 풍선, 1 <= n <= 1000000, n개의 풍선에는 서로 다른 숫자가 써져 있습니다.)
    1. 인접한 풍선 중 한개를 터트리고, 빈 공간이 없게 풍선을 밀착 시킵니다.
    2. 인접한 두 풍선 중에서 번호가 더 작은 풍선을 터트리는 행위는 최대 1번만 가능합니다.
        - 어떤 시점에서 인접한 두 풍선 중 번호가 더 작은 풍선을 터트리면, 그 이후에는 더 큰 풍선들만을 터트릴 수 있습니다.
    3. 어떤 풍선을 최후까지 살아 남을 수도 있지만, 어떤 풍선은 무슨 수를 써도 마지막 까지 남는 것이 불가능할 수도 있습니다.
    4. 위의 규칙대로 터트리기를 진행 했을 때, 최후에 남는 것이 가능한 풍선들의 개수를 반환합니다.
    
    # 문제 해결 방안
    1. 숫자들을 오름차순으로 정렬한 배열을 생성합니다.
    2. 풍선들을 맨 왼쪽부터 하나씩 검사해 나갑니다. 검사를 하는 숫자는 정렬된 배열에서 제거 합니다.
    3. 검사는 현 위치의 풍선을 기준으로 좌우의 최소값들이 현 위치의 수보다 둘다 작은지 확인하는 것입니다.
    4. 좌측의 최소값은 하나씩 진행하며 비교를 통해 얻을 수 있고, 우측의 최소값은 정렬된 배열에서 0번째 위치의 수가 될 것 입니다.

    # 
    방법은 좋은 것 같으나, sorting과 index를 찾고 지우는 과정에서 연산 횟수가 증가하며 런차임에러가 납니다.
    효율성에 대해서 더 고민할 필요가 있습니다.
*/

const solution = (a = []) => {
  let result = 0;

  if (a.length === 1) return 1;

  let sortedA = new Array(...a).sort((v1, v2) => v1 - v2);
  let minL = a[0];
  a.forEach((num, index) => {
    if (index == 0) result += 1;
    else {
      sortedA.splice(
        sortedA.findIndex((value) => value === num),
        1
      );
      if (minL > num) {
        minL = num;
        result += 1;
      } else {
        let minR = sortedA[0];
        if (minL >= num || minR >= num) result += 1;
      }
    }
  });

  return result;
};

let example1 = [9, -1, -5]; //result : 3
let example2 = [-16, 27, 65, -2, 58, -92, -71, -68, -61, -33]; // result : 6

console.log(solution(example1));
console.log(solution(example2));
