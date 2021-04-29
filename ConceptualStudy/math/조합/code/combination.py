def pickData(result = [], cur = [], remain = [], pick_num = 0):
    if pick_num <= 0 :
        result.append(cur)
        return
    elif len(remain) == 0 :
        return
        
    t_cur = cur[:]
    t_remain = remain[:]

    cur_item = t_remain.pop(0)
    t_cur.append(cur_item)

    pickData(result, t_cur, t_remain, pick_num - 1)
    pickData(result, cur, t_remain, pick_num)

def combination(remain=[], pick_num = 0):
    result = []
    pickData(result, [], remain, pick_num)
    return result

if __name__ == "__main__":
    d = [1,2,3,4,5]
    picked = combination(d,2)
    print(picked)