# 문제 원문

[https://www.acmicpc.net/problem/15650](https://www.acmicpc.net/problem/15650)

<br><br>

# 문제 해결 단서

1. 자연수 N과 M이 주어집니다.
2. 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열을 출력합니다. 고른 수열은 오름차순이여야 합니다.
3. 한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력합니다.

<br><br>

# 문제 해결 방법

<br>

## Python

1. N개의 수 중 M개를 선택하는 조합 $_NC_M$ 의 모든 경우를 출력합니다.
2. itertools 모듈에 있는 combinations 메서드를 이용합니다.
3. 결과를 한 줄에 하나씩 출력합니다.
