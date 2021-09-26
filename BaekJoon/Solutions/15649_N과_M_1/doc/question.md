# 문제 원문

[https://www.acmicpc.net/problem/15649](https://www.acmicpc.net/problem/15649)

<br><br>

# 문제 해결 단서

1. 자연수 N과 M이 주어집니다.
2. 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열을 출력합니다.
3. 한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력합니다.

<br><br>

# 문제 해결 방법

<br>

## Python

1. N개의 수 중 M개를 선택에 정렬시키는 순열 $_NP_M$ 의 모든 경우를 출력합니다.
2. itertools 모듈에 있는 permutations 메서드를 이용합니다.
3. 결과를 한 줄에 하나씩 출력합니다.
