"""
    # 문제 해결 단서
    0. 입력 형식 : phone_number(길이가 4 ~ 20인 문자열)
    1. 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 반환합니다.

    # 문제 해결 방법
    1. 전화번호의 뒷 4자리를 제외한 길이만큼의 *으로 구성된 문자열을 생성합니다.
    2. *으로 이루어진 문자열에 전화번호 뒷 4자리를 추가하여 반환합니다.

    # 정규표현식을 이용해 해결하는 방법
    1. 전화번호의 뒷 4자리를 제외한 문자열을 정규표현식을 사용해 찾아냅니다.
    2. 1에서 찾아낸 문자열을 *들로 대체합니다.
"""


import re


def solution(phone_number=""):
    answer = ""
    for i, s in enumerate(phone_number):
        if i >= len(phone_number) - 4:
            answer += s
        else:
            answer += "*"
    return answer


def solution2(phone_number=""):
    return "*"*(len(phone_number)-4) + phone_number[-4:]


def solution3(phone_number=""):
    pn = re.match(r"\d+(?=\d{4})", phone_number)
    return phone_number.replace(pn.group(0), "*"*len(pn.group(0)))


print(solution3("01033334444"))
print(solution3("027778888"))
