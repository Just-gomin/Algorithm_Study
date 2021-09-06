n = input()
nums = input()
result = 0

for n in nums:
    result += int(n)

print(result)

# 다른 풀이
# n = input()
# result = sum(map(int, list(input())))
# print(result)
