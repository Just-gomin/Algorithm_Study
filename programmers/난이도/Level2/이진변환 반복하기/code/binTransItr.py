def solution(s):
    cI, c0 = 0, 0
    while s != '1':
        cI += 1
        ones = s.count("1")
        c0 += len(s) - ones
        s = bin(ones)[2:]
    return [cI, c0]
