from sys import stdin, stdout
from collections import deque

read = stdin.readline
write = stdout.write

n = int(read())
users = {}

for _ in range(n):
    age, name = read().split()
    users.setdefault(age, deque([])).append(name)

for key in range(1, 201):
    if str(key) in users:
        for val in users[str(key)]:
            write("{0} {1}\n".format(key, val))
