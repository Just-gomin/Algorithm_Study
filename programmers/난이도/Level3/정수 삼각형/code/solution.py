"""
    # 문제 해결 단서
    0. 입력 형식 : triangle(삼각형, 각 원소는 0 ~ 9999 이하의 정수, 높이는 1 이상 500 이하입니다.)
        - 삼각형은 한층이 높아 질 수록 숫자가 하나씩 증가합니다.
    1. 삼각형의 꼭대기 부터 바닥까지 이어지는 경로 중, 거쳐간 숫자의 합이 가장 큰 경우를 찾습니다.
    2. 아래 칸으로 이동할 때는 오른쪽 혹은 왼쪽 대각선 방향으로만 이동이 가능합니다.
    
    # 문제 해결 방안
    1. 각 층의 원소들로 하여금, 바로 위층으로 부터 연결될 수 있는 수들 중 가장 큰 수를 자신과 더하여 값을 갱신합니다.
    2. 바닥까지 1의 연산을 진행해, 바닥에 있는 원소들 중 가장 큰 값을 반환합니다.
"""


def solution(triangle=[]):
    for i in range(len(triangle)):
        for j in range(len(triangle[i])):
            if i != 0:
                if j == 0:
                    triangle[i][0] += triangle[i-1][0]
                elif j == len(triangle[i])-1:
                    triangle[i][j] += triangle[i-1][j-1]
                else:
                    triangle[i][j] += triangle[i-1][j] if triangle[i -
                                                                   1][j] > triangle[i-1][j-1] else triangle[i-1][j-1]
    return max(triangle[len(triangle)-1])
