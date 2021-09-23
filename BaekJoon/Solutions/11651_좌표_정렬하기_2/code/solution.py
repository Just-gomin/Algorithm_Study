from sys import stdin, stdout

n = int(stdin.readline())
coordinates = []

for _ in range(n):
    x, y = map(int, stdin.readline().split())
    coordinates.append((x, y))

coordinates.sort(key=lambda x: (x[1], x[0]))

for (x, y) in coordinates:
    stdout.write("{0} {1}\n".format(x, y))
