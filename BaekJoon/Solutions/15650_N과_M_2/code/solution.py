import itertools

n, m = map(int, input().split())
numbers = [n for n in range(1, n+1)]
picked = itertools.combinations(numbers, m)

for combination in picked:
    print(" ".join(map(str, combination)))
