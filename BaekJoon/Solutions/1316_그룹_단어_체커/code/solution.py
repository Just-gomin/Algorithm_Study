import sys

n = int(sys.stdin.readline())

ans = 0

for _ in range(n):
    word = sys.stdin.readline()
    positions = {}
    is_group_word = True

    for i, c in enumerate(word):
        if c in positions and i - positions[c] > 1:
            is_group_word = False
        else:
            positions[c] = i

    if is_group_word:
        ans += 1

print(ans)
