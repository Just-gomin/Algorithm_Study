import sys

a, b = map(list, sys.stdin.readline().split())

a.reverse()
b.reverse()

int_a = int("".join(a))
int_b = int("".join(b))

print(int_a if int_a > int_b else int_b)
