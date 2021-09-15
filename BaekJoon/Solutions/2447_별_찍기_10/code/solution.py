n = int(input())

stars = [[' ']*n for _ in range(n)]


def setStars(row, col, num):
    if num == 1:
        stars[row][col] = '*'
    else:
        # 1행
        setStars(row, col, num//3)
        setStars(row, col + num//3, num//3)
        setStars(row, col + num//3 * 2, num//3)

        # 2행
        setStars(row + num//3, col, num//3)
        setStars(row + num//3, col + num//3 * 2, num//3)

        # 3행
        setStars(row + num//3 * 2, col, num//3)
        setStars(row + num//3 * 2, col + num//3, num//3)
        setStars(row + num//3 * 2, col + num//3 * 2, num//3)


setStars(0, 0, n)

for line in stars:
    print(''.join(line))
