fibos = [(1, 0), (0, 1)]


def fibo01(num):
    fibos.append((fibos[num-1][0]+fibos[num-2][0],
                 fibos[num-1][1]+fibos[num-2][1]))


for k in range(2, 41):
    fibo01(k)

n = int(input())

for _ in range(n):
    t = int(input())
    print(fibos[t][0], fibos[t][1])
