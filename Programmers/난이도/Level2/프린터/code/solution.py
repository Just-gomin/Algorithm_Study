"""
    # 문제 해결 단서
    0. 입력 형식 : priorities(우선 순위가 표시된 인쇄 대기 목록, 1~100개 사이의 문서), location(내가 인쇄를 요청한 문서, 0~(대기목록길이 - 1))
    1. 인쇄 작업의 중요도는 1~9로 표현하며, 숫자가 클 수록 중요도가 높습니다.
    2. 새롭게 개발한 프린터의 인쇄 작업 수행 방법
        - 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
        - 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
        - 3. 그렇지 않으면 J를 인쇄합니다.

    # 문제 해결 방법
    1. priorities를 순회 하며 새롭게 데이터를 생성합니다. 새로 생성된 데이터는 우선순위와 내가 요청한 작업물인지 여부를 담고있습니다.
    2. 새롭게 데이터를 만들며 할 것은 각 중요도별로 문서가 몇개씩 있는지를 파악하는 것입니다.
    3. 새롭게 데이터를 생성하고 수량이 파악되면 반복문을 실행하며 해당 작업의 중요도보다 높은 중요도의 작업물이 남았는지 확인합니다. 존재한다면 작업물을 마지막으로 보내고, 없다면 인쇄를 합니다.
    4. 반복을 진행하던 중 내가 요청한 작업물이 등장하고 인쇄가 가능하다면 반복된 횟수를 반환합니다.
"""


def solution(priorities=[], location=0):
    answer = 0
    lvNums = [0 for _ in range(10)]
    reqs = []

    for i, priority in enumerate(priorities):
        lvNums[priority] += 1
        reqs.append(
            {"priority": priority, "isMine": True if i == location else False})

    loop = True
    while loop:
        job = reqs.pop(0)
        check = 0
        for i in range(job['priority']+1, 10):
            check += 1 if lvNums[i] != 0 else 0
        if check != 0:
            reqs.append(job)
        else:
            lvNums[job['priority']] -= 1
            answer += 1
            if job['isMine']:
                loop = False

    return answer
