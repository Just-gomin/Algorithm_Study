# 문제 원문

[https://www.acmicpc.net/problem/2108](https://www.acmicpc.net/problem/2108)

<br><br>

# 문제 해결 단서

1. N개의 수가 입력됩니다. N은 홀수이며, 500,000이하의 자연수 입니다.
2. 각 정수들의 절댓값은 4,000을 넘지 않습니다.
3. 산술평균, 중앙값, 최빈값, 범위를 출력합니다. 각각의 용어들의 정의는 문제 원문을 참고합니다.

<br><br>

# 문제 해결 방법

<br>

## Python

1. 숫자들을 담을 리스트와 카운팅을 위한 리스트를 생성합니다.
2. 숫자 리스트를 정렬 시켜 산술평균, 중앙값, 범위를 구할 수 있습니다.
3. 카운팅을 위한 리스트를 통해 최빈값을 구할 수 있습니다.
