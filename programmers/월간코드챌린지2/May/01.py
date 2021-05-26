def solution(left, right):
    answer = 0
    for num in range(left, right + 1):
        denom = [i for i in range(1, int(num/2) + 1) if num%i == 0]
        if (len(denom) + 1) %2 == 0:
            answer += num
        else :
            answer -= num
    return answer