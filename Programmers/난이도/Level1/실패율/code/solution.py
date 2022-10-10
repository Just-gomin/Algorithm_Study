"""
    # 문제 해결 단서
    0. 입력 형식 : N(스테이지 수, 1~500 이하의 자연수), stages(각 자연수는 사용자가 현재 도전 중인 스테이지 번호, 1~200000 이하의 자연수)
        - stages에는 1이상 N+1 이하의 자연수가 담겨있습니다.
        - 각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타냅니다.
        - N+1은 마지막 스테이지(N번째 스테이지)까지 클리어한 사용자 입니다.
    1. 실패율 = (스테이지에 도달 했으나 아직 클리어하지 못한 플레이어의 수) / (스테이지에 도달한 플레이어 수)
    2. 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 합니다.
    3. 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0으로 정의합니다.
    4. 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 반환합니다.

    # 문제 해결 방법
    1. stages 배열을 순회하며, 현재 스테이지에 도달한사람, 도달한사람과 완료한 사람들의 합을 세는 배열들을 작성합니다.
    2. 실패율을 계산해서 배열에 담고, 정렬을 통해 반환할 배열을 생성해 반환합니다.
"""


def solution(N=0, stages=[]):
    challengers = [0 for _ in range(N + 1)]
    reachers = [0 for _ in range(N + 1)]
    rateFailure = []
    for stage in stages:
        challengers[stage - 1] += 1
        for i in range(stage):
            reachers[i] += 1

    for i in range(N):
        rateFailure.append(
            {
                "stage": i + 1,
                "rate": 0 if reachers[i] == 0 else challengers[i] / reachers[i],
            }
        )
    rateFailure.sort(key=lambda info: (-info["rate"], info["stage"]))
    answer = [info["stage"] for info in rateFailure]
    return answer
