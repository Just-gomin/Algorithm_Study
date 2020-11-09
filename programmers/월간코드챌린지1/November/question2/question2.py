def makeBin(len):
    result = []
    while len != 0:
        if len % 2 == 1:
            result.append("1")
            len = (len-1)/2
        else:
            result.append("0")
            len = len/2
    return result


def solution(s):
    answer = []
    x = s[:]
    zero_count = 0
    itr_count = 0
    if x == "1":
        answer = [0, 0]
    else:
        while x != "1":
            temp = []
            itr_count += 1
            for i in x:
                if i == "1":
                    temp.append("1")
                else:
                    zero_count += 1
            x = "".join(makeBin(len(temp)))
    answer = [itr_count, zero_count]
    return answer
