s = list(input())
ascii_A = ord('a')
alphabets = [-1]*26

for i, c in enumerate(s):
    alpha = ord(c) - ascii_A
    loc = alphabets[alpha]

    if loc == -1:
        alphabets[alpha] = i

print(' '.join(map(str, alphabets)))
