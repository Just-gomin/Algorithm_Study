import sys

num = int(sys.stdin.readline())

for _ in range(num):
    result = sys.stdin.readline()
    score = 1
    sum = 0
    for r in result:
        if r == "O":
            sum += score
            score += 1
        else:
            score = 1

    print(sum)
