"""
    # 문제 해결 단서
    0. 각 학생들이 문제의 답을 찍는 방식
        - 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
        - 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
        - 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
    1. 입력형식 : answers(문제의 답안)
    2. 가장 많이 맞추는 학생의 번호 return
    3. 맞은 문제 수가 동일할 경우 해당 학생들 모두 반환합니다.

    # 문제 해결 방안
    1. 학생들의 찍는 방식을 list로 만든다.
    2. 답안의 길이만큼 반복문을 진행하는데, 이때 각 학생이 찍은 답안이 맞다면 학생들이 맞춘 문제의 수를 기록하는 리스트의 정보를 갱신한다.
"""


def solution(answers=[]):
    answer = []
    student1 = [1, 2, 3, 4, 5]
    student2 = [2, 1, 2, 3, 2, 4, 2, 5]
    student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    counter = [0, 0, 0]

    for i in range(len(answers)):
        if answers[i] == student1[i % len(student1)]:
            counter[0] += 1
        if answers[i] == student2[i % len(student2)]:
            counter[1] += 1
        if answers[i] == student3[i % len(student3)]:
            counter[2] += 1

    maxValue = max(counter)

    if maxValue == counter[0]:
        answer.append(1)
    if maxValue == counter[1]:
        answer.append(2)
    if maxValue == counter[2]:
        answer.append(3)
    return answer
