import sys

t = int(sys.stdin.readline())

for _ in range(t):
    x1, y1, r1, x2, y2, r2 = map(int, sys.stdin.readline().split())

    if x1 == x2 and y1 == y2:
        if r1 == r2:
            print(-1)
        else:
            print(0)
    else:
        distance = ((x1-x2)**2 + (y1-y2)**2)**0.5

        short_r = r1 if r1 < r2 else r2
        long_r = r1 if r1 > r2 else r2

        if distance == short_r + long_r or distance + short_r == long_r:
            print(1)
        elif distance > short_r + long_r or distance + short_r < long_r:
            print(0)
        else:
            print(2)
