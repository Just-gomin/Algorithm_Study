# - 문제 Link : https://www.acmicpc.net/problem/2798
#
# - 조건
# 1. 블랙잭 변형의 게임 문제로, 자세한 설명은 문제 원문을 참고합니다.
# 2. N장의 카드와 숫자 M이 주어집니다. (3 <= N <= 100, 10 <= M <= 300,000)
# 3. 합이 M을 넘지 않고, 최대한 가깝도록 주어진 N개의 숫자 중 3개를 고릅니다.
#
# - 해결
# 1. 3개의 반복문을 이용해 모든 경우의 수를 탐색합니다.
# 2. 0,1,2 번째 수를 시작으로 n-3,n-2,n-1 번째 조합까지 값을 더해보고 그 중 M과의 차이가 제일 작은 조합을 출력합니다.
#

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
        while middle < n - 1:
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
