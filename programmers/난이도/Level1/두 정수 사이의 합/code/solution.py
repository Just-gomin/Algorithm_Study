"""
    # 문제 해결 단서
    0. 입력 형식 : a, b(두 정수, -10,000,000 ~ 10,000,000). 대소 관계는 정해져 있지 않습니다.
    1. 두 정수 a와 b 사이에 존재하는 정수들의 합을 반환합니다.
    2. a,b가 동일한 수 이면, 해당 숫자를 반환합니다.

    # 문제 해결 방법
    1. a,b의 대소를 비교합니다.
    2. 작은 것 부터 큰 것 까지 반복문을 통해 덧셈을 진행합니다.

"""


def solution(a=0, b=0):
    answer = 0

    if a == b:
        return a

    big = a if a > b else b
    small = a if a < b else b

    for n in range(small, big + 1):
        answer += n

    return answer


def solution2(a=0, b=0):
    return (abs(a-b)+1)*(a+b)//2
