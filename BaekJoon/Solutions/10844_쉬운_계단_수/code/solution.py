def solution(n):
    basket = [0] + [1] * 9

    for _ in range(1, n):
        temp = [0] * 10

        for i in range(10):
            if i == 0:
                temp[1] += basket[0]
            elif i == 9:
                temp[8] += basket[9]
            else:
                temp[i - 1] += basket[i]
                temp[i + 1] += basket[i]

        basket = temp[:]

    return sum(basket) % 10**9


if __name__ == "__main__":
    n = int(input())
    result = solution(n)
    print(result)
