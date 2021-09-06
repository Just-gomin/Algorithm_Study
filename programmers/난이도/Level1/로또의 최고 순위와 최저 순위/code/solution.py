def solution(lottos, win_nums):
    lotto_map = [0]*45
    for num in win_nums:
        lotto_map[num-1] = 1

    zero_nums = lottos.count(0)

    rights = 0
    for l in lottos:
        if l != 0 and lotto_map[l-1] == 1:
            rights += 1

    lowest = 6 if rights < 2 else 7 - rights
    highest = 6 if rights + zero_nums < 2 else 7 - rights - zero_nums

    return [highest, lowest]
