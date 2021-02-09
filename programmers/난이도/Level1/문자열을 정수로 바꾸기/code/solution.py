"""
    # 문제 해결 단서
    0. 입력 형식 : s(+,-,숫자로만 이루어진 문자열, 길이는 1~50))
    1. s의 맨앞은 부호로 시작할 수 있으며, 숫자는 0부터 시작하지 않습니다.

    # 문제 해결 방법
    1. python의 내장 타입인 int를 활용합니다.
"""


def solution(s=""):
    return int(s)


def solution2(s=""):
    nums = ["0", "1", "2", '3', '4', '5', '6', '7', '8', '9']
    answer = 0
    for index, number in enumerate(s[::-1]):
        if(number == "-" or number == "+"):
            answer *= -1 if number == "-" else 1
        else:
            answer += nums.index(number) * (10**index)
    return answer
