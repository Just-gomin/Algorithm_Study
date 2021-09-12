def checkPrime(x):
    if x == 1:
        return False
    else:
        is_prime = True

        i = 2

        while i < x:
            if x % i == 0:
                is_prime = False
                break
            i += 1

        return is_prime


m = int(input())
n = int(input())

prime_list = []

for x in range(m, n+1):
    if checkPrime(x):
        prime_list.append(x)

if len(prime_list) < 1:
    print(-1)
else:
    print(sum(prime_list))
    print(prime_list[0])
