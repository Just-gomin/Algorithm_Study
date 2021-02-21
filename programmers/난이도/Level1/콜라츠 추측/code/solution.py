"""
    # 문제 해결 단서
    0. 입력 형식: num(1이상 8,000,000미만의 정수)
    1. 콜라츠 추측이란 모든 수가 다음의 작업을 반복해 1이 될 수 있다는 추측입니다.
    2. 콜라츠 추측의 작업
        - 1. 입력된 수가 짝수라면 2로 나눕니다.
        - 2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
        - 3. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
    3. 1이될 때까지 몇번의 작업을 반복했는지 반환합니다.
    4. 작업을 500번 반복해도 1이되지 않을 시에는 -1을 반환합니다.
"""


def solution(num=0):
    answer = 0
    while(num != 1):
        if answer > 500:
            answer = -1
            break
        answer += 1
        num = num/2 if num % 2 == 0 else num*3+1
    return answer


def collatz(num, count):
    if count > 500:
        return -1
    elif num == 1:
        return count
    else:
        num = num/2 if num % 2 == 0 else num * 3 + 1
        return collatz(num, count + 1)


def solution2(num):
    answer = collatz(num, 0)
    return answer


print(solution2(6))
