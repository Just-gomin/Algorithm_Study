"""
    # 문제 해결 단서
    0. 입력 형식 : arr(자연수를 담은 배열), divisor(나누는 수)
    1. 주어진 arr에서 divisor로 나누어 떨어지는 숫자만을 담은 배열을 반환 합니다.
    2. 나누어 떨어지는 숫자가 하나도 없다면, -1을 담습니다.
    3. 숫자를 오름차순으로 정렬하여 반환합니다.

    # 문제 해결 방법
    1. 리스트 컴프리핸션(리스트의 반복문 표현)을 통해 답을 도출합니다.
    2. 1의 과정에서 나온 배열의 길이를 확인하고, 빈 배열일 경우 -1을 담아 반환합니다. 
"""


def solution(arr=[], divisor=1):
    answer = [i for i in arr if i % divisor == 0]
    if len(answer) == 0:
        answer.append(-1)
    answer.sort()
    return answer
