import sys

m, n = map(int, sys.stdin.readline().split())
board = [sys.stdin.readline() for _ in range(m)]

white_board = [list("WB"*4) if i % 2 == 0 else list("BW"*4)
               for i in range(8)]
black_board = [list("BW"*4) if i % 2 == 0 else list("WB"*4)
               for i in range(8)]

changed = m*n


def checkBoard(row, col, board_type):
    target_board = white_board if board_type == "W" else black_board
    diff = 0

    for r in range(8):
        for c in range(8):
            if target_board[r][c] != board[row+r][col+c]:
                diff += 1

    return diff


for row in range(0, m-7):
    for col in range(0, n-7):
        change_by_white = checkBoard(row, col, "W")
        change_by_black = checkBoard(row, col, "B")

        if changed > change_by_white:
            changed = change_by_white

        if changed > change_by_black:
            changed = change_by_black

print(changed)
