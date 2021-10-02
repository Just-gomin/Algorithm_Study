from collections import deque
from sys import stdin, stdout

board = deque()
candidates = deque()

# 스도쿠 판의 입력과 빈칸에 대한 후보지 생성
for i in range(9):
    line = deque(map(int, stdin.readline().split()))
    zero_basket = deque()
    numbers = deque([n for n in range(1, 10)])
    for j, val in enumerate(line):
        if val != 0:
            numbers.remove(val)
        else:
            zero_basket.append([i, j, []])

    if len(zero_basket) > 0:
        for item in zero_basket:
            candidate = item[:]
            candidate[2] = numbers.copy()
            candidates.append(candidate)
    board.append(line)


def isRight(row, col, target):
    # 해당 위치에 올바를 숫자가 들어 갔는지 확인하는 함수
    # 해당 행에 같은 숫자가 있는지 확인
    if target in board[row]:
        return False

    # 해당 열에 같은 숫자가 있는지 확인
    for drow in range(9):
        if board[drow][col] == target:
            return False

    # 3*3 내에 같은 숫자가 있는지 확인
    box_centers = [(1, 1), (1, 4), (1, 7), (4, 1), (4, 4),
                   (4, 7), (7, 1), (7, 4), (7, 7)]
    box_shape = [(-1, -1), (-1, 0), (-1, 1), (0, -1),
                 (0, 0), (0, 1), (1, -1), (1, 0), (1, 1)]

    min_val = 99
    center = (0, 0)
    for (drow, dcol) in box_centers:
        dist = abs(row-drow) + abs(col-dcol)
        if dist < min_val:
            min_val = dist
            center = (drow, dcol)

    for (drow, dcol) in box_shape:
        if target == board[center[0] + drow][center[1] + dcol]:
            return False

    return True


def solveSudoku(count):
    # 후보자들을 바탕으로 빈칸을 채워가는 함수
    if count == len(candidates):
        return
    i, j = candidates[count][0], candidates[count][1]
    candidate = candidates[count][2].copy()

    for n in candidate:
        if isRight(i, j, n):
            board[i][j] = n
            solveSudoku(count+1)


solveSudoku(0)


for line in board:
    stdout.write(" ".join(map(str, line)) + "\n")
