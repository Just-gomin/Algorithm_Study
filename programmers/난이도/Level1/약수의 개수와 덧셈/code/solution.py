from collections import deque
from math import ceil, sqrt


def is_even_submultiple(num):
    submultiples = deque()
    root = ceil(sqrt(num))  # root of num

    for i in range(1, root + 1):
        if num % i == 0:
            quotient = num // i
            if quotient == i - 1:
                break
            submultiples.append(i)
            if i != quotient:
                submultiples.append(quotient)

    return len(submultiples) % 2 == 0


def solution(left, right):
    answer = 0

    for n in range(left, right + 1):
        if is_even_submultiple(n):
            answer += n
        else:
            answer -= n

    return answer


if __name__ == "__main__":
    print(solution(1, 100))
