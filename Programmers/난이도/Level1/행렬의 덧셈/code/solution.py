"""
    # 문제 해결 단서
    0. 입력 형식 : arr1, arr2
        - 동일한 크기의 배열로, 행과 열의 길이는 500을 넘지 않습니다.
    1. 두 행렬이 입력되었을 때, 두 행렬의 덧셈 결과를 반환합니다.

    # 문제 해결 방법
    1. 행렬의 행의 수 만큼 반복을 합니다.
    2. 각 반복마다 행을 하나씩 생성하여, 덧셈의 결과를 행에 담고 이를 반환할 답 리스트에 추가해줍니다.
"""


def solution(arr1=[], arr2=[]):
    answer = []
    for i in range(len(arr1)):
        newLine = [arr1[i][j] + arr2[i][j] for j in range(len(arr1[i]))]
        answer.append(newLine)
    return answer


def solution2(arr1=[], arr2=[]):
    answer = []
    for i, row1 in enumerate(arr1):
        newLine = []
        for j, col in enumerate(row1):
            newLine.append(col + arr2[i][j])
        answer.append(newLine)
    return answer


def solution3(arr1=[], arr2=[]):
    return [[a+b for a, b in zip(row1, row2)]for row1, row2 in zip(arr1, arr2)]
