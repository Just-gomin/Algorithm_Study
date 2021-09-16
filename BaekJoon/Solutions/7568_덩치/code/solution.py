import sys

n = int(sys.stdin.readline())

info = []
ranks = []

for _ in range(n):
    x, y = map(int, sys.stdin.readline().split())
    info.append((x, y))

for x1, y1 in info:
    rank = 1
    for x2, y2 in info:
        if x1 < x2 and y1 < y2:
            rank += 1
    ranks.append(str(rank))

print(" ".join(ranks))
