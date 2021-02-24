"""
    # 문제 해결 단서
    0. 입력 형식 : x(1 이상 10000 이하인 정수)
    1. x의 자리수 합이 x를 나눌 수 있다면, 하샤드 수입니다.
    2. x의 하샤드 수 여부를 반환합니다.

    # 문제 해결 방법
    1. x의 값을 담는 num 변수와 자리수의 합을 담을 변수를 생성합니다.
    2. num을 10으로 나눈 나머지를 더하고, num을 10으로 나누었을 때 몫으로 갱신합니다.
    3. num이 0이되면 반복을 종료합니다.
    4. 자리수의 합이 x를 나눌 수 있다면 True, 아니라면 False를 반환합니다.
"""


def solution(x=0):
    if x <= 10:
        return True
    else:
        dSum = 0
        num = x
        while num > 0:
            dSum += num % 10
            num = num // 10
        return True if x % dSum == 0 else False
