"""
    # 문제 해결 단서
    0. 입력 형식 : gems(보석 진열 상태)
    1. 진열된 모든 종류의 보석을 적어도 1개 이상 포함하는 가장 짧은 구간을 찾습니다.
    2. 보석은 진열대의 특정 범위의 물건을 모두 구매합니다.(특정 위치를 건너 뛰지 않습니다.)
    3. Set 자료형을 이용해 중복이 없이 보석의 종류를 알아낼 수 있습니다.

    # 문제 해결 방법
    1. Set을 통해 보석의 종류들을 알아냅니다.
    2. 진열장 기준 1번(인덱스 기준 0번) 부터 시작하여 모든 보석을 구매하는 가장 짧은 구간을 탐색합니다.
"""


def solution(gems=[]):
    gem_list = set(gems)
    start = 0
    min_range={'length':len(gems) + 1, 'range': [1,1]}

    while start < len(gems) - len(gem_list):
        remain = list(gem_list)
        i = start

        while i < len(gems):
            if gems[i] in remain:
                remain.remove(gems[i])
            
            if len(remain) == 0:
                if min_range['length'] > i - start + 1:
                    min_range['length'] = i - start + 1
                    min_range['range'] = [start + 1, i + 1]
                break

            i += 1
        
        start += 1
    
    return  min_range['range']