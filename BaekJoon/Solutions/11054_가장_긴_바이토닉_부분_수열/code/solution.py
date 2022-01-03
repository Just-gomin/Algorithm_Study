def solution(n, numbers):
    inc_counter = [1] * n
    dec_counter = [1] * n

    for i in range(1, n):
        j = i-1
        inc_biggest_count = 0
        dec_biggest_count = 0
        while j >= 0:
            if numbers[i] > numbers[j] and inc_biggest_count < inc_counter[j]:
                inc_biggest_count = inc_counter[j]
            if numbers[n-1-i] > numbers[n-1-j] and dec_biggest_count < dec_counter[n-1-j]:
                dec_biggest_count = dec_counter[n-1-j]
            j -= 1
        inc_counter[i] += inc_biggest_count
        dec_counter[n-1-i] += dec_biggest_count

    return max(map(sum, zip(inc_counter, dec_counter))) - 1


if __name__ == "__main__":
    n = int(input())
    numbers = list(map(int, input().split()))
    result = solution(n, numbers)
    print(result)
