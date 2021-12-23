def solution(n, numbers):
    counter = [1] * n

    for i in range(1, n):
        j = i - 1
        biggest_count = 0
        while j >= 0:
            if numbers[i] > numbers[j] and biggest_count < counter[j]:
                biggest_count = counter[j]
            j -= 1
        counter[i] += biggest_count

    return max(counter)


if __name__ == "__main__":
    n = int(input())
    numbers_input = input()
    numbers = list(map(int, input().split()))
    result = solution(n, numbers)
    print(result)
