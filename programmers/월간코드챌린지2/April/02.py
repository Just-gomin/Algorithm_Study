def solution(s):
    answer = 0
    leftP = ['(','{','[']
    for _ in range(len(s)):
        stack = []
        rightP = []
        for i in range(len(s)):
            p = s[i]
            if p in leftP:
                stack.append(p)
            else:
                if len(stack) != 0:
                    if p == ')':
                        rmdata = stack.pop()
                        if rmdata == '(':
                            rightP.append(['(',')'])
                    elif p == '}':
                        rmdata = stack.pop()
                        if rmdata == '{':
                            rightP.append(['{','}'])
                    elif p == ']':
                        rmdata = stack.pop()
                        if rmdata == '[':
                            rightP.append(['[',']'])
                else :
                    break
        
        if len(rightP) == len(s)/2:
            answer += 1

        s = s[1:] + s[0]
    
    return answer