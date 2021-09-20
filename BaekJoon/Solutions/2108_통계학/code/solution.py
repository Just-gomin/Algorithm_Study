from sys import stdin, stdout
from collections import deque

n = int(stdin.readline())

nums = deque()
counting = deque([0 for _ in range(8002)])

for _ in range(n):
    num = int(stdin.readline())
    nums.append(num)
    counting[num + 4000] += 1

nums = sorted(nums)

basket = deque()
most_often = 0

for num, count in enumerate(counting):
    if count > most_often:
        most_often = count
        basket.clear()
        basket.append(num - 4000)
    elif count == most_often:
        basket.append(num - 4000)

basket = sorted(basket)

mean = round(sum(nums)/n)
mid = nums[n//2]
mode = basket[1] if len(basket) > 1 else basket[0]
input_range = nums[n-1] - nums[0]

stdout.write("{0}\n{1}\n{2}\n{3}".format(mean, mid, mode, input_range))
