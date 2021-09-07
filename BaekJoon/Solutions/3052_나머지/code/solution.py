import sys

nums = list(map(int, sys.stdin))
remains = [0 for _ in range(42)]

for n in nums:
    remains[n % 42] += 1

result = 0

for r in remains:
    if r != 0:
        result += 1

print(result)

# set을 이용하는 방법
remains = set([n % 42 for n in nums])

print(len(remains))
