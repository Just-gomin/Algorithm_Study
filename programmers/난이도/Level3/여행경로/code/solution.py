"""
    # 문제 해결 단서
    0. 입력 형식 : tickets(항공권 list)
        - 모든 공항의 이름은 eoanswk 3글자
        - 주어진 공항 수는 3개 이상 10000개 이하
        - 원소 [a,b]는 a로 부터 b로 향하는 경로가 존재함을 의미
    1.주어진 항공권을 모두 사용하는 여행경로를 반환합니다.
    2. 만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 반환합니다.
    3. 모든 도시를 방문할 수 없는 경우는 주어지지 않습니다.

    # 문제 해결 방법
    1. 입력된 tickets를 바탕으로 출발지를 key로하고 value는 도착지가 되는 dictionary를 생성합니다.
        - 가능한 경로가 여러가지인 경우, 알파벳 순으로 앞서는 경로를 택해야 하므로, tickets에 대해서 정렬을 진행합니다.
    2. 시작점인 "ICN"부터 dictionary에 접근해, 도착지들 중 하나를 뽑습니다.
    3. 도착지를 출발지로 하여 또 도착지들 중 하나를 선택해 여행 경로를 설계합니다.
    4. 위 2와 3의 과정을 반복하는 중 모든 티켓을 사용하지 않았는데 현 출발지로 부터 도착할 목적지가 존재하지 않는다면, 이전의 출발지로 돌아가 새로운 도착지를 탐색해 여행 경로를 설계합니다.

    # 참고 링크
    https://wwlee94.github.io/category/algorithm/bfs-dfs/travel-route/
"""


def solution(tickets=[]):
    ticketsNum = len(tickets)
    tickDict = {}
    trip = ["ICN"]

    # 알파벳 순으로 앞선 경로 생성을 위한 정렬
    tickets.sort(key=lambda ticket: ticket[1])

    # 인접 리스트 형식의 graph 생성
    for ticket in tickets:
        tickDict.setdefault(ticket[0], []).append(ticket[1])
        tickDict.setdefault(ticket[1], [])

    # DFS 진행, 여행 경로의 길이가 항공권의 수보다 작은 상황에서만 진행
    while len(trip)-1 < ticketsNum:
        dept = trip[-1]
        # 출발지로 부터 갈 목적지가 남은 경우
        if len(tickDict[dept]) != 0:
            dest = tickDict[dept].pop(0)    # 갈 수 있는 목적지들 중 가장 앞에 있는 공항을 선택
            trip.append(dest)               # trip에 추가

        # 출발지로 부터 갈 목적지가 남지 않은 경우
        else:
            while True:
                dest = trip.pop()               # 마지막 여행지를 다시 목적지 리스트로 넣기 위해 여행 경로상에서 제거
                dept = trip[-1]                 # 마지막 출발지
                tickDict[dept].append(dest)     # 마지막 출발지의 목적지에 다시 추가
                if len(tickDict[dept]) != 1:
                    break
    return trip


example1 = [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]
example2 = [["ICN", "SFO"], ["ICN", "ATL"], [
    "SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]]
example3 = [["ICN", "AAA"], ["ICN", "BBB"], ["BBB", "ICN"]]
example4 = [['ICN', 'B'], ['B', 'ICN'], ['ICN', 'A'], ['A', 'D'], ['D', 'A']]

# print(solution(example1))
# print(solution(example2))
# print(solution(example3))
print(solution(example4))
