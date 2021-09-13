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


m, n = map(int, input().split())

primes = getPrimes(n)

for prime in primes:
    if m <= prime:
        print(prime)
