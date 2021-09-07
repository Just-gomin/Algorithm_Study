def isHan(num):
    str_num = str(num)
    pre_diff = int(str_num[0]) - int(str_num[1])

    for i in range(2, len(str_num)):
        cur_diff = int(str_num[i-1]) - int(str_num[i])

        if cur_diff != pre_diff:
            return False

        pre_diff = cur_diff

    return True


n = int(input())

if n < 100:
    print(n)
else:
    result = 99

    for val in range(100, n+1):
        if isHan(val):
            result += 1

    print(result)
