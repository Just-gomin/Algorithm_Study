/*
    # 문제 해결 단서
    0. 입력형식 : n(컴퓨터의 개수, 1~200), computers(각 컴퓨터가 0~n-1로 표현되었을 때, [i][j]로 연결을 표현합니다) 
    1. i와 j가 아무리 멀리 떨어져있어도, 다른 컴퓨터들을 통해 연결되었다면 연결된 것으로 네트워크를 형성합니다.
    2. 한 컴퓨터에서 연결된 모든 컴퓨터들을 탐색해야하므로 BFS 알고리즘을 이용하고, 자료구조는 queue를 택하겠습니다.
    
    # 문제 해결 방안
    1. 컴퓨터의 수만큼의 크기를 갖는 배열을 생성합니다(0으로 초기화). 해당 배열은 각 컴퓨터가 소속된 네트워크를 저장합니다.
    2. queue 변수를 생성합니다. 
        queue는 해당 컴퓨터들에 연결된 컴퓨터들을 반복문이 진행하는 동안 담고 있을 배열이며, 해당 컴퓨터에 연결된 모든 컴퓨터들을 담았다면, 해당 컴퓨터는 queue에서 빠져나오게 됩니다.
        queue에 담을 때는 자신의 index보다 높은 컴퓨터들을 담도록 합니다.(낮은 index부터 탐색을 진행하기 때문에, 최대한 중복 검사를 줄이고자 함입니다.)
    3. net 변수를 생성합니다.
        net 변수는 queue가 빌 때마다 증가하게되는 변수로, 해당 컴퓨터가 소속되는 network를 나타냅니다.( 1이상 )
    4. 모든 컴퓨터에 대하여 연결된 컴퓨터들을 찾도록 반복하여 탐색합니다.
*/

const solution = (n = 0, computers = []) => {
  if (n == 1) return 1;

  let networks = [];
  let net = 0;
  let queue = [];

  for (let i = 0; i < n; i++) networks.push(0);

  for (let i = 0; i < n; i++) {
    if (networks[i] == 0) {
      net += 1;
      queue.push(i);
      while (queue.length != 0) {
        let com = queue.pop();
        networks[com] = net;
        for (let j = 0; j < n; j++)
          if (computers[com][j] === 1 && networks[j] === 0)
            queue.splice(0, 0, j);
      }
    }
  }

  return net;
};
