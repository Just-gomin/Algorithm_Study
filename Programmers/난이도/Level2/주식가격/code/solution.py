"""
    # 문제 해결 단서
    0. 입력 형식 : prices(주식가격 배열, 1이상 10000이하 자연수 길이)
        - 주식 가격은 초단위로 기록되었습니다.
        - 1초부터 시작
    1. prices를 통해 가격이 떨어지지 않은 기간은 몇초인지 반환합니다.

    # 문제 해결 방법
    1. prices를 순회하며 price들의 입력 순서와 가격, 떨어지지 않은 시간 정보를 갖는 node를 생성하고 배열에 담습니다.
    2. 떨어지지 않는 가격들을 담은 배열에 대해 현재 가격과 비교합니다.
    3. 가격이 떨어졌다면 answer배열에 시간을 기록합니다.
    4. 가격이 올랐다면 시간을 1 증가시키고, 배열을 갱신해줍니다.
"""


def solution(prices=[]):
    answer = [0 for _ in range(len(prices))]
    nonDesc = []

    def makeNode(index, price):
        return {'index': index, 'price': price, 'time': 0}

    for i, price in enumerate(prices):
        temp = []
        for node in nonDesc:
            if node['price'] <= price:
                node['time'] += 1
                temp.append(node)
            else:
                answer[node['index']] = node['time'] + 1

        nonDesc = temp
        nonDesc.append(makeNode(i, price))

    for node in nonDesc:
        answer[node['index']] = node['time']

    return answer


ex1 = [1, 2, 3, 2, 3]
print(solution(ex1))
