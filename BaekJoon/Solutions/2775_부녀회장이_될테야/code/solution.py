import sys

t = int(sys.stdin.readline())

for _ in range(t):
    k = int(sys.stdin.readline())
    n = int(sys.stdin.readline())

    apartment = [[i for i in range(n+1)]]

    for stair in range(1, k+1):
        line = []
        for room in range(n+1):
            line.append(sum(apartment[stair-1][0:room+1]))
        apartment.append(line)

    print(apartment[k][n])
