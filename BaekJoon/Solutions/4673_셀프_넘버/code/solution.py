def d(n):
    result = n

    while n > 0:
        result += n % 10
        n = n // 10

    return result


checker = [0 for _ in range(10002)]

for i in range(1, 10001):
    if checker[i] == 0:
        print(i)

    cur = d(i)
    while cur < 10001:
        checker[cur] = 1
        cur = d(cur)
