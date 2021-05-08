"""
    # 문제 해결 단서
    0. 입력 형식 : gems(보석 진열 상태)
    1. 진열된 모든 종류의 보석을 적어도 1개 이상 포함하는 가장 짧은 구간을 찾습니다.
    2. 보석은 진열대의 특정 범위의 물건을 모두 구매합니다.(특정 위치를 건너 뛰지 않습니다.)
    3. Set 자료형을 이용해 중복이 없이 보석의 종류를 알아낼 수 있습니다.

    # 문제 해결 방법
    1. Set을 통해 보석의 종류들을 알아냅니다.
    2. 진열대를 순회하며, {"보석":보석 위치 , ...} 와 같은 형의 바구니에 담으며 기록합니다.
    3. 바구니의 길이가 보석의 종류와 같으면 해당 구간과 길이를 저장합니다.
    4. 진열대의 마지막까지 진행하며 가장 짧은 구간을 탐색합니다.

    # 효율성 마지막 테스트 케이스를 통과하지 못했습니다.
"""


def solution(gems=[]):
    gem_list = set(gems)

    if len(gem_list) == len(gems):
        return [1, len(gems)]

    basket = {}
    min_info = {'length':len(gems)+1, 'section':[1,1]}

    for i, gem in enumerate(gems):
        if gem in basket:
            del basket[gem]

        basket[gem] = i

        if len(basket) == len(gem_list):
            pos = list(basket.values())
            start = pos[0]
            fin = pos[-1]

            if min_info['length'] > fin - start - 1:
                min_info['length'] = fin - start - 1
                min_info['section'] = [start + 1, fin + 1]
    
    return min_info['section']


