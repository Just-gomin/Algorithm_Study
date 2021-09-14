from collections import deque
import sys

x_list = deque([])
y_list = deque([])

for _ in range(3):
    x, y = map(int, sys.stdin.readline().split())

    if x in x_list:
        x_list.remove(x)
    else:
        x_list.append(x)

    if y in y_list:
        y_list.remove(y)
    else:
        y_list.append(y)

print(x_list[0], y_list[0])
