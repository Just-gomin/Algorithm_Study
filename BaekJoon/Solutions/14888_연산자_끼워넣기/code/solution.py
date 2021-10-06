n = int(input())
numbers = list(map(int, input().split()))
plus, minus, multiply, divide = map(int, input().split())

res_min = 10**9 + 1
res_max = -(10**9 + 1)


def calculate(result, depth, plus, minus, multiply, divide):
    global res_min, res_max

    if depth == n-1:
        res_min = result if result < res_min else res_min
        res_max = result if result > res_max else res_max
        return

    if plus > 0:
        calculate(result + numbers[depth+1], depth +
                  1, plus-1, minus, multiply, divide)
    if minus > 0:
        calculate(result - numbers[depth+1], depth+1,
                  plus, minus - 1, multiply, divide)
    if multiply > 0:
        calculate(result*numbers[depth+1], depth+1,
                  plus, minus, multiply - 1, divide)
    if divide > 0:
        if result > 0:
            temp = result // numbers[depth + 1]
        else:
            temp = (-1) * (abs(result) // numbers[depth + 1])
        calculate(temp, depth + 1, plus, minus, multiply, divide-1)


calculate(numbers[0], 0, plus, minus, multiply, divide)

print(res_max)
print(res_min)
