import sys

num = int(sys.stdin.readline())

for _ in range(num):
    n, *grades = map(int, sys.stdin.readline().split())
    avg = sum(grades) / n

    over_avg = 0

    for grade in grades:
        if grade > avg:
            over_avg += 1

    result = "{0:.3f}%".format(over_avg/n * 100)
    print(result)
