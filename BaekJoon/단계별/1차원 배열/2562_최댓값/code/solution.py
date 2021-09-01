import sys

max = -1
pos = 0
counter = 0

for line in sys.stdin:
    num = int(line)
    if num > max:
        max = num
        pos = counter + 1
    counter += 1

print(max)
print(pos)

# 다른 풀이
# arr = [int(input()) for _ in range(9)]
# maximum = max(arr)
# print(maximum, arr.index(maximum)+1)
