import sys

num, *grades = map(int, sys.stdin.read().split())

m = max(grades)
sum = 0

for grade in grades:
    sum += grade/m * 100

print(sum/num)
