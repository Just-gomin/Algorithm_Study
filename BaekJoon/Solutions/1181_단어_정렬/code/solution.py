from functools import cmp_to_key
from sys import stdin, stdout


def wordCompare(x, y):
    if len(x) < len(y):
        return -1
    elif len(x) == len(y):
        if x < y:
            return -1
        else:
            return 1
    else:
        return 1


n = int(stdin.readline())
words = list(set([stdin.readline().rstrip() for _ in range(n)]))

words.sort(key=cmp_to_key(wordCompare))

stdout.writelines("\n".join(words))
