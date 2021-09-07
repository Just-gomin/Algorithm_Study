word = input().lower()

# arr_counter = [0]*26
# ascii_a = ord('a')
# max_count = 0
# basket = []

# for c in word:
#     idx = ord(c)-ascii_a
#     arr_counter[idx] += 1
#     if arr_counter[idx] > max_count:
#         max_count = arr_counter[idx]
#         basket.append(c)
#     elif arr_counter[idx] == max_count:
#         basket.clear()

# if len(basket) > 0:
#     print(basket[0].upper())
# else:
#     print("?")

# 다른 풀이
ascii_a = ord('a')
ascii_z = ord('z')

arr_counter = [word.count(chr(a)) for a in range(ascii_a, ascii_z+1)]

max_count = max(arr_counter)

if arr_counter.count(max_count) > 1:
    print('?')
else:
    print(chr(arr_counter.index(max_count) + ascii_a).upper())
