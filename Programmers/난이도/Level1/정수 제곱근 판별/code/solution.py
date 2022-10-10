"""
    # 문제 해결 단서
    0. 입력 형식 : n(양의 정수, 1~500000000000000)
    1. n이 양의 정수 x의 제곱이면 x+1의 제곱을 반환합니다.
    2. n이 양의 정수 x의 제곱이 아니라면 -1을 반환합니다.

    # 문제 해결 방법
    1. n의 제곱근 값을 구합니다.
    2. 제곱근을 1로 나누었을 때 나머지가 생긴다면 -1을 반환합니다.
    3. 나머지가 생기지 않느다면 제곱근에 1을 더해 제곱 시켜 반환합니다.
"""

import math


def solution(n=0):
    root = math.sqrt(n)
    return int((root+1)**2) if root % 1 == 0 else -1


print(solution(121))
print(solution(3))
