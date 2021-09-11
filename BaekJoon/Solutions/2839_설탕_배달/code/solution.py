n = int(input())

if n % 5 == 0:
    print(n//5)
else:
    share5 = n//5
    while share5 > -1:
        temp = n - share5*5

        if temp % 3 == 0:
            print(share5 + temp//3)
            break

        share5 -= 1

    if share5 == -1:
        print(-1)
