"""
    # 문제 해결 단서
    0. 입력 형식 : s(문자열, 영문 대소문자만으로 구성, 길이 1이상)
    1. 문자를 큰 것부터 작은 것 순으로 배치합니다.
    2. 대문자가 소문자보다 작은 것으로 간주 합니다.

    # 문제 해결 방법
    1. sort함수에서 reverse를 True로 줍니다.
"""


def solution(s=""):
    answer = ""
    for c in sorted(s, reverse=True):
        answer += c
    return answer


def solution2(s=""):
    return "".join(sorted(s, reverse=True))
