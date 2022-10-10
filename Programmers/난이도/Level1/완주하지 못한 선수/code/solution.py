"""

    # 문제 해결 단서
    0. 입력 형식 : [Participant], [Completion] ( 1 <= Participant <= 100000 , Completion = Participant - 1)
    1. 참가자의 이름은 1~20개의 알파벳 소문자로 이루어져있습니다.
    2. 참가자 중 동명이인이 있을 수 있습니다.

    # 문제 해결
    1. Participant 와 Completion을 정렬합니다.
    2. 둘의 길이 차이가 1이므로, 하나씩 비교하며 서로 다른 이름이 나올 떄의 Participant의 값을 반환합니다.

"""


def solution(participant=[], completion=[]):
    participant.sort()
    completion.sort()
    for i in range(len(completion)):
        if participant[i] != completion[i]:
            return participant[i]
    return participant[len(participant)-1]
