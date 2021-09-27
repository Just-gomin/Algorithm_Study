import itertools
from sys import stdin, stdout

n, m = map(int, stdin.readline().split())
numbers = [num for num in range(1, n+1)]

products = itertools.product(numbers, repeat=m)

for product in products:
    stdout.write(" ".join(map(str, product)) + "\n")
