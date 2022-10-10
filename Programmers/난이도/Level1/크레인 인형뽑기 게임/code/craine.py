
# - 문제 단서
#     1. 게임 화면의 격자의 상태가 담긴 2차원 배열 board. ( board의 각 원소는 가로줄을 나타냅니다, 5x5 ~ 30x30 )
#     2. 인형을 집기 위해 움직이는 crane의 움직임 기록 배열 moves. ( 1 ~ 1000 )

# - 문제 풀이
#     1. moves의 수만큼 진행 하되, 인형을 집은 수가 borad에 담을 수 있는 인형의 수를 초과하는 경우 종료합니다.
#     2. moves에 따라 해당 열에서 0이 아닌 수가 나올 때까지 탐색을 진행합니다.
#     3. 0이 아닌 수가 발견되면 basket에 담고, 담을 수와 담겨진 수가 동일 할 경우 두 수를 없애고 결과를 하나 증가시킵니다.

def solution(board, moves):
    result = 0
    pickCount = 0
    maxMoves = len(board) * len(board[0])
    basket = []
    pick = 0
    for col in moves:
        if(pickCount > maxMoves):
            break
        for row in range(len(board[0])):
            if(board[row][col-1] != 0):
                pick = board[row][col-1]
                board[row][col-1] = 0
                if(len(basket) != 0 and basket[len(basket)-1] == pick):
                    basket.pop()
                    result += 2
                else:
                    basket.append(pick)
                pickCount += 1
                break
    return result


board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
]

moves = [1, 5, 3, 5, 1, 2, 1, 4]

print(solution(board, moves))
