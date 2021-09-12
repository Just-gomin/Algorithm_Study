import sys

n = int(sys.stdin.readline())
x_list = map(int, sys.stdin.readline().split())

answer = 0

for x in x_list:

    if x != 1:
        i = 2
        is_prime = True

        while i < x:
            if x % i == 0:
                is_prime = False
                break
            i += 1

        if is_prime == True:
            answer += 1

print(answer)
