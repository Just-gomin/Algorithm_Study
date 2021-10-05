from sys import stdin, stdout

board = [list(map(int, stdin.readline().split())) for _ in range(9)]
blanks = [(row, col) for row in range(9)
          for col in range(9) if board[row][col] == 0]


def makeCandidates(row, col):
    # 빈칸에 들어갈 수 있는 숫자들을 반환하는 함수
    numbers = [n for n in range(1, 10)]

    # 행과 열에 존재하는 숫자 제거
    for d in range(9):
        if board[row][d] in numbers:
            numbers.remove(board[row][d])
        if board[d][col] in numbers:
            numbers.remove(board[d][col])

    # 해당 좌표의 숫자가 속한 3*3 사각형에 포함된 숫자 제거
    center_row = row // 3
    center_col = col // 3
    for dr in range(center_row*3, (center_row+1)*3):
        for dc in range(center_col*3, (center_col+1)*3):
            if board[dr][dc] in numbers:
                numbers.remove(board[dr][dc])

    return numbers


def solveSudoku(count):
    # 후보자들을 바탕으로 빈칸을 채워가는 함수
    if count == len(blanks):
        for line in board:
            stdout.write(" ".join(map(str, line)) + "\n")
        exit(0)

    (row, col) = blanks[count]
    candidates = makeCandidates(row, col)

    for n in candidates:
        board[row][col] = n
        solveSudoku(count+1)
        board[row][col] = 0


solveSudoku(0)
