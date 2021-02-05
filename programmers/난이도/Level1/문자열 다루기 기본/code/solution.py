"""
    # 문제 해결 단서
    0. 입력형식 : s(문자열, 1~8)
    1. 문자열의 길이가 4혹은 6이며, 숫자로만 이루어졌는지 판별하는 함수를 작성합니다.

    # 문제 해결 방법
    1. 정규표현식을 이용해 문자열에서 숫자 부분만을 추출합니다.
    2. 추출한 문자열의 길이가 해당 문자열의 길이와 같고 이것이 4혹은 6인지 판단합니다.
"""

import re


def solution(s=""):
    extraction = re.match(r"\d+", s)
    nums = extraction.group() if extraction != None else ""
    return len(nums) == len(s) and (len(nums) == 4 or len(nums) == 6)
