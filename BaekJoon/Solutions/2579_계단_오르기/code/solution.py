from sys import stdin

read = stdin.readline

n = int(read())
stairs = [int(read()) for _ in range(n)]
history = []

if n >= 1:
    history.append(stairs[0])

if n >= 2:
    history.append(max(stairs[0] + stairs[1], stairs[1]))

if n >= 3:
    history.append(max(stairs[0]+stairs[2], stairs[1]+stairs[2]))

if n >= 4:
    for i in range(3, n):
        history.append(max(history[i-2]+stairs[i],
                       history[i-3]+stairs[i]+stairs[i-1]))

print(history[-1])
