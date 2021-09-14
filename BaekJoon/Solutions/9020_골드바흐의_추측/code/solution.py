import sys


def getPrimes(limit):
    limit = limit + 1
    is_prime = [False, False, True] + [True, False] * (int(limit/2) - 1)

    for i in range(3, limit, 2):
        if is_prime[i]:
            for j in range(i+i, limit, i):
                is_prime[j] = False

    return is_prime


t = int(sys.stdin.readline())

is_prime = getPrimes(10000)

for _ in range(t):
    n = int(sys.stdin.readline())
    half_n = int(n/2)

    smaller = half_n
    bigger = half_n

    while not(is_prime[smaller] and is_prime[bigger] and smaller + bigger == n):
        while not(is_prime[smaller]) and smaller > 2:
            smaller -= 1

        for i in range(n-smaller, smaller, -1):
            if is_prime[i] and i + smaller == n:
                bigger = i
                break

        if bigger + smaller != n:
            smaller -= 1

    print(smaller, bigger)
