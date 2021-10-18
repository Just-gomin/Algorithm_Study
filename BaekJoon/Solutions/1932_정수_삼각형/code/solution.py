from sys import stdin

read = stdin.readline

n = int(read().strip())
results = [[int(read().strip())]]

for i in range(1, n):
    stair = list(map(int, read().strip().split()))
    temp = []

    for j, val in enumerate(stair):
        left = val + results[i-1][j-1] if j-1 >= 0 else val
        right = val + results[i-1][j] if j < len(results[i-1]) else val
        temp.append(max(left, right))

    results.append(temp)

print(max(results[n-1]))
