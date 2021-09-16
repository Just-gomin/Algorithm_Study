n_str = input()
n = int(n_str)

start = n - len(n_str)*9
answer = start

while start < n:
    if start > 0:
        div_sum = start + sum(map(int, [i for i in str(start)]))
        if div_sum == n:
            break

    start += 1

if start == n:
    print(0)
else:
    print(start)
