import sys

input = sys.stdin.readline()

while input:
    a, b = map(int, input.split())
    print(a+b)

    input = sys.stdin.readline()


# for문을 이용한 풀이

for line in sys.stdin:
    a, b = map(int, line.split())
    print(a+b)
