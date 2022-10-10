"""
    # 문제 해결 단서
    0. 입력 형식 : arr(정수를 담은 배열, 길이 1이상)
    1. 배열에 담긴 정수 중 가장 작은 수를 제거한 배열을 반환합니다.
    2. 가장 작은 수를 제거한 배열이 빈 배열인 경우, -1을 담아 반환합니다.

    # 문제 해결 방법
    1. 배열을 한번 훑으며, 가장 작은 수를 발견합니다.
    2. 가장 작은 수를 제거한 배열을 생성합니다.
    3. 제거된 뒤의 배열이 빈 배열인 경우 -1을 담아 반환하고, 그렇지 않은 경우 해당 배열을 반환합니다.
"""


def solution(arr=[]):
    answer = []
    smallest = arr[0]
    for n in arr:
        if smallest > n:
            smallest = n
    for n in arr:
        if n != smallest:
            answer.append(n)
    return answer if len(answer) != 0 else [-1]
