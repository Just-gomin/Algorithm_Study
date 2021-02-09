"""
    # 문제 해결 단서
    0. 입력 형식 : s(영문 소문자, 대문자 및 공백으로 이루어진 문자열, 길이는 8000이하), n(1~25의 자연수)
    1. 알파벳을 n만큼 이동했을 때의 알파벳으로 치환합니다. ex) s="AB", n=1 => s'="BC" 
    2. 공백은 n만큼 이동해도 공백입니다.

    # 문제 해결 방법
    1. 알파벳인 경우 아스키코드로 변환한 뒤 n을 더해 반환합니다.
    2. 공백인 경우는 그대로 반환합니다.
"""


def solution(s="", n=0):
    answer = ""
    for c in s:
        if c == " ":
            answer += " "
        elif "a" <= c and c <= "z":
            answer += chr(ord(c)+n if ord(c)+n <= ord("z")
                          else ord(c) + n - ord('z')+ord('a')-1)
        elif "A" <= c and c <= "Z":
            answer += chr(ord(c)+n if ord(c)+n <= ord("Z")
                          else ord(c) + n - ord('Z')+ord('A')-1)
    return answer


def solution2(s="", n=0):
    s = list(s)
    for i in range(len(s)):
        if s[i].islower():
            s[i] = chr((ord(s[i]) + n - ord('a')) % 26 + ord('a'))
        elif s[i].isupper():
            s[i] = chr((ord(s[i]) + n - ord('A')) % 26 + ord('A'))
    return "".join(s)
