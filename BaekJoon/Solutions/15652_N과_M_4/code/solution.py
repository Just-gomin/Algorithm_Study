from sys import stdin, stdout

n, m = map(int, stdin.readline().split())
combination = []


def makeCombi(start, depth):
    if depth == m:
        stdout.write(" ".join(map(str, combination)) + "\n")
        return
    for num in range(start, n+1):
        combination.append(num)
        makeCombi(num, depth + 1)
        combination.pop()


makeCombi(1, 0)
