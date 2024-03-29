# 문제 원문

[https://www.acmicpc.net/problem/1011](https://www.acmicpc.net/problem/1011)

<br><br>

# 문제 해결 단서

1. 공간이동 장치를 이용해 x지점 부터 y지점까지 이동합니다.
2. 해당 공간이동 장치를 이용해 직전에 k광년 만큼 이동했다면 이번 이동에선 k-1, k, k+1 광년만큼 이동이 가능합니다.
3. 첫 출발시에는 -1, 0, 1 광년만큼 이론상 이동가능하지만, -1과 0은 의미가 없으므로 1광년을 이동할 수 있으며 다음에는 0, 1, 2광년 이동가능합니다.
4. y지점에 도착하기 바로 직전의 이동거리는 반드시 1광년으로 하려 합니다.
5. x로부터 y까지 이동하는데 필요한 최소한의 공간이동장치의 사용회수를 출력합니다.

<br><br>

# 문제 해결 방법

<br>

## Python

1. 첫 출발시 1광년 이동가능하다는 점과, y지점 도착 직전 이동거리는 반드시 1광년이 되야 하므로, 해당 공간이동 장치로 이동하는 거리는 x와 y지점의 중간지점을 기준으로 대칭되어야 합니다.
2. 현재 움직인 거리를 i라고 했을 때, x와 y사이의 거리에서 2\*i만큼 빼주어 남은 거리들에 대해 계산을 진행하는 방식으로 해결합니다.
