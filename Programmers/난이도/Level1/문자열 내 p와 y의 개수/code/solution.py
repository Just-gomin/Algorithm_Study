"""
    # 문제 해결 단서
    0. 입력 형식 : s(문자열, 길이 1~50)
    1. 문자열 s에서 대문자 소문자의 상관 없이 p와y의 개수를 세고, 개수가 같은 경우와 하나도 없는 경우 true를 반환합니다. 같지 않을 경우엔 false를 반환합니다.

    # 문제 해결 방안
    1. s에 대해 정규표현식을 사용하여 p와 y의 개수를 알아냅니다.
    2. 조건에 따라 ture와 false를 반환합니다.
"""


def solution(s=""):
    pnum = 0
    ynum = 0
    for c in s:
        if c == 'P' or c == 'p':
            pnum += 1
        elif c == 'Y' or c == 'y':
            ynum += 1
    return True if pnum == ynum else False


def solution2(s=""):
    return True if s.lower().count('p') == s.lower().count('y') else False
