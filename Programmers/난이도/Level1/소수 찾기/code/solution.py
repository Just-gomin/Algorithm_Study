"""
    # 문제 해결 단서
    0. 입력 형식 : n(2~1000000 사이의 자연수)
    1. n이하의 소수의 개수를 반환합니다.
    2. 소수는 1과 자기 자신으로만 나누어지는 수 입니다.

    # 문제 해결 방법
    1. 에라토스네스의 채로 n까지의 소수를 모두 찾아 놓습니다.
    2. 입력된 n까지의 소수의 개수를 셉니다.

"""


def solution(n=0):
    def sieve(limit):
        n = [-1 for i in range(limit+1)]
        for i in range(2, limit+1):
            if n[i] == -1:
                n[i] = 1
            j = 2*i
            while j < limit+1:
                n[j] = 0
                j += i
        return n

    count = 0
    nums = sieve(n)
    for i in nums:
        if i == 1:
            count += 1
    return count


print(solution(10))
