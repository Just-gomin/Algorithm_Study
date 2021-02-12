"""
    # 문제 해결 단서
    0. 입력 형식 : n(0이상 3000이하의 정수)
    1. 약수들의 합을 도출합니다.
    
    # 문제 해결 방법
    1. n이 0혹은 1이라면 n을 반환합니다.
    2. 2부터 n/2까지 수 중 n을 나누는 수를 모두 도출합니다.
    3. 1과 n을 포함하여 2에서 도출된 수들의 합을 반환합니다.
"""


def solution(n=0):
    if n == 0 or n == 1:
        return n
    answer = 0
    for i in range(2, n//2 + 1):
        if n % i == 0:
            answer += i
    return answer + 1 + n
