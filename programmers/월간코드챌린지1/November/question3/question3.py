def solution(a):
    answer = -1
    setA = set(a)
    checker = [0 for _ in range(max(setA)+1)]
    if len(a) < 3 or len(setA) == len(a):
        answer = 0
    else:
        for n in a:
            checker[n] += 1
        maxi = max(checker)
        if maxi >= len(a)/2:
            if len(a) % 2 == 0:
                answer = len(a)-2
            else:
                answer = len(a)-1
        else:
            answer = maxi*2
    return answer


print(solution([0, 3, 3, 0, 7, 2, 0, 2, 2, 0]))
