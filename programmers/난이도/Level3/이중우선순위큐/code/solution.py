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
    2. 

    # 처음 생각으로는 연결리스트를 이용하는 것이 간단할 것 같았지만, 연산의 수량이 최대 1000000개 이기 때문에 연결 리스트를 사용한다면 탐색 시간이 너무도 길어질 것 같아 포기했습니다.
"""


def solution(operations=[]):
    maxiHeap = []
    mini = {"index": None, "value": None}

    def exchangeNode(idx1, idx2):
        temp = maxiHeap[idx1]
        maxiHeap[idx1] = maxiHeap[idx2]
        maxiHeap[idx2] = temp

    def heapify(index):
        largest = index
        lchild = index*2 + 1
        rchild = index*2 + 2

        if lchild < len(maxiHeap)-1 and maxiHeap[lchild] > maxiHeap[largest]:
            largest = lchild
        if rchild < len(maxiHeap)-1 and maxiHeap[rchild] > maxiHeap[largest]:
            largest = rchild

        if largest != index:
            exchangeNode(index, largest)
            heapify(largest)

    def heapInsert(value):
        # if mini['value'] == None:
        # mini['value'] = value
        insertIdx = len(maxiHeap)
        # mini['index'] = insertIdx
        maxiHeap.append(value)
        if insertIdx != 0:
            parentIdx = (len(maxiHeap)-1) // 2
            if maxiHeap[parentIdx] < maxiHeap[insertIdx]:
                exchangeNode(insertIdx, parentIdx)
                for i in range(parentIdx, -1, -1):
                    heapify(i)

    def heapDeleteMax():
        exchangeNode(0, len(maxiHeap)-1)
        maxiHeap.pop()
        heapify(0)

    for op in operations:
        op = op.split(" ")
        cmd = op[0]
        data = int(op[1])
        if cmd == "I":
            heapInsert(data)
        else:
            if data == 1:
                heapDeleteMax()
            else:
                pass
