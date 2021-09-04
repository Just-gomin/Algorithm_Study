import sys

counter = [0 for _ in range(10)]
a, b, c = map(int, sys.stdin)

result = str(a*b*c)

for i in result:
    counter[int(i)] += 1

for c in counter:
    print(c)

# 나머지 연산을 이용하는 방법
# result = a*b*c

# while result > 0:
#     counter[result % 10] += 1
#     result = result // 10
