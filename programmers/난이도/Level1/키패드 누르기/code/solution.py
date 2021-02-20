"""
    # 문제 해결 단서
    0. 입력 형식 : numbers(원소 값의 범위가 0~9인 정수, 배열의 크기는 1이상 1000이하인 배열), hands("left" 또는 "right")
    1. 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해 숫자를 입력합니다.
    2. 엄지 손가락은 상하좌우로만 이동 가능합니다.
    3. 왼쪽 열의 3개 숫자 1, 4, 7을 입력할 때는 왼손 엄지 손가락을 사용합니다.
    4. 오른쪽 열의 3개 숫자 3, 6, 9를 입력할 떄는 오른손 엄지 손가락을 사용합니다.
    5. 가운데 열의 4개 숫자 2, 5, 8, 0을 입력할 때는 두 엄지 손가락의 현재 키패드의 위피에서 더 가까운 엄지 손가락을 사용합니다.
        - 만약 거리가 같은 경우, 오른손잡이는 오른손 엄지 손가락, 왼손잡이는 왼손 엄지 손가락을 사용합니다.
    6. numbers로 주어진 번호를 누른 엄지 손가락이 왼손("L")인 지 오른손("R")인 지를 나타내는 연속된 문자열 형태로 반환합니다.

    # 문제 해결 방법
    1. 키패드 배열을 생성합니다.
    2. 왼손 엄지와 오른손 엄지의 위치를 키패드 배열의 인덱스로 표현합니다.
    3. 숫자가 주어질 때마다, 왼손 엄지손가락과 오른쪽 엄지손가락의 위치를 바탕으로 거리를 계산하여 더 짧은 쪽의 손으로 입력을 진행합니다.
    4. 거리가 같은 경우 주로 사용하는 손으로 입력을 진행합니다.
"""


def solution(numbers=[], hands=""):
    answer = ""
    keys = [[1, 4, 7, "*"], [2, 5, 8, 0], [3, 6, 9, "#"]]
    lx = 0
    ly = 3
    rx = 2
    ry = 3

    for n in numbers:
        if n in keys[0]:
            answer += "L"
            lx = 0
            ly = keys[0].index(n)
        elif n in keys[2]:
            answer += "R"
            rx = 2
            ry = keys[2].index(n)
        elif n in keys[1]:
            nIdx = keys[1].index(n)
            ldist = abs(1-lx) + abs(ly - nIdx)
            rdist = abs(1-rx) + abs(ry - nIdx)
            if(ldist < rdist or (ldist == rdist and hands == "left")):
                lx = 1
                ly = nIdx
                answer += "L"
            else:
                rx = 1
                ry = nIdx
                answer += "R"

    return answer
