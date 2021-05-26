def solution(numbers):
    answer = []
    for num in numbers:
        
        if num < 7 :
            answer.append(num+1)
        else:
            binN = str(format(num, "b"))

            if binN == '1'*len(binN):
                answer.append(int("10" + "1"*(len(binN)-1), 2))
            else:
                i = len(binN)-1
                while i > 0:
                    tester =  binN[i - 1] + binN[i]
                    if tester == "00" :
                        temp = binN[:i-1] + "01" + binN[i+1:]
                        answer.append(int(temp,2))
                        break
                    elif tester == "01" :
                        temp = binN[:i-1] + "10" + binN[i+1:]
                        answer.append(int(temp,2))
                        break
                    elif tester == "10":
                        temp = binN[0:i-1] + "11" + binN[i+1:]
                        answer.append(int(temp,2))
                        break
                    i -= 1

    return answer


print(solution([3,8,13,14,15,100]))