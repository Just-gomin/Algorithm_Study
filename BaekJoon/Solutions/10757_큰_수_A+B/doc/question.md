# 문제 원문

[https://www.acmicpc.net/problem/10757](https://www.acmicpc.net/problem/10757)

<br><br>

# 문제 해결 단서

1. 아주 큰 수 인 A와 B를 입력받아 덧셈 연산을 진행합니다.

<br><br>

# 문제 해결 방법

<br>

## Python

1. 아주 큰 수인 A, B를 입력 받아 덧셈을 진행합니다.
2. 파이썬은 아주 큰 수들을 자유롭게 다룰 수 있습니다.

## C/C++

1. C나 C++의 경우 아주 큰 수들을 처리하기에는 어려움이 있습니다.
2. 숫자들을 먼저 문자열로 입력받습니다.
3. 문자열로 입력 받은 수들을 일의 자리부터 정수로 변환하여 덧셈을 취하고 문자열로 저장합니다.
4. 올림수가 생기면 기록하고 다음 자리수의 덧셈을 진행합니다.
