"""
    # 학습 자료 : https://hongcoding.tistory.com/m/46
"""

n = int(input())

# Solution1
# result =[n]
# count = 0

# while 1 not in result:
#     temp =[]
#     count += 1
#     for num in result:
#         if num % 3 == 0:
#             temp.append(num/3)
#         if num % 2 == 0:
#             temp.append(num/2)
#         temp.append(num-1)

#     result = temp[:]

# print(count)


# Solution2
count = [0] * (n+1)

for i in range(2, n+1):
    count[i] = count[i-1]+1

    if i % 2 == 0:
        count[i] = min(count[i], count[i//2]+1)
    if i % 3 == 0:
        count[i] = min(count[i], count[i//3]+1)

print(count[n])
