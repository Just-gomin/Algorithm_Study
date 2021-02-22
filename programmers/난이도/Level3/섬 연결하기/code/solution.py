"""
    # 문제 해결 단서
    0. 입력 형식 : n(섬의 개수, 1~100), costs(섬 사이에 다리를 건설하는 비용, ((n-1)*n)/2 이하의 길이)
    1. 임의의 i에 대해서, cost[i]에 담긴 정보는 다음과 같습니다.
        - costs[i][0]과 costs[i][1]에는 다리가 연결되는 섬의 번호가 담겨있습니다.
        - costs[i][2]에는 두 섬을 연결하는 다리를 건설할 때 드는 비용이 담겨 있습니다.
    2. 섬과 섬 사이에 직접적인 다리의 연결이 없어도, 다른 다리들을 거쳐 도달할 수 있다면 통행 가능하다고 봅니다.
    3. 같은 연결은 두 번 주어지지 않습니다. 섬의 순서가 바뀐 경우도 동일한 연결로 봅니다.
        - 즉, costs[i][0]과 costs[1]이 서로 바뀌어 다시 등장하지 않습니다.
    4. 모든 섬 사이의 다리 건설 비용이 주어지지 않습니다, 이 경우 두 섬 사이의 건설이 불가능한 것으로 봅니다.
    5. 모든 섬이 서로 통행 가능하도록 만들 때 필요한 최소 비용을 반환합니다.
    
    # 문제 해결 방안
    1. 주어진 costs를 통해 map을 제작합니다. map[i][j]의 값은 섬 i와 j사이에 다리건설 비용 입니다.
    2. 0번 섬과 연결할 수있는 섬들에 대하여 각각의 섬 번호와 연결 비용이 담긴 node를 heap에 집어 넣습니다.
    3. heap은 최소 heap으로 연결비용에 대해 정렬되어 있습니다.
    4. 최상위 heap에 담긴 섬과 연결을 진행하며, 해당 섬과 연결된 섬들의 정보도 heap에 넣어 정렬시킵니다.
    5. heap에 섬들을 넣을 때, 이미 연결된 섬은 제외합니다.

    # 다익스트라 알고리즘으로 섬들을 연결합니다. 가장 작은 비용이 드는 node를 찾기 위해서 최소 heap을 사용했습니다.
"""


def solution(n=0, costs=[]):
    answer = 0
    graph = [[0 for _ in range(n)] for __ in range(n)]
    checker = [0 for _ in range(n)]
    counter = 0
    minHeap = []

    for cost in costs:
        graph[cost[0]][cost[1]] = cost[2]
        graph[cost[1]][cost[0]] = cost[2]

    def makeNode(f, t, cost):
        return {"from": f, "to": t, "cost": cost}

    def exchangeNode(i1, i2):
        temp = minHeap[i1]
        minHeap[i1] = minHeap[i2]
        minHeap[i2] = temp

    def heapify(index):
        smallest = index
        leftChild = 2 * smallest + 1
        rightChild = 2 * smallest + 2

        if (leftChild < len(minHeap) and minHeap[smallest]["cost"] > minHeap[leftChild]["cost"]):
            smallest = leftChild
        if (rightChild < len(minHeap) and minHeap[smallest]["cost"] > minHeap[rightChild]["cost"]):
            smallest = rightChild
        if (index != smallest):
            exchangeNode(index, smallest)
            heapify(smallest)

    def heapInsert(node):
        index = len(minHeap)
        minHeap.append(node)
        if index != 0:
            parent = int(index/2 - 1) if index % 2 == 0 else int((index-1)/2)
            if(minHeap[parent]["cost"] > minHeap[index]["cost"]):
                for i in range(parent, -1, -1):
                    heapify(i)

    def heapDelete():
        if len(minHeap) == 0:
            node = makeNode(0, 0, 0)
            return node
        else:
            exchangeNode(0, len(minHeap)-1)
            minNode = minHeap.pop()
            heapify(0)
            return minNode

    while(counter != n):
        node = heapDelete()
        if(checker[node["to"]] == 0):
            checker[node["to"]] = 1
            counter += 1
            answer += node["cost"]
            for i, cost in enumerate(graph[node["to"]]):
                if cost != 0 and checker[i] == 0:
                    node = makeNode(node["to"], i, cost)
                    heapInsert(node)

    return answer
