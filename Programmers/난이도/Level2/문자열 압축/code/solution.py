"""
    # 문제 해결 단서
    0. 입력 형식 : S(알파벳 소문자로만 이루어진 문자열, 길이는 1~1000)
    1. 문자열을 같은 단위로 쪼개어 압축하는 방법 중 가장 짧은 문자열의 길이를 반환합니다.
        - 예를 들어, "ababcdcdababcdcd"의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 2개 단위로 잘라서 압축한다면 "2ab2cd2ab2cd"로 표현할 수 있습니다. 
        다른 방법으로 8개 단위로 잘라서 압축한다면 "2ababcdcd"로 표현할 수 있으며, 이때가 가장 짧게 압축하여 표현할 수 있는 방법입니다.

    # 문제 해결 방법
    1. 1개 부터 s.length/2까지의 단위로 자른 문자열의 길이들을 비교하여 최솟값을 반환합니다.
"""


def compress(origin="", unit_size=0):
    result = ""
    count = 1
    word = ""
    for index in range(0, len(origin), unit_size):
        part = origin[index:index+unit_size]
        if word == part:
            count += 1
        else:
            result += (str(count) + word) if count != 1 else word
            word = part
            count = 1

    result += (str(count) + word) if count != 1 else word

    return result


def solution(s="'"):
    answer = len(s)
    for unit_size in range(1, len(s)//2+1):
        compressed = compress(s, unit_size)
        if len(compressed) < answer:
            answer = len(compressed)
    return answer


ex1 = "aabbaccc"
ex2 = "ababcdcdababcdcd"
ex3 = "abcabcdede"
ex4 = "abcabcabcabcdededededede"
ex5 = "xababcdcdababcdcd"

exs = [ex1, ex2, ex3, ex4, ex5]
for ex in exs:
    print(solution(ex))
