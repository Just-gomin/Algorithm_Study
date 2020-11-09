"""
    # 문제 설명
    0과 1로 이루어진 2n x 2n 크기의 2차원 정수 배열 arr이 있습니다. 당신은 이 arr을 쿼드 트리와 같은 방식으로 압축하고자 합니다. 구체적인 방식은 다음과 같습니다.

    당신이 압축하고자 하는 특정 영역을 S라고 정의합니다.
    만약 S 내부에 있는 모든 수가 같은 값이라면, S를 해당 수 하나로 압축시킵니다.
    그렇지 않다면, S를 정확히 4개의 균일한 정사각형 영역(입출력 예를 참고해주시기 바랍니다.)으로 쪼갠 뒤, 각 정사각형 영역에 대해 같은 방식의 압축을 시도합니다.
    arr이 매개변수로 주어집니다. 위와 같은 방식으로 arr을 압축했을 때, 배열에 최종적으로 남는 0의 개수와 1의 개수를 배열에 담아서 return 하도록 solution 함수를 완성해주세요.

    # 제한사항
    arr의 행의 개수는 1 이상 1024 이하이며, 2의 거듭 제곱수 형태를 하고 있습니다. 즉, arr의 행의 개수는 1, 2, 4, 8, ..., 1024 중 하나입니다.
    arr의 각 행의 길이는 arr의 행의 개수와 같습니다. 즉, arr은 정사각형 배열입니다.
    arr의 각 행에 있는 모든 값은 0 또는 1 입니다.
    
    # 입출력 예
    arr	result
    [[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]	[4,9]
    [[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]]	[10,15]
    
    # 입출력 예 설명
    입출력 예 #1

    다음 그림은 주어진 arr을 압축하는 과정을 나타낸 것입니다.
    ex1.png
    최종 압축 결과에 0이 4개, 1이 9개 있으므로, [4,9]를 return 해야 합니다.
    입출력 예 #2

    다음 그림은 주어진 arr을 압축하는 과정을 나타낸 것입니다.
    ex2.png
    최종 압축 결과에 0이 10개, 1이 15개 있으므로, [10,15]를 return 해야 합니다.
"""


glob_arr = []


def compress(length, row, col):
    counter = [0, 0]
    if(length != 2):
        half_len = length/2
        quad1 = compress(half_len, row, col)
        quad2 = compress(half_len, row+half_len, col)
        quad3 = compress(half_len, row, col+half_len)
        quad4 = compress(half_len, row+half_len, col+half_len)
        if(quad1 == quad2 and quad2 == quad3 and quad3 == quad4):
            if(quad1 == [0, 1]):
                counter = [0, 1]
            elif(quad1 == [1, 0]):
                counter = [1, 0]
            else:
                counter = [quad1[0]*4, quad1[1]*4]
        else:
            counter[0] = quad1[0] + quad2[0] + quad3[0] + quad4[0]
            counter[1] = quad1[1] + quad2[1] + quad3[1] + quad4[1]
    else:
        for i in range(2):
            for j in range(2):
                counter[glob_arr[int(row+i)][int(col+j)]] += 1
        if(counter == [4, 0]):
            counter = [1, 0]
        elif(counter == [0, 4]):
            counter = [0, 1]
    return counter


def solution(arr):
    global glob_arr
    glob_arr = arr
    answer = compress(len(arr), 0, 0)
    return answer


print(solution([[1, 1, 0, 0], [1, 0, 0, 0], [1, 0, 0, 1], [1, 1, 1, 1]]))
