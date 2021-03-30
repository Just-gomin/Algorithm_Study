"""
    # 문제 해결 단서
    0. 입력 형식 : n(양의 정수, 1~1000)
    1. 밑변의 길이와 높이가 n인 삼각형에서 맨 위 꼭짓점부터 반시계 방향으로 달팽이 채우기를 진행합니다.
    2. 채우기를 진행한 후, 첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 반환합니다.

    # 문제 해결 방법
    1. 주어진 n을 통해서 넣어야할 숫자의 최대치를 구합니다.
    2. 삽입을 진행할 위치, 진행방향, 바닥과 천장, 현재 번호, 현재 삽입할 층의 변수들을 생성합니다.
    3. 삽입할 번호가 최대치일 때까지 반복문을 수행합니다.
    4. 현재 진행 방향에 따라 달리 진행을 합니다.
    5. 아래 방향이며, 숫자를 다 채워야할 바닥 층이라면 숫자를 모두 채웁니다.
    6. 윗 방향이며, 숫자가 다 채워진 천장이라면 다시 아래로 진행합니다.
    7. 삼각형에 숫자를 삽입하는 위치는 위로 올라온 뒤 다시 내려갈 때 수정합니다.

"""


def solution(n=0):
    ceil = 0
    floor = n - 1
    direction = 1
    insert_index = 0
    curr_floor = 0
    curr_num = 1
    max_num = n*(n+1) / 2
    triangle = [[] for _ in range(n)]

    while curr_num <= max_num:
        if direction == 1:
            if curr_floor == floor:
                ins = insert_index
                while len(triangle[curr_floor]) < floor + 1:
                    triangle[curr_floor].insert(ins, curr_num)
                    curr_num += 1
                    ins += 1
                direction *= -1
                insert_index += 1
                floor -= 1
            else:
                triangle[curr_floor].insert(insert_index, curr_num)
                curr_num += 1

        else:
            triangle[curr_floor].insert(insert_index, curr_num)
            curr_num += 1
            if curr_floor - 1 == ceil:
                ceil = curr_floor+1
                direction *= -1
        curr_floor += direction

    return [num for line in triangle for num in line]


print(solution(10))
