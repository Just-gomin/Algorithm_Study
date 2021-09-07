import sys

t = int(sys.stdin.readline())

for i in range(t):
    a, b = map(int, sys.stdin.readline().split())
    form = "Case #{0}: {1}".format(i+1, a+b)
    print(form)
