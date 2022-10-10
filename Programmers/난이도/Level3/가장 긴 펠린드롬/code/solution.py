"""
    # 문제 해결 단서
    0. 입력 형식 : s(알파벳 소문자로 구성된 문자열, 길이는 2500이하의 자연수)
    1. 문자열 내에서 앞뒤를 뒤집어도 똑같은 문자열 펠린드롬(Palindrome) 중 가장 긴 것의 길이를 찾아냅니다.
    2. 홀수 길이의 펠린드롬과 짝수 길이의 펠린드롬이 모두 존재할 수 있으므로 두 가지에 대해서 조사합니다.

    # 문제 해결 방법
    1. 홀수 길이의 펠린드롬의 경우 (left= idx - 1, right = idx + 1)로 초기화 하여 left의 문자와 right의 문자가 일치할 때 left는 0쪽으로, right은 문자열의 마지막 쪽으로 향하게 증감하여 두 문자가 다를 때까지 펠린드롬의 길이를 측정합니다.
    2. 홀수 길이의 펠린드롬이 아닌 경우 짝수 길이의 펠린드롬 길이를 측정합니다. (left = idx - 1, right = idx)로 초기화 된 상태이며, left와 right의 이동 방법은 1 과 같습니다.
    3. 홀수 길이의 펠린드롬의 조사 2번당 1번의 짝수 길이 펠린드롬의 조사를 실시 합니다.
"""

def checkP(left=0, right=0, s="" ,length=0):
    pLen = 1 if right - left == 2 else 0
    while left >= 0 and right < length and s[left] == s[right] :
        left -= 1
        right += 1
        pLen += 2
    return pLen

def solution(s=""):
    answer = 1
    length = len(s)
    idx = 0
    
    if length == 2 and s[0] == s[1]:
        return 2

    while(idx < length) :
        left , right = idx - 1, idx + 1
        pld = checkP(left, right, s, length)
        
        if answer < pld:
            answer = pld
        
        left, right = idx-1, idx
        pld = checkP(left, right, s, length)

        if answer < pld:
            answer = pld

        idx += 1

    return answer