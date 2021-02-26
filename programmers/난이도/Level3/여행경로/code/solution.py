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
"""


def solution(tickets=[]):
    ticketsNum = len(tickets)
    trip = ["ICN"]
    tripCount = 0
    tickDict = {}

    tickets.sort(key=lambda ticket: ticket[2])

    for ticket in tickets:
        tickDict.setdefault(ticket[0], []).append([ticket[1], 0])

    while tripCount < ticketsNum:
        if len(tickDict[trip[tripCount]]) != 0:
            pass
        else:
            destination = trip.pop()
            departure = trip[len(trip-1)]
            tripCount -= 1
            tickDict[departure].append([destination, -1])

    return trip
