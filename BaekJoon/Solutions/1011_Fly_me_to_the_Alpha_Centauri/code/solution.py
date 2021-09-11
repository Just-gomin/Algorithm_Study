t = int(input())

for _ in range(t):
    x, y = map(int, input().split())

    distance = y - x
    operations = 0

    i = 1

    if distance == 1:
        print(1)
    else:
        while True:
            if distance > 2*i:
                distance -= 2*i
                operations += 2
            else:
                if distance <= i:
                    operations += 1
                else:
                    operations += 2
                break
            i += 1
        print(operations)
