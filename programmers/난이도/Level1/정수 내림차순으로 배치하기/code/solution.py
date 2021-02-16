"""
    # 문제 해결 단서
    0. 입력 형식 : n(8000000000이하의 자연수)
    1. 입력받은 n을 각 자릿수가 큰 것부터 작은 것의 순서로 정렬한 정수를 반환합니다.

    # 문제 해결 방법
    1. 입력받은 수를 자릿수별로 나눕니다.
    2. 내림 차순으로 정렬시킵니다.
"""


def solution(n=0):
    num = list(str(n))
    num.sort(reverse=True)
    return int("".join(num))
