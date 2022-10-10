/*
    # 문제 해결 단서
    0. 입력 형식 : routes(차량의 이동경로, 각 원소는 [진입 지점, 진출 지점]으로 구성)
    1. 진입 지점과 진출 지점 사이에 최소한의 카메라를 설치해 차량들을 감시하도록 합니다.
    2. 진입지점, 진출지점은 -30000 이상 30000이하입니다.
    
    # 문제 해결 방안
    1. 차량의 경로 배열을 진출점을 기준으로 내림차순 정렬 시킵니다.
    2. 초기 카메라의 위치는 routes[0][0] 이라고 할 때, 차량들의 경로를 하나씩 검사합니다.
    3. 해당 구간 내에 카메라가 존재하지 않는 경우 해당 구간의 진입점에 카메라를 이동하고 필요한 카메라의 수를 하나 증가 시킵니다.
*/

const solution = (routes = []) => {
  routes.sort((a, b) => b[0] - a[0]);
  let answer = 1;
  let cam = routes[0][0];
  routes.forEach((route) => {
    if (!(route[0] <= cam && cam <= route[1])) {
      cam = route[0];
      answer += 1;
    }
  });
  return answer;
};
