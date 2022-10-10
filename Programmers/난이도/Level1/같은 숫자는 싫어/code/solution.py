"""
    # 문제 해결 단서
    0. 입력형식 : arr(배열, 크기 : 1,000,000이하의 자연수, 원소의 크기 : 0~9의 정수)
    1. 연속해서 같은 수가 등장할 때, 해당 수를 하나만 남깁니다.

    # 문제 해결 방법
    1. 배열을 하나씩 살피며, 처음 등장한 숫자이면 반환할 배열에 담습니다.
    2. 중복된 숫자라면 넘어갑니다.
"""


def solution(arr=[]):
    answer = []
    beforeNum = -1
    for num in arr:
        if num != beforeNum:
            answer.append(num)
            beforeNum = num
    return answer
