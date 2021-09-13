from collections import deque


def getPrimes(limit):
    # 에라토스네스의 체를 이용해 소수를 구하는 함수 입니다.
    nums = [True for _ in range(limit+1)]
    primes = deque()

    nums[0] = False
    nums[1] = False

    for i in range(2, limit+1):
        if nums[i]:
            primes.append(i)
            for j in range(i+i, limit+1, i):
                nums[j] = False

    return primes


n = int(input())

if n != 1:
    primes = getPrimes(n)

    if n in primes:
        print(n)
    else:
        while n > 1:
            for prime in primes:
                if n % prime == 0:
                    print(prime)
                    n /= prime
                    break


# 다른 풀이

n = int(input())

r = int(n**0.5)
i = 2

while i <= r:
    while n % i == 0:
        print(i)
        n = n // i
    i += 1

if n > 1:
    print(n)
