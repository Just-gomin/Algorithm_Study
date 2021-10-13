from sys import stdin, stdout

read = stdin.readline
write = stdout.write


w = [[[0 for _ in range(21)] for __ in range(21)] for ___ in range(21)]


def makeW(a, b, c):
    if a <= 0 or b <= 0 or c <= 0:
        w[a][b][c] = 1
    elif a < b < c:
        w[a][b][c] = w[a][b][c-1] + w[a][b-1][c-1] - w[a][b-1][c]
    else:
        w[a][b][c] = w[a-1][b][c] + w[a-1][b-1][c] + \
            w[a-1][b][c-1] - w[a-1][b-1][c-1]


for i in range(21):
    for j in range(21):
        for k in range(21):
            makeW(i, j, k)


while True:
    a, b, c = map(int, read().split())

    if a == -1 and b == -1 and c == -1:
        break

    if a <= 0 or b <= 0 or c <= 0:
        write("w({0}, {1}, {2}) = {3}\n".format(a, b, c, w[0][0][0]))
    elif a > 20 or b > 20 or c > 20:
        write("w({0}, {1}, {2}) = {3}\n".format(a, b, c, w[20][20][20]))
    else:
        write("w({0}, {1}, {2}) = {3}\n".format(a, b, c, w[a][b][c]))
