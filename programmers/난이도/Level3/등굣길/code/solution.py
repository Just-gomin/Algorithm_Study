"""
    # 문제 해결 단서
    0. 입력 형식 : m(가로길이), n(세로길이), puddles(물에 잠긴 지점, 0~10개)
        - 가로 세로의 길이는 1~100
    1. (1,1) 지점에 집, (m,n) 지점에 학교가 위치합니다.
    2. 오른쪽과 아래쪽으로만 움직여 집에서 학교까지 갈 수 있는 최단경로의 개수를 1,000,000,007로 나눈 나머지를 반환합니다.

    # 문제 해결 방법
    1. m × n 크기의 리스트를 0으로 초기화합니다.
    2. puddles에 담긴 지점들을 -1로 초기화합니다.
    3. 0행 과 0열을 모두 1로 초기화 하는데, 그 중 -1이 발견되면 해당 지점 뒤 모두 -1로 초기화합니다.
    4. (i,j)에 대하여 -1이 아닌 (i-1,j)와 (i,j-1)을 더한 값을 입력합니다.
    5. (m-1,n-1)의 값을 반환합니다.

    # 문제에선 좌표로 주어졌지만, 알고리즘을 짤때는 리스트를 이용하기 때문에 (행,열)=>[열][행] 으로 생각해야 합니다.
"""


def solution(m=0, n=0, puddles=[]):
    loads = [[0 for _ in range(m)] for _ in range(n)]
    for puddle in puddles:
        loads[puddle[1]-1][puddle[0]-1] = -1

    isPuddle = False
    for j in range(m):
        if loads[0][j] == -1:
            isPuddle = True
        loads[0][j] = 0 if isPuddle else 1

    isPuddle = False
    for i in range(n):
        if loads[i][0] == -1:
            isPuddle = True
        loads[i][0] = 0 if isPuddle else 1

    for i in range(1, n):
        for j in range(1, m):
            if loads[i][j] != -1:
                up = 0
                if i-1 in range(n):
                    up = loads[i-1][j]
                left = 0
                if j-1 in range(m):
                    left = loads[i][j-1]
                loads[i][j] += up % 1000000007 if up != -1 else 0
                loads[i][j] += left % 1000000007 if left != -1 else 0

    return loads[n-1][m-1] % 1000000007


print(solution(4, 3, [[2, 2]]))
