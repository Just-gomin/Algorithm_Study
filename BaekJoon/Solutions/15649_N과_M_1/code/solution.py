import itertools

n, m = map(int, input().split())
numbers = [n for n in range(1, n+1)]
nPm = itertools.permutations(numbers, m)

for premutation in nPm:
    print(" ".join(map(str, premutation)))
