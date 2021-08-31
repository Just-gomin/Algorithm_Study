import sys

input = sys.stdin.readline

t = int(input())

for i in range(t):
    a, b = map(int, input().split())
    form = "Case #{0}: {1} + {2} = {3}".format(i+1, a, b, a+b)
    print(form)
