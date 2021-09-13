def getPrimes(limit):
    checker = [True] * (limit+1)

    checker[0] = False
    checker[1] = False

    for i in range(2, limit+1):
        if checker[i]:
            for j in range(i+i, limit+1, i):
                checker[j] = False

    return checker


isPrime = getPrimes(123456*2)

while True:
    n = int(input())

    if n == 0:
        break

    counter = 0

    for i in range(n+1, 2*n+1):
        if isPrime[i]:
            counter += 1

    print(counter)
