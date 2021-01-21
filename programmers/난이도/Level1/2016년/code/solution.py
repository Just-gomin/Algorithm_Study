"""
    # 문제 해결 단서
    0. 입력 형식 : a(월, 1 ~ 12), b(일, 1 ~ 31)
    1. 2016년 1월 1일은 금요일(FRI)입니다.
    2. 요일은 [SUN,MON,TUE,WED,THU,FRI,SAT] 입니다.
    3. a,b가 주어지면, 해당 날짜의 요일을 출력합니다.
    4. 2016년은 윤년입니다.

    # 문제 해결 방안
    1. 주어진 a,b 값에 따라 1월 1일로 부터 일 수의 차이를 구합니다.
    2. 해당 일 수에 따라 요일을 계산합니다.
"""


def solution(a=1, b=1):
    days = ["FRI", "SAT", "SUN", 'MON', 'TUE', 'WED', 'THU']
    diff = 0
    if a >= 2:
        for month in range(1, a):
            if month <= 7:
                if month % 2 == 1:
                    diff += 31
                elif month == 2:
                    diff += 29
                else:
                    diff += 30
            else:
                if month % 2 == 1:
                    diff += 30
                else:
                    diff += 31
    diff += b - 1
    return days[diff % 7]
