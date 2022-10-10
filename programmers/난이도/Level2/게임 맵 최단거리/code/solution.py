from collections import deque


def solution(maps=[]):
    n = len(maps)
    m = len(maps[0])

    visited = [[False for _ in range(m)] for __ in range(n)]
    queue = deque()

    # 시작점, 방문 횟수 0
    queue.append([0, 0, 1])

    # BFS
    while queue:
        v = queue.popleft()
        x = v[0]
        y = v[1]
        count = v[2]

        # 방문 처리
        visited[x][y] = True

        # 남쪽 확인
        if (x + 1 < n) and (not visited[x + 1][y]) and (maps[x + 1][y] != 0):
            if x + 1 == n - 1 and y == m - 1:
                return count + 1
            else:
                queue.append([x + 1, y, count + 1])
        # 동쪽 확인
        if (y + 1 < m) and (not visited[x][y + 1]) and (maps[x][y + 1] != 0):
            if x == n - 1 and y + 1 == m - 1:
                return count + 1
            else:
                queue.append([x, y + 1, count + 1])
        # 북쪽 확인
        if (x - 1 >= 0) and (not visited[x - 1][y]) and (maps[x - 1][y] != 0):
            if x - 1 == n - 1 and y == m - 1:
                return count + 1
            else:
                queue.append([x - 1, y, count + 1])
        # 서쪽 확인
        if (y - 1 >= 0) and (not visited[x][y - 1]) and (maps[x][y - 1] != 0):
            if x == n - 1 and y - 1 == m - 1:
                return count + 1
            else:
                queue.append([x, y - 1, count + 1])

    return -1


if __name__ == "__main__":
    print(
        solution(
            [
                [1, 0, 1, 1, 1],
                [1, 0, 1, 0, 1],
                [1, 0, 1, 1, 1],
                [1, 1, 1, 0, 1],
                [0, 0, 0, 0, 1],
            ]
        )
    )
    print(
        solution(
            [
                [1, 0, 1, 1, 1],
                [1, 0, 1, 0, 1],
                [1, 0, 1, 1, 1],
                [1, 1, 1, 0, 0],
                [0, 0, 0, 0, 1],
            ]
        )
    )
