import sys

n, m = map(int, sys.stdin.readline().split())
numbers = list(map(int, sys.stdin.readline().split()))

if n == 3:
    print(sum(numbers))
else:
    best_comb = numbers[0:3]
    best_sum = sum(best_comb)
    min_diff = best_sum

    start = 0

    while start < n - 2:
        middle = start + 1
        while middle < n-1:
            end = middle + 1
            while end < n:
                comb_sum = numbers[start] + numbers[middle] + numbers[end]
                diff = m - comb_sum
                if comb_sum <= m and diff < min_diff:
                    min_diff = diff
                    best_comb = [numbers[start], numbers[middle], numbers[end]]
                    best_sum = sum(best_comb)
                end += 1
            middle += 1
        start += 1

    print(best_sum)
