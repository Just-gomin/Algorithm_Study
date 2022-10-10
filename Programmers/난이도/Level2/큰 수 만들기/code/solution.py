"""
    # 문제 해결 단서
    0. 입력 형식 : number (1자리 이상 1000000자리 이하의 숫자 문자열), k ( 1이상 number 자릿수 미만의 자연수)
    1. number에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 문자열 형태로 반환합니다.

    # 문제 해결 방법
    1. 스택을 이용합니다.
    2. number의 길이 만큼 반복을 진행합니다.
    3. 스택의 길이와 잔여 삭제 횟수를 고려해 스택의 마지막 원소가 현재 차례의 number 숫자보다 작은 경우 제거합니다.
    4. answer에 해당 숫자를 집어 넣습니다.
    5. 반복이 종료된 뒤, 잔여 삭제 수 만큼 스택의 뒤에서 잘라냅니다.
    6. 스택을 문자열로 치환해 반환합니다.
"""


def solution(number="", k=0):
    answer = []
    answer.append(number[0])
    for n in number[1:]:
        while len(answer) > 0 and k > 0 and answer[-1] < n:
            answer.pop()
            k -= 1
        answer.append(n)

    answer = answer[:len(answer)-k]

    return ''.join(answer)


def solution2(number="", k=0):
    answer = []
    i = 0
    limit = len(number)
    while i < limit:
        n = number[i]
        while len(answer) > 0 and k > 0 and answer[-1] < n:
            answer.pop()
            k -= 1
        answer.append(n)
        i += 1
        if k == 0:
            break
    if i < limit:
        answer = answer + list(number[i:])
    answer = answer[:len(answer)-k]

    return ''.join(answer)


test = [("1924", 2), ("1231234", 3), ("4177252841", 4), ("987654321", 4)]

for (number, k) in test:
    print(solution2(number, k))
