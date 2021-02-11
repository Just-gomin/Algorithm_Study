"""
    # 문제 해결 단서
    0. 입력 형식 : a, b 
        - a, b의 길이는 1 이상 1,000 이하입니다.
        - a, b의 모든 수는 -1,000 이상 1,000 이하입니다.
    1. 내적을 구합니다.

    # 문제 해결 방법
    1. 동일한 index상의 a,b의 곱을 더합니다.
"""


def solution(a=[], b=[]):
    answer = 0
    for i in range(len(a)):
        answer += a[i] * b[i]
    return answer
