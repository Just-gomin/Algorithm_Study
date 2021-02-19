"""
    # 문제 해결 단서
    0. 입력 형식 : num(int 범위의 정수)
    1. 입력 받은 수가 짝수일 경우 "Even"을 반환하고, 홀수인 경우 "Odd"를 반환합니다.
    2. 0은 짝수 입니다.

    # 문제 해결 방법
    1. 나머지 값에 따라서 결과를 반환합니다.
"""


def solution(num=0):
    return "Even" if num % 2 == 0 else "Odd"
