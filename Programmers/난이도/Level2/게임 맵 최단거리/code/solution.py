from collections import deque


def solution(maps=[]):
    n = len(maps)
    m = len(maps[0])
    queue = deque([[0, 0]])

    # 상하좌우
    diff = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    # BFS
    while queue:
        v = queue.popleft()
        x = v[0]
        y = v[1]

        for d in diff:
            nx = x + d[0]
            ny = y + d[1]

            # 갈 수 있는 좌표인지 확인
            if not (nx >= 0 and nx < n) or not (ny >= 0 and ny < m):
                continue

            # 이미 방문한 좌표인지 혹은 벽인지 확인
            if maps[nx][ny] != 1:
                continue

            # 이동할 점이 목표 지점이라면 경로의 길이 반환
            if nx == n - 1 and ny == m - 1:
                return maps[x][y] + 1

            # 방문할 좌표 추가
            queue.append([nx, ny])

            # 방문할 좌표에 대해 경로 길이 갱신
            maps[nx][ny] = maps[x][y] + 1

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
