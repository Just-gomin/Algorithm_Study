"""
    # 문제 해결 단서
    0. 입력 형식 : 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve
    1. 자신의 번호를 기준으로 바로 앞 혹은 뒤 학생의 체육복만을 빌리거나 빌려줄 수 있습니다.

    # 문제 해결 방법
    1. 학생의 수만 큼 list를 만들고, 1로 초기화 합니다.
    2. reserve list에 있는 학생들은 2로 수를 증가 시킵니다.
    3. lost에 담긴 학생들은 1씩 감소시킵니다.
    4. list를 한번 탐색하며, 도난 당한 학생이 있는 경우, 앞 뒤로 여벌이 남아 있는 학생이 있는지 확인하여 체육복을 빌리도록 합니다.
    5. 체육복을 갖은 학생의 수를 셉니다.
"""


def solution(n=0, lost=[], reserve=[]):
    result = 0
    gym_suit = [1 for i in range(n)]
    for num in reserve:
        gym_suit[num-1] += 1
    for num in lost:
        gym_suit[num-1] -= 1
    for index, value in enumerate(gym_suit):
        if value == 0:
            if(index > 0 and gym_suit[index-1] == 2):
                gym_suit[index-1] = 1
                gym_suit[index] = 1
                result += 1
            elif(index < n-1 and gym_suit[index+1] == 2):
                gym_suit[index+1] = 1
                gym_suit[index] = 1
                result += 1
        else:
            result += 1
    return result


example1 = solution(5, [2, 4], [1, 3, 5])  # result : 5
print(example1)
example2 = solution(5, [2, 4], [3])  # result : 4
print(example2)
