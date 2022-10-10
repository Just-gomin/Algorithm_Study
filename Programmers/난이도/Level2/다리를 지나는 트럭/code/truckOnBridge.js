/*
  // # 문제 해결 방법
  1. 다리위에 있는 트럭의 무게 합과 현재 대기하고 있는 트럭의 무게 합이 weight을 넘는지 확인 합니다.
  2. 넘지 않는 다면 트럭을 다리 위로 올립니다. 다리위 차량 무게를 계산합니다. 대기 차량에서 올라간 차량을 제거 합니다.
  3. 넘는 다면 차량이 통과하기를 기다립니다.
  4. 
*/

const solution = (bridge_length, weight, truck_weights) => {
  let timeLength = 0;
  let bridge = new Array(bridge_length).fill(0);
  let weightOnBridge = 0;

  console.log(
    "bridge_length : ",
    bridge_length,
    "weight : ",
    weight,
    "truck_weights : ",
    truck_weights
  );

  do {
    let waitingTruck = 0;
    let passTruck = bridge.shift();

    weightOnBridge -= passTruck;

    if (weightOnBridge + truck_weights[0] <= weight) {
      waitingTruck = truck_weights.shift();
    } else {
      waitingTruck = 0;
    }

    bridge.push(waitingTruck);
    weightOnBridge += waitingTruck;
    timeLength++;

    console.log("On Bridge : ", bridge);
    console.log(
      "weightOnBridge : ",
      weightOnBridge,
      "timeLength : ",
      timeLength
    );
  } while (weightOnBridge !== 0 || truck_weights.length !== 0);

  return timeLength;
};

console.log(solution(2, 10, [7, 4, 5, 6]));
