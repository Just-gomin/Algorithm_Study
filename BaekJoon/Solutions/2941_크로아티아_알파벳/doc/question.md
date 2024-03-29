# 문제 원문

[https://www.acmicpc.net/problem/2941](https://www.acmicpc.net/problem/2941)

<br><br>

# 문제 해결 단서

1. 문제 원문의 크로아티아 알파벳의 대체 입력을 확인합니다.
2. 주어진 입력은 알파벳 소문자와 '-', '='로만 이루어져있습니다.
3. 주어진 입력이 몇개의 크로아티아 알파벳으로 이루어져있는지 확인합니다.

<br><br>

# 문제 해결 방법

<br>

## Python

1. 주어진 입력에 크로아티아 알파벳 대체문자들을 count를 사용하여 등장 횟수를 파악합니다.
2. 주어진 입력의 길이에서 크로아티아 알파벳들의 등장 횟수를 차감한 후 반환합니다.
3. 이 경우 "dz="과 "z="이 중복되어 세질 수 있다는 생각이 들 수 있습니다.
   만약 주어진 입력에 "dz="이 존재한다면 "dz="과 "z="에 의해 2번 등장한 것으로 수를 셀 것이고 길이가 3이기 때문에 2를 빼고 나면 1이 남아 한 개의 알파벳으로 취급되어집니다.
