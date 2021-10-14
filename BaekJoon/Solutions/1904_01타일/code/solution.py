n = int(input())

bina = [0] * 1000001
bina[1], bina[2] = 1, 2

for i in range(3, n+1):
    bina[i] = (bina[i-1] + bina[i-2]) % 15746

print(bina[n])
