import sys

n = int(sys.stdin.readline())
arr = list(map(int, sys.stdin.readline().split()))

min, max = arr[0], arr[0]

for num in arr:
    if min > num:
        min = num
    if max < num:
        max = num
print(min, max)

# 다른 풀이
# n = int(sys.stdin.readline())
# arr = list(map(int, sys.stdin.readline().split()))

# min, max = min(arr), max(arr)
# print(min, max)
