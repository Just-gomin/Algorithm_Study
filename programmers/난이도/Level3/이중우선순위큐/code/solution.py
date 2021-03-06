"""
    # 문제 해결 단서
    0. 입력 형식 : operations(이중 우선순위 큐가 할 연산을 담은 배열, 길이가 1 이상 1,000,000 이하)
    1. 이중 우선순위 큐는 다음의 연산을 할 수 있는 자료구조입니다.
        명령어	 수신 탑(높이)
        I 숫자	큐에 주어진 숫자를 삽입합니다.
        D 1	   큐에서 최댓값을 삭제합니다.
        D -1   큐에서 최솟값을 삭제합니다.
    2. operations의 원소는 큐가 수행할 연산을 나타냅니다.
        - 원소는 “명령어 데이터” 형식으로 주어집니다.
        - 최댓값/최솟값을 삭제하는 연산에서 최댓값/최솟값이 둘 이상인 경우, 하나만 삭제합니다.
        - 빈 큐에 데이터를 삭제하라는 연산이 주어질 경우, 해당 연산은 무시합니다.
    3. 연산을 모두 마친 뒤, [최대값, 최소값]을 반환합니다.

    # 문제 해결 방법
    1. 최대 Heap을 작성하여 연산을 처리합니다.
    2. 큰 값은 부모로, 같은 높이의 형제 노드들 끼리는 작은 것이 오른쪽으로 가게 정렬 시킵니다.

    # 처음 생각으로는 연결리스트를 이용하는 것이 간단할 것 같았지만, 연산의 수량이 최대 1000000개 이기 때문에 연결 리스트를 사용한다면 탐색 시간이 너무도 길어질 것 같아 포기했습니다.
"""


def solution(operations=[]):
    maxiHeap = []

    def exchangeNode(idx1, idx2):
        temp = maxiHeap[idx1]
        maxiHeap[idx1] = maxiHeap[idx2]
        maxiHeap[idx2] = temp

    def heapify(index):
        lchild = index*2 + 1
        rchild = index*2 + 2

        if rchild < len(maxiHeap):
            if maxiHeap[rchild] > maxiHeap[lchild]:
                exchangeNode(lchild, rchild)
            if maxiHeap[index] < maxiHeap[rchild]:
                exchangeNode(index, lchild)
                exchangeNode(lchild, rchild)
                heapify(rchild)
            elif maxiHeap[index] < maxiHeap[lchild]:
                exchangeNode(index, lchild)
                heapify(lchild)
        elif lchild < len(maxiHeap):
            if maxiHeap[index] < maxiHeap[lchild]:
                exchangeNode(index, lchild)
                heapify(lchild)

    def heapIns(value):
        insertIdx = len(maxiHeap)
        maxiHeap.append(value)

        if insertIdx != 0:
            parentIdx = (len(maxiHeap)-1) // 2
            if maxiHeap[parentIdx] < maxiHeap[insertIdx]:
                exchangeNode(insertIdx, parentIdx)
                for i in range(parentIdx, -1, -1):
                    heapify(i)

    def heapDelMax():
        exchangeNode(0, len(maxiHeap)-1)
        maxiHeap.pop()
        heapify(0)

    def findMin():
        mini = 0
        while((2*mini + 2) < len(maxiHeap)):
            mini = 2*mini + 2
        if (2*mini + 1) < len(maxiHeap):
            mini = 2*mini + 1
        return mini

    def heapDelMin():
        mini = findMin()
        exchangeNode(mini, len(maxiHeap)-1)
        maxiHeap.pop()

    for op in operations:
        op = op.split(" ")
        cmd = op[0]
        data = int(op[1])
        if cmd == "I":
            heapIns(data)
        elif cmd == "D" and len(maxiHeap) != 0:
            if data == 1:
                heapDelMax()
            else:
                heapDelMin()

    return [0, 0] if len(maxiHeap) == 0 else [maxiHeap[0], maxiHeap[findMin()]]


example1 = ["I 16", "D 1"]
example2 = ["I 7", "I 5", "I -5", "D -1"]

print(solution(example1))
print(solution(example2))
