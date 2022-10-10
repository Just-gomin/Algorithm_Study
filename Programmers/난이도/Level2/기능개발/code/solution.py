"""
    # 문제 해결 단서
    0. 입력 형식 : progresses(기능 개발 진도 배열, 100개 이하), speeds(작업 속도 배열, 100개 이하)
        - 작업 진도는 100 미만의 자연수 입니다.
        - 작업 속도는 100 이하의 자연수 입니다.
        - progresses와 speeds의 길이는 동일합니다.
    1. 기능 개선 작업을 수행 중이며, 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
    2. 각 기능의 개발 속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발 될 수 있으나 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.
    3. 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. ex) 95%의 진도율인 작업의 개발 속도가 하루에 4%이면 2일 뒤에 배포가 이루어집니다.
    4. progresses와 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는 지를 반환합니다.

    # 문제 해결 방법
    1. 작업을 순회하며 배포까지 걸리는 일수를 계산합니다.
    2. 기준일을 설정하여 기준일보다 작다면 배포할 작업의 수를 증가시킵니다.
    3. 기준일보다 크다면 기준일을 갱신하고 현재까지 있던 배포 작업의 수를 배포 배열에 추가합니다.
    4. 모든 작업을 순회할 때까지 반복합니다.
"""
import math


def solution(progresses=[], speeds=[]):
    answer = []
    works = len(progresses)
    standardsDays = math.ceil((100-progresses[0])/speeds[0])
    deploys = 0

    for i in range(works):
        workDays = math.ceil((100-progresses[i])/speeds[i])
        if workDays > standardsDays:
            standardsDays = workDays
            answer.append(deploys)
            deploys = 1
        else:
            deploys += 1
    answer.append(deploys)

    return answer
