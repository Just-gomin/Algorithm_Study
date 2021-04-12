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
    1. Floyd-Warshall 알고리즘을 이용하여 최소 비용 트리를 생성합니다.
    2. s->a , s->b의 경로를 기록하며 비용을 계산합니다.
    3. a와 b가 공유하는 구간의 비용을 계산합니다.
    4. 최소비용을 계산하여 반환합니다.

    # dijkstra algorithm 부분을 수정합니다. -> Floyd-Warshall
    # 참고 : https://yabmoons.tistory.com/622

    # Dijkstra 풀이 -> 효율성 26번 실패 
        => min function 대신 if문을 사용했더니 효율성이 절반이상 줄었습니다. 앞으로 min, max 사용에 좀더 주의를 기울여야할 것 같습니다.
"""


def solution(n=0, s=0, a=0, b=0, fares=[]):

    inf = float('inf')
    answer = inf

    graph = [[inf]*n for _ in range(n)]

    # Make Graph
    for f, t, fare in fares:
        graph[f-1][t-1] = fare
        graph[t-1][f-1] = fare

    # Calculate fares between start and destination
    for mid in range(n):
        for f in range(n):
            for t in range(n):
                if f == t:
                    graph[f][t] = 0
                elif graph[f][t] > graph[f][mid] + graph[mid][t]:
                    graph[f][t] = graph[f][mid] + graph[mid][t]

    for mid in range(n):
        cost = graph[s-1][mid] + graph[mid][a-1] + graph[mid][b-1]
        answer = cost if answer > cost else answer

    return answer


exTable = [
    [6, 4, 6, 2, [[4, 1, 10], [3, 5, 24], [5, 6, 2], [3, 1, 41], [
        5, 1, 24], [4, 6, 50], [2, 4, 66], [2, 3, 22], [1, 6, 25]]],
    [7, 3, 4, 1, [[5, 7, 9], [4, 6, 4], [3, 6, 1], [3, 2, 3], [2, 1, 6]]],
    [6, 4, 5, 6, [[2, 6, 6], [6, 3, 7], [4, 6, 7], [6, 5, 11],
                  [2, 5, 12], [5, 3, 20], [2, 4, 8], [4, 3, 9]]]
]

for n, s, a, b, fares in exTable:
    print(solution(n, s, a, b, fares))

# print(solution(6, 4, 6, 2, [[4, 1, 10], [3, 5, 24], [5, 6, 2], [3, 1, 41], [
#     5, 1, 24], [4, 6, 50], [2, 4, 66], [2, 3, 22], [1, 6, 25]]))
