"""
    # 문제 해결 단서
    0. 입력 형식 : n,m
        - 1이상 1000000이하의 자연수
    1. 두 수의 최대 공약 수와 최소공배수를 배열에 담아 반환합니다.

    # 문제 해결 방법
    1. 최대 공약 수를 구하고, 두 수의 곱을 최대 공약수로 나눠 구한 최소공배수를 반환합니다.
    2. 최대공약수는 서로다른 두 수의 나머지들과의 공약수 임을 이용합니다.
"""


def getGCD(a, b):
    return abs(b) if a % b == 0 else getGCD(b, a % b)


def solution(n=0, m=0):
    gcd = getGCD(n, m)
    lcm = n*m / gcd
    return [gcd, lcm]
