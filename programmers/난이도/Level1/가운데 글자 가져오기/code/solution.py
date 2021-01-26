"""
    # 문제 해결 단서
    0. 입력형식 : s(문자열)
    1. 문자열의 가운데 글자를 반환하는데, 문자열의 길이가 짝수인 경우 가운데 두 글자를 반환합니다.

    # 문제 해결 방안
    1. 문자열의 길이가 짝수인지, 홀수인지 판별합니다.
    2. 홀수일 땐, 가운데 글자를, 짝수일 땐 가운데 두글자를 반환합니다.
"""


def solution(s=""):
    answer = ""
    if len(s) % 2 == 0:
        answer = s[int(len(s)/2 - 1)] + s[int(len(s)/2)]
    else:
        answer = s[int((len(s)-1)/2)]
    return answer


print(solution("abcde"))
print(solution("qwer"))
