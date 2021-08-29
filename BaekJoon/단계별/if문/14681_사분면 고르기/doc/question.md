# 문제 원문

[https://www.acmicpc.net/problem/14681](https://www.acmicpc.net/problem/14681)

<br><br>

# 문제 해결 단서

1. 정수 x,y로 이루어진 좌표가 주어졌을 때, 해당 점이 어느 사분면에 속하는지 알아냅니다.
2. x > 0, y > 0 이면 1사분면.
3. x < 0, y > 0 이면 2사분면.
4. x < 0, y < 0 이면 3사분면.
5. x > 0, y < 0 이면 4사분면.

<br><br>

# 문제 해결 방법

<br>

## Python

1. input 함수를 이용해 좌표를 입력 받습니다.
2. int를 이용해 입력 값을 정수로 변환합니다.
3. if와 elif, else문을 이용해 주어진 조건을 표현합니다.
4. print를 이용해 결과를 출력합니다.
