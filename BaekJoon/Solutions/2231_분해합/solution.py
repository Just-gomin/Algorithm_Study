#
#   - 문제 link: https://www.acmicpc.net/problem/2231
#
#   - 단서
#   1. 분해합에 관한 설명은 문제 원문을 참고합니다.
#   2. 자연수 N이 주어졌을 때, N의 가장 작은 생성자를 구해내는 프로그램을 작성합니다. (1 <= N < 1,000,000)
#   3. 생성자가 없는 경우 0을 출력합니다.
#
#   - 해결
#   1. 각자리 수는 0~9까지의 숫자가 올 수 있습니다.
#   2. 자연수 n이 주어진 경우 n의 자리수 \*9 값을 n에서 뺀 값을 k라고 할 때,
#      k ~ n까지 분해합을 조사하여 그 중 가장 작은 생성자를 반환합니다.
#

n_str = input()
n = int(n_str)

start = n - len(n_str) * 9
answer = start

while start < n:
    if start > 0:
        div_sum = start + sum(map(int, [i for i in str(start)]))
        if div_sum == n:
            break

    start += 1

if start == n:
    print(0)
else:
    print(start)
