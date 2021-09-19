import sys

n = int(sys.stdin.readline())

numbers = [0 for _ in range(10001)]

for _ in range(n):
    numbers[int(sys.stdin.readline())] += 1

for i, val in enumerate(numbers):
    count = val
    while count > 0:
        sys.stdout.write((str(i)+'\n'))
        count -= 1
