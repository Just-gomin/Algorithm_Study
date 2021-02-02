"""
    # 문제 해결 단서
    0. 입력 형식 : strings(문자열 배열, 길이는 1~50), n(정수)
        - strings의 원소는 소문자 알파벳으로 이루어져있습니다.
        - strings의 원소의 길이는 1이상 100이하인 문자열입니다.
        - strings의 모든 원소의 길이는 n보다 큽니다.
    1. 인덱스의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

    # 문제 해결 방법
    1. sort함수를 사용하며, key를 지정하기 위해서 lambda 함수를 이용합니다.
"""


def solution(strings=[], n=0):
    answer = sorted(strings)
    return sorted(answer, key=lambda string: string[n])
