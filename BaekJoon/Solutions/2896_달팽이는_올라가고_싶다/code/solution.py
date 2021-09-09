import sys

a, b, v = map(int, sys.stdin.readline().split())

days = 1
v = v-a
days += v//(a-b)
if v % (a-b) > 0:
    days += 1

print(days)
