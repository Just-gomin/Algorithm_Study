# for and if 사용
# n, x = map(int, input().split())
# arr = list(map(int, input().split()))

# result = ""

# for num in arr:
#     if num < x:
#         result += str(num) + " "

# result = result.strip()

# print(result)

# 축약형 Solution
n, x = map(int, input().split())
arr = [num for num in input().split() if int(num) < x]

print(" ".join(arr))
