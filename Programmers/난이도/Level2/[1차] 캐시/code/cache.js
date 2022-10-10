/*
    # 문제 해결 단서
    1. LRU 설명 : https://gomguard.tistory.com/115
    2. 페이지 교체 알고리즘 중 LRU는 접근한지 오래된 파일부터 갱신하는 방법입니다.
    3. cache의 크기가 정해져 있으므로 cache의 크기를 벗어나서는 안됩니다.
    4. cache 안에 해당 data가 있는 경우 hit, 없는 경우가 miss입니다.
    
    # 문제 해결 방안
    1. cacheSize가 0인 비정상적인 경우는 바로 cities의 크기에 miss의 실행 시간인 5를 곱해서 결과 값을 갱신합니다.
    2. 정상적인 경우 cities의 크기만큼 반복문을 시행하게 됩니다.
    3. 도시의 이름은 대소문자를 구분하지 않고 탐색을 진행해야하기에 반복 실행시 초기에 소문자로 바꿔줍니다.
    4. cache에서 해당 도시의 이름이 있는지 확인합니다.
        4-1. 해당 도시 이름이 없는 경우 현재 캐쉬가 가득 찬 상태라면 오래된 도시이름을 삭제하고 현재 도시 이름을 추가합니다. 실행 시간은 5를 추가합니다.
        4-2. 해당 도시 이름이 있는 경우 해당 도시의 캐쉬 내 위치에서 삭제하고 처음으로 추가합니다. 실행 시간은 1을 추가합니다.
*/

const solution = (cacheSize, cities) => {
  let runtime = 0;
  if (cacheSize == 0) runtime = cities.length * 5;
  else {
    let cache = [];
    cities.map((city) => {
      city = city.toLowerCase();
      let idx = cache.findIndex((value) => value == city);
      if (idx == -1) {
        if (cache.length == cacheSize) cache.pop();
        runtime += 5;
      } else {
        cache.splice(idx, 1);
        runtime += 1;
      }
      cache.splice(0, 0, city);
    });
  }
  return runtime;
};
