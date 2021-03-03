"""
    # 문제 해결 단서
    0. 입력 형식 : n(지도의 한 변의 크기, 1~16), arr1,arr2(길이가 n인 정수 배열)
        - arr1과 arr2 정수 배열의 각 원소x를 이진수로 변환했을 떄의 길이는 n이하입니다. 즉, 0<= x <= 2^n - 1
    1. 지도 암호 해독 방법
        - 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
        - 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
        - "지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
        - 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.
    2. ex)
        1  = 1(2)     => "    #"
        9  = 1001(2)  => " #  #"
        18 = 10010(2) => "#  # "   
    3. 해독된 지도를 반환합니다.

    # 문제 해결 방법
    1. arr1과 arr2의 원소들을 모두 2진수로 변환한 뒤 지도로 변환합니다.
    2. arr1과 arr2의 원소들을 비교하여 지도를 생성하여 반환합니다.
"""


def makeMap(n, num=0):
    result = ""
    while num > 0:
        result = (" " if num % 2 == 0 else "#") + result
        num = num // 2
    if len(result) < n:
        result = " " * (n-len(result)) + result
    return result


def solution(n=0, arr1=[], arr2=[]):
    answer = []
    for a1, a2 in zip(arr1, arr2):
        bin1 = makeMap(n, a1)
        bin2 = makeMap(n, a2)
        line = ""
        for i in range(n):
            line += " " if bin1[i] == " " and bin2[i] == " " else "#"
        answer.append(line)
    return answer
