"""
    # 문제 해결 단서
    0. 입력 형식 : n(입국심사를 기다리는 사람들의 수, 1명 이상 1,000,000,000명 이하), times(심사관이 한명을 심사하는데 걸리는 시간의 리스트, 1명 이상 100,000명 이하)
        - 각 심사관이 한 명을 심사하는데 걸리는 시간은 1분 이상 1,000,000,000분 이하입니다.
    1. 처음에 모든 심사대는 비어있습니다. 한 심사대에서는 동시에 한 명만 심사를 할 수 있습니다. 
    2. 가장 앞에 서 있는 사람은 비어 있는 심사대로 가서 심사를 받을 수 있습니다. 하지만 더 빨리 끝나는 심사대가 있으면 기다렸다가 그곳으로 가서 심사를 받을 수도 있습니다.
    3. 모든 사람이 심사를 받는데 걸리는 시간을 최소로 하고 싶습니다.
    4. 이분 탐색을 통해서 해결합니다. left = 0, right = min(times)*n
    5. mid의 값 동안 각 심사관들이 검사할 수 있는 인원 수를 합하여 대기자 수와 일치하거나 대기자 수보다는 많지만 left와 right이 동일한 값이 될 때까지 진행합니다.

    # 문제 해결 방법
    1. 심사하는 데 걸리는 시간을 키로, 해당 시간이 걸리는 심사관의 수를 값으로 하는 dictionary를 생성합니다.
    2. 이분 탐색을 진행합니다. left = 0, right = min(times)*n
    3. left <= right 인 상태일 동안만 반복을 진행합니다.

    # 참고 https://velog.io/@ollabu3/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%9E%85%EA%B5%AD%EC%8B%AC%EC%82%AC
"""


def solution(n=0, times=[]):
    officers = {}
    mini = times[0]
    for time in times:
        if time in officers:
            officers[time] += 1
        else:
            officers[time] = 1
        if mini > time:
            mini = time

    left = 0
    right = mini * n

    answer = mini * n

    while left <= right:

        mid = (left+right)//2
        inspectors = 0
        for time in officers.keys():
            inspectors += (mid//time) * officers[time]

        if inspectors < n:
            left = mid + 1
        else:
            if mid < answer:
                answer = mid
            right = mid - 1

    return answer


print(solution(6, [7, 10]))
