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
