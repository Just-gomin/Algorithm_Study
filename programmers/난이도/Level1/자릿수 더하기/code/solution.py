"""
    # 문제 해결 단서
    0. 입력 형식 : N(100,000,000이하의 자연수)
    1. 각 자리수를 합해 반환합니다. ex) 123 = 1 + 2 + 3 = 6

    # 문제 해결 방법
    1. 주어진 수를 문자열로 변환하여 각 자리 수를 하나씩 정수로 변환하여 더합니다.
"""


def solution(N=0):
    answer = 0
    for n in str(N):
        answer += int(n)
    return answer


def solution2(N=0):
    return sum([int(i) for i in str(N)])


def solution3(N=0):
    answer = 0
    while N > 0:
        answer += N % 10
        N = N//10
    return answer
