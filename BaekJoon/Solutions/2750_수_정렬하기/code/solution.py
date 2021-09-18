import sys

n = int(sys.stdin.readline())
numbers = [int(sys.stdin.readline()) for _ in range(n)]

# Bubble Sort
for i in range(n-1):
    for j in range(i+1, n):
        if numbers[i] > numbers[j]:                          # 큰 숫자가 앞에 있는지 확인
            numbers[i], numbers[j] = numbers[j], numbers[i]  # 숫자 교환

sys.stdout.write("\n".join(map(str, numbers)))
