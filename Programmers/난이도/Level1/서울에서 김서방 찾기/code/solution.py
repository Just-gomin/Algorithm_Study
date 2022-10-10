"""
    # 문제 해결 단서
    0. 입력 형식 : seoul(문자열 배열, 길이는 1~1000, 각 원소의 길이는 1~20)
    1. Kim은 반드시 Seoul안에 포함되어 있습니다.
    2. Seoul안의 Kim의 인덱스를 반환합니다.

    # 문제 해결 방법
    1. list의 index함수를 이용해 해결합니다.
    2. index를 문자열로 변환해줍니다.
"""


def solution(seoul=[]):
    return '김서방은 ' + str(seoul.index("Kim")) + '에 있다'
