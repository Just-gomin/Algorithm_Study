def getHexagons(k):
    return 3*(k**2) - 3*k + 1


n = int(input())

if n == 1:
    print(1)
else:
    k = 2
    while True:
        hexagons_k_1 = getHexagons(k-1)
        hexagons_k = getHexagons(k)
        if hexagons_k_1 < n and n <= hexagons_k:
            print(k)
            break
        k += 1
