"""
    # 문제 해결 단서
    0. 입력 형식 : n,m(1000이하의 자연수)
    1. 입력된 자연수 n,m을 이용해 가로길이가 n, 세로길이가 m인 사각형을 출력합니다.

    # 문제 해결 방법
    1. m번 만큼 반복을 하는 n의 길이의 *을 출력합니다.
"""


def solution():
    n, m = map(int, input().strip().split(' '))
    output = ("*"*n + "\n") * m
    print(output)
