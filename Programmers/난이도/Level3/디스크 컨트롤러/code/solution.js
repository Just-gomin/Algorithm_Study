/*
    # 문제 해결 단서
    0. 입력 형식 : jobs(각 원소가 [요청시각, 작업 소요 시간]의 구성으로, 1~500의 길이)
    1. 요청 시각은 0~1000, 작업 소요 시간은 1~1000
    2. 하드 디스크가 작업을 처리하고 있지 않을 때는, 먼저 들어온 요청 순으로 작업을 진행합니다.
    3. 요청부터 처리까지 걸린시간의 평균이 짧도록 배치합니다.
    4. 작업 소요시간이 긴 것을 먼저 처리하면, 대기 중인 작업들의 대기 시간이 길어지므로 소요 시간이 짧은 것부터 처리를 진행합니다.
    
    # 문제 해결 방안
    1. 작업들을 요청시간에 따라 오름차순으로 정렬합니다.
    2. 반복문을 진행합니다.
    3. 시간이 흐르며 정렬된 작업들이 들어오면 minimum heap을 생성합니다.
    4. 진행 중인 작업이 종료되면, minimum heap의 최상위에 위치한 작업을 진행합니다.
    5. 모든 작업들에 대하여 진행 중인 작업이 종료될 때, 요청시각과 현재시간 사이의 차를 구해 더합니다.
    6. 모든 작업들에 대해 처리가 완료되면 반복문을 종료합니다.
    7. 작업 완료까지 걸린 시간들을 더한 값들을 작업의 수로 나누어 반환합니다.
*/

const solution = (jobs = []) => {
  let restJobs = jobs.sort((a, b) => {
    if (a[0] != b[0]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let jobsNum = jobs.length;
  let minHeap = [];

  const exchangeNode = (a, b) => {
    let temp = [minHeap[a][0], minHeap[a][1]];
    minHeap[a][0] = minHeap[b][0];
    minHeap[a][1] = minHeap[b][1];
    minHeap[b][0] = temp[0];
    minHeap[b][1] = temp[1];
  };

  const heapify = (index) => {
    let smallest = index;
    let leftChild = 2 * smallest + 1,
      rightChild = 2 * smallest + 2;
    if (
      leftChild < minHeap.length &&
      minHeap[smallest][1] > minHeap[leftChild][1]
    ) {
      smallest = leftChild;
    }
    if (
      rightChild < minHeap.length &&
      minHeap[smallest][1] > minHeap[rightChild][1]
    ) {
      smallest = rightChild;
    }
    if (smallest !== index) {
      exchangeNode(smallest, index);
      heapify(smallest);
    }
  };

  const heapInsert = (node) => {
    let insert = minHeap.length;
    minHeap.push(node);
    if (insert != 0) {
      let parent = insert % 2 == 0 ? insert / 2 - 1 : (insert - 1) / 2;
      if (minHeap[parent][1] > minHeap[insert][1]) {
        exchangeNode(parent, insert);
        for (let i = parent; i >= 0; i--) {
          heapify(i);
        }
      }
    }
  };

  const heapDelete = () => {
    exchangeNode(0, minHeap.length - 1);
    let smallestNode = minHeap.pop();
    heapify(0);
    return smallestNode;
  };

  let time = 0; // 현 시각
  let total = 0; // 요청부터 처리 완료까지 걸린 시간 총합
  let reqT = 0; // 진행 중인 작업의 요청 시간
  let procStart = 0; // 진행 중인 작업의 처리 시작 시간
  let workingHours = 0; // 진행 중인 작업의 완료까지 걸리는 시간
  let isWorking = false; // 현재 작업이 진행 중인지 여부
  let finJobsNum = 0;

  const startNewJob = () => {
    if (minHeap.length != 0) {
      let newJob = heapDelete();
      reqT = newJob[0];
      workingHours = newJob[1];
      procStart = time;
      isWorking = true;
    }
  };

  while (jobsNum != finJobsNum) {
    // loop main
    // 현재 시각에 들어온 요청들이 있는지 확인하고, 있다면 heap에 Insertion
    while (restJobs.length !== 0 && restJobs[0][0] == time) {
      heapInsert(restJobs[0]);
      restJobs.splice(0, 1);
    }
    // 현재 작업 중인지 확인
    if (isWorking) {
      // 현재 작업이 종료되는 시간인지 확인
      if (time - procStart == workingHours) {
        // 현재 작업이 종료되면 요청에서 처리까지 걸린 시간을 계산
        total += time - reqT;
        isWorking = false;
        finJobsNum += 1;
        // 새로운 작업의 시작으로 heap의 최상단 작업 시작
        startNewJob();
      }
    } else startNewJob();
    time += 1;
  }
  return parseInt(total / jobsNum);
};

const example1 = [
  [0, 3],
  [1, 9],
  [2, 6],
]; // result : 9

const example2 = [
  [24, 10],
  [18, 39],
  [34, 20],
  [37, 5],
  [47, 22],
  [20, 47],
  [15, 2],
  [15, 34],
  [35, 43],
  [26, 1],
]; // result : 74

const example3 = [
  [24, 10],
  [18, 39],
  [34, 20],
  [37, 5],
  [47, 22],
  [20, 47],
  [15, 34],
  [15, 2],
  [35, 43],
  [26, 1],
]; // result : 74

console.log(solution(example1));
console.log(solution(example2));
console.log(solution(example3));
