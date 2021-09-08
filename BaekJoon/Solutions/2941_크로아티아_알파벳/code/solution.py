# 코딩 with 한글
# 입력 = input
# 출력 = print
# 길이 = len
# 맵 = map
# 합 = sum

# 크로아티아_알파벳 = ("c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z=")
# 단어 = 입력()

# 출력(길이(단어) - 합(맵(단어.count, 크로아티아_알파벳)))

croati_alphabet = ("c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z=")

word = input()

print(len(word) - sum(map(word.count, croati_alphabet)))
