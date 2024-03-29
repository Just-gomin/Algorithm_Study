# 문제 Link: https://www.acmicpc.net/problem/2753

# 단서
# 1. 연도가 주어졌을 때, 윤년이면 1, 아니라면 0을 출력합니다.
# 2. 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때 윤년이라 합니다.

# 해결 방법
# 1. input 함수를 사용하여 연도를 입력 받습니다.
# 2. 주어진 조건을 if와 elif, else를 이용하여 표현합니다.
# 3. print를 이용해 결과를 출력합니다.

year = int(input())

if year % 4 == 0:
    if year % 100 == 0:
        if year % 400 == 0:
            print(1)
        else:
            print(0)
    else:
        print(1)
else:
    print(0)
