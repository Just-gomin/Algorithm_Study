"""
문제 설명
정수 n이 매개변수로 주어집니다.
다음 그림과 같이 밑변의 길이와 높이가 n인 삼각형에서 맨 위 꼭짓점부터 반시계 방향으로 달팽이 채우기를 진행한 후, 첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 return 하도록 solution 함수를 완성해주세요.

examples.png

제한사항
n은 1 이상 1,000 이하입니다.
입출력 예
n	result
4	[1,2,9,3,10,8,4,5,6,7]
5	[1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
6	[1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]
입출력 예 설명
입출력 예 #1

문제 예시와 같습니다.
입출력 예 #2

문제 예시와 같습니다.
입출력 예 #3

문제 예시와 같습니다.

"""


def solution(n):
    answer = []
    pyramid = [[] for i in range(0, n)]
    nums_range = (n*(n+1))/2
    stair = n
    num = 1
    go = 1
    index = 0
    inputIndex = 0
    while num < nums_range+1:
        if index + 1 == stair and go == 1:
            last = stair - len(pyramid[index])
            for i in range(0, last):
                pyramid[index].insert(inputIndex+i, num)
                num += 1
            stair -= 1
            inputIndex += 1
            go *= (-1)
        else:
            pyramid[index].append(num) if len(pyramid[index]) <= 1 else pyramid[index].insert(
                inputIndex, num)
            num += 1
            if len(pyramid[index+go]) == index+go+1:
                go *= (-1)
        index += go
    for i in range(0, n):
        print(" "*(n-i), pyramid[i])
    for x in pyramid:
        for i in range(0, len(x)):
            answer.append(x[i])
    return answer


solution(10)
