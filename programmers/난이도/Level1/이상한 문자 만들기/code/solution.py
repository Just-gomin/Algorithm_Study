"""
    # 문제 해결 단서
    0. 입력 형식 : s(한 개 이상으로 구성된 문자열)
    1. 문자열의 각각의 단어들에 대하여 짝수 인덱스는 대문자, 홀수 인덱스는 소문자로 변환합니다.

    # 문제 해결 방법
    1. 문자열을 공백을 기준으로 하여, 단어로 나눕니다.
    2. 단어 마다 인덱스를 기준으로 대소문자로 변환합니다.
"""


def solution(s=""):
    answer = []
    for word in s.split(" "):
        temp = ""
        for i in range(len(word)):
            temp += word[i].upper() if i % 2 == 0 else word[i].lower()
        answer.append(temp)
    return " ".join(answer)
