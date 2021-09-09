import sys
import math

t = int(sys.stdin.readline())

for _ in range(t):
    h, w, n = map(int, sys.stdin.readline().split())

    stairs = n % h

    if stairs == 0:
        stairs = h

    distance = int(math.ceil(n/h))

    if distance < 10:
        distance = '0' + str(distance)

    print("{0}{1}".format(stairs, distance))
