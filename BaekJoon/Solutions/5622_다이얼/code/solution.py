phone = {}

for c in range(26):
    if c + ord('A') < ord('S'):
        phone[chr(c+ord('A'))] = (c)//3 + 3
    elif c+ord('A') == ord('S'):
        phone['S'] = 8
    elif c+ord('A') >= ord('T') and c + ord('A') <= ord('V'):
        phone[chr(c+ord('A'))] = 9
    else:
        phone[chr(c+ord('A'))] = 10

word = input()

total_time = 0

for c in word:
    total_time += phone[c]

print(total_time)
