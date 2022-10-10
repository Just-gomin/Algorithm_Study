"""
    # 문제 해결 단서
    0. 입력 형식 : dartResult(다트게임의 결과 문자열, 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열)
    1. 다트 게임의 로직
        - 다트 게임은 총 3번의 기회로 구성된다.
        - 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
        - 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
        - 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
        - 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
        - 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
        - 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
        - Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
        - 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
    2. 입력된 다트게임의 결과 문자열을 통해 최종 점수를 계산해서 반환합니다.

    # 문제 해결 방법
    1. 문자열을 정규표현식을 이용하여 점수와 영역 및 옵션으로 나눕니다.
    2. 각 스테이지 별로 획득한 점수와 영역, 옵션을 다트게임 로직에 따라 계산합니다.
    3. 계산된 점수들을 모두 더해 반환합니다.
"""
import re


def solution(dartResult=""):
    points = re.findall(r'\d+', dartResult)
    bonus = re.split(r'\d+', dartResult)
    bonus.pop(bonus.index(''))

    for i in range(3):
        newPoint = int(points[i])
        ran = bonus[i] if len(bonus[i]) == 1 else bonus[i][0]
        opt = None if len(bonus[i]) == 1 else bonus[i][1]

        if ran != 'S':
            newPoint **= 2 if ran == 'D' else 3

        if opt != None:
            if opt == '*':
                newPoint *= 2
                if i != 0:
                    points[i-1] *= 2
            else:
                newPoint *= (-1)

        points[i] = newPoint

    return sum(points)
