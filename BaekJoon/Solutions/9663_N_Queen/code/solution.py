n = int(input())
visited = [False for _ in range(n)]  # 같은 열에 퀸을 두지 않기 위해 기록하는 열 방문 기록
count = 0


def isSafe(queen, info):
    # 대각선 방향에 위치한 퀸이 있는지 확인
    if len(info) == 0:
        return True

    dx, dy = queen
    for (x, y) in info:
        if abs(dx - x) == abs(dy - y):
            return False

    return True


def NQueen(line, info):
    global count

    if line == n:
        count += 1
        return

    for col in range(n):
        if visited[col]:
            continue
        elif isSafe((line, col), info):
            visited[col] = True
            copy_info = info[:]
            copy_info.append((line, col))
            NQueen(line+1, copy_info)
            visited[col] = False


if n == 1:
    count = 1
elif n == 2 or n == 3:
    count = 0
else:
    NQueen(0, [])

print(count)
