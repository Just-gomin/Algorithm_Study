# 문제 원문

[https://www.acmicpc.net/problem/2739](https://www.acmicpc.net/problem/2739)

<br><br>

# 문제 해결 단서

1. 1보다 크거나 같고, 9보다 작거나 같은 자연수 N이 입력됩니다.
2. 출력형식 ( N * m = o )에 맞추어 N*1부터 N\*9까지 출력합니다.

<br><br>

# 문제 해결 방법

<br>

## Python

1. input과 int를 사용해 N을 입력받아 정수로 변환합니다.
2. range를 이용해 1부터 9까지의 itterable 객체를 생성합니다.
3. for문을 이용해 형식에 알맞게 구구단을 출력합니다.
