"""
    # 문제 해결 단서
    0. 입력 형식 : array(숫자가 담긴 배열), commands(i(시작), j(끝), k(정렬 후 위치)로 이루어진 배열)
    1. commands에 담긴 i,j에 맞게 배열을 자른 뒤 오름차순으로 정렬 시킵니다.
    2. 정렬된 배열에서 k번째 수를 추출합니다.

    # 문제 해결 방법
    1. 문제에서 제시된 대로, 배열을 자르고 정렬 시키고 추출합니다.
"""


def solution(array=[], commands=[]):
    result = []
    for command in commands:
        sub = array[command[0]-1:command[1]]
        sub.sort()
        result.append(sub[command[2]-1])
    return result


example_arr = [1, 5, 2, 6, 3, 7, 4]
example_cmd = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

print(solution(example_arr, example_cmd))  # result : [5, 6, 3]
