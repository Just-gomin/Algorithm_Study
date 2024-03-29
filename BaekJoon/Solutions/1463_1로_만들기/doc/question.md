# 문제 원문

[https://www.acmicpc.net/problem/1463](https://www.acmicpc.net/problem/1463)

<br><br>

# 문제 해결 단서

1. 정수 X가 주어집니다. ( 1 <= X <= 10^6)
2. X에 사용할 수 있는 연산은 다음 세 가지 입니다.
   - X가 3으로 나누어지면, 3으로 나눕니다.
   - X가 2로 나누어지면, 2로 나눕니다.
   - 1을 뺍니다.
3. 위 세 가지 연산을 사용해 X를 1로 만드려할 때, 연산을 진행하는 최소 횟수를 구합니다.

<br><br>

# 문제 해결 방법

<br>

## Python

1. n을 입력받고 크기가 n+1인 배열 count를 생성합니다.<br>
   count는 인덱스에 대해 해당 인덱스를 1로 만드는데 걸리는 연산의 수를 저장합니다.
2. 2부터 n까지 반복을 진행합니다.
3. 각 반복에서 수행되는 연산은 다음과 같습니다.
   - count[i] = count[i-1] + 1로 초기화 진행<br>
     : i번째수가 2또는 3으로 나누어지지 않는 상황을 가정하여, i-1의 연산 횟수에 i에서 1을 빼는 연산을 추가한 수로 초기화합니다.
   - i가 2로 나누어진다면, count[i]를 count[i]와 count[i//2] + 1 중 더 작은 수로 지정<br>
     : 초기화된 수와, i를 2로 나눈 수가 1이 되는데 필요한 연산 횟수 + 2로 나누는 연산 횟수 중 더 적은 것으로 값을 정합니다.
   - i가 3으로 나누어진다면, count[i]를 count[i]와 count[i//3] + 1 중 더 작은 수로 지정<br>
     : 초기화된 수와, i를 3으로 나눈 수가 1이 되는데 필요한 연산 횟수 + 3으로 나누는 연산 횟수 중 더 적은 것으로 값을 정합니다.
4. count[n]을 출력하며 마무리합니다.
