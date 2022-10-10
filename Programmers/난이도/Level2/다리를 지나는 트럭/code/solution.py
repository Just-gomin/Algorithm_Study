"""
    # 문제 해결 단서
    0. 입력 형식 : 
        - bridge_length(다리의 길이, 1이상 10,000 이하)
        - weight(다리가 견딜 수 있는 무게, 1이상 10,000 이하)
        - truck_weights(트력별 무게를 담은 배열, 1 이상 10,000 이하)
        - 트럭의 무게는 1 이상 weight 이하
    1. 트럭여러대가 다리를 정해진 순서로 건너려 합니다.
    2. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다.
    3. 트럭은 1초에 1만큼 움직입니다.
    4. 트럭이 다리에 완전히 오르지 않은 경우, 해당 트럭의 무게는 고려하지 않습니다.

    # 문제 해결 방법
    1. 큐(다리)를 생성합니다.
    2. 큐에 들어가는 노드들은 {'weight':w, 'fin':f}의 형태를 갖습니다. 트럭의 무게와 다리를 다 건너게 되는 시간을 명시합니다.
    3. 대기하는 트럭과 다리 위에 트럭이 존재하는 동안 반복합니다.
    4. 현재 다리 위에 있는 트럭들의 무게와 대기 중인 트럭 중 첫번째 트럭의 무게를 합했을 때 다리가 견딜 수 있는 경우, 트럭은 다리에 오릅니다.
    5. 현재 시각과 다리에 선두로 있는 트럭의 다리를 다 건너는 시간이 일치하면 해당 트럭을 큐에서 제거합니다.
"""


def solution(bridge_length=0, weight=0, truck_weights=[]):
    bridge = []
    time = 0

    while len(truck_weights) != 0 or len(bridge) != 0:
        time += 1

        # 다지나간 트럭 제거
        if len(bridge) != 0 and bridge[-1]['fin'] == time:
            bridge.pop()

        # 대기 중인 트럭 올리기
        weightsOnBridge = 0
        for truck in bridge:
            weightsOnBridge += truck['weight']
        if len(truck_weights) != 0 and weightsOnBridge + truck_weights[0] <= weight:
            truck_weight = truck_weights.pop(0)
            bridge.insert(0, {'weight': truck_weight,
                              'fin': time+bridge_length})

    return time


print(solution(2, 10, [7, 4, 5, 6]))
