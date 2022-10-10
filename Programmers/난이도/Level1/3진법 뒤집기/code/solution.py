"""
    # 문제 해결 단서
    0. 입력 형식 : n(1~100000000)
    1. n을 3진법의 수로 변환하고, 이를 뒤집어 다시 10진법으로 바꿉니다.

    # 문제 해결 방법
    1. n을 3으로 나누며 3진수를 표현할 배열을 생성합니다.
    2. 전체 길이를 알아내, 3의 몇 제곱까지 이용할지 파악합니다.
    3. 배열의 원소를 하나씩 꺼내며, 3의 n제곱을 곱해 10진수를 만듭니다.
"""


def solution(n):
    answer = 0
    ternary = []
    while n > 0:
        ternary.append(n % 3)
        n = n//3
    p = len(ternary)-1
    for v in ternary:
        answer += pow(3, p) * v
        p -= 1
    return answer


ex1 = 45  # result : 7
ex2 = 125  # result : 229

print(solution(ex1))
print(solution(ex2))
