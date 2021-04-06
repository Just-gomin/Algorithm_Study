"""
    # 문제 해결 단서
    0. 입력 형식 : n(지점의 개수, 3 ~200 자연수),s(출발 지점) a(A의 도착지점), b(B의 도착지점), 지점 사이의 예상 택시요금을 나타내는 fares
        - s, a, b 는 1이상 n이하의 자연수, 서로 다른 값
        - fares는 2차원 정수 배열, 배열의 크기는 2이상 n*(n-1)/2 이하
        - fares 의 각 행은 [c, d, f] 형태 ( c 지점과 d지점 사이의 예상 택시 요금 f)
        - c와 d는 서로 다른 값이며, f는 1이상 100,000이하의 자연수
        - 두 지점간 예상 택시 요금은 1개만 주어집니다.
        - s 에서 a, b로 가는 경로가 존재하는 경우만 입력으로 주어집니다.
    1. 출발지인 s에서 a와 b가 가는 방향이 비슷하여 일정 구간을 택시를 동승합니다.
    2. 공유한 지점외에 각자의 목적지까지는 개별 이동합니다.
    3. a와 b의 택시 요금의 합이 최소가 되는 때의 택시 요금을 반환합니다.

    # 문제 해결 방법
    1. 다익 스트라 알고리즘을 이용하여 최소 비용 트리를 생성합니다.
    2. s->a , s->b의 경로를 기록하며 비용을 계산합니다.
    3. a와 b가 공유하는 구간의 비용을 계산합니다.
    4. 최소비용을 계산하여 반환합니다.

    # dijkstra algorithm 부분을 수정합니다.
"""


def dijkstra(n, fares, s):
    loads = {}
    for start, end, fare in fares:
        loads.setdefault(start, []).append([end, fare])
        loads.setdefault(end, []).append([start, fare])

    for node in range(1, n+1):
        loads[node] = sorted(loads[node], key=lambda x: x[1])

    graph = {s: [[loads[s][0][0], loads[s][0][1]]],
             loads[s][0][0]: []}
    checker = [1 if node in graph.keys() else 0 for node in range(n+1)]
    remain = n - 2
    loads[start].pop(0)

    while remain > 0:
        min_node = 0
        min_fare = 100000
        for node in graph.keys():
            while len(loads[node]) != 0:
                if checker[loads[node][0][0]] == 1:
                    loads[node].pop(0)
                else:
                    break
            if len(loads[node]) != 0:
                dest, fare = loads[node][0]
                if fare < min_fare and checker[dest] != 1:
                    min_fare = loads[node][0][1]
                    min_node = node
        checker[loads[min_node][0][0]] = 1
        remain -= 1
        graph[min_node].append(loads[min_node][0])
        if loads[min_node][0][0] not in graph:
            graph[loads[min_node][0][0]] = []
        loads[min_node].pop(0)

    return graph


def get_fare(graph, start, dest):
    info = [[start, 0]]
    while info[-1][0] != dest:
        start, fare = info[-1]
        if len(graph[start]) < 1:
            while len(graph[start]) <= 1:
                info.pop()
                start = info[-1][0]
            temp = graph[start].pop(0)
            graph[start].append(temp)
        else:
            info.append([graph[start][0][0], fare + graph[start][0][1]])

    return info


def solution(n=0, s=0, a=0, b=0, fares=[]):

    graph = dijkstra(n, fares, s)

    a_info = get_fare(graph, s, a)
    b_info = get_fare(graph, s, b)

    share_fare = 0
    for routeA, routeB in zip(a_info, b_info):
        if routeA[0] == routeB[0]:
            share_fare = routeA[1]
        else:
            break
    return a_info[-1][1] + b_info[-1][1] - share_fare


exTable = [
    [6, 4, 6, 2, [[4, 1, 10], [3, 5, 24], [5, 6, 2], [3, 1, 41], [
        5, 1, 24], [4, 6, 50], [2, 4, 66], [2, 3, 22], [1, 6, 25]]],
    [7, 3, 4, 1, [[5, 7, 9], [4, 6, 4], [3, 6, 1], [3, 2, 3], [2, 1, 6]]],
    [6, 4, 5, 6, [[2, 6, 6], [6, 3, 7], [4, 6, 7], [6, 5, 11],
                  [2, 5, 12], [5, 3, 20], [2, 4, 8], [4, 3, 9]]]
]

for n, s, a, b, fares in exTable:
    print(solution(n, s, a, b, fares))
