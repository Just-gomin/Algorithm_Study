from sys import stdin, stdout

read = stdin.readline
write = stdout.write

t = int(read())
tests = [int(read()) for _ in range(t)]

max_n = max(tests)

p = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9] + [0]*90

if max_n > 10:
    for n in range(11, max_n+1):
        p[n] = p[n-2]+p[n-3]

for n in tests:
    write(str(p[n])+"\n")

# 100개를 먼저 구한 후 진행

# for i in range(11, 101):
#     p[i] = p[i-2] + p[i-3]

# for _ in range(t):
#     n = int(read())
#     write(str(p[n]) + '\n')
