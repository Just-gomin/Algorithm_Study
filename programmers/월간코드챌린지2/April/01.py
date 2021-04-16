def solution(absolutes, signs):
    answer = 0
    for num, sign in zip(absolutes, signs):
        answer += num if sign else -num
    return answer