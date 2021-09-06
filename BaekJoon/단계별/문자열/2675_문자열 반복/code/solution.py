import sys

t = int(sys.stdin.readline())

for _ in range(t):
    r, s = sys.stdin.readline().split()
    r = int(r)
    s = [c*r for c in s]
    print("".join(s))
