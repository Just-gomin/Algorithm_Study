# 문제 원문

[https://www.acmicpc.net/problem/14889](https://www.acmicpc.net/problem/14889)

<br><br>

# 문제 해결 단서

1. N과 N×N 크기의 배열 S가 주어집니다.(N은 짝수)
2. 스타트 팀과 링크 팀으로 인원을 각각 N/2 명씩 나누었을 때, 팀간의 능력치 차이가 최소가 되도록 합니다.
3. $S_{ij}$ 는 i번 사람과 j번 사람이 같은 팀에 속했을 때, 팀에 더해지는 능력치입니다.
4. $S_{ij}$ 와 $S_{ji}$ 는 서로 다를 수 있으며, i번 사람과 j번 사람이 같은 팀에 속했을 때, 팀에 더해지는 능력치는 $S_{ij} + S_{ji}$ 입니다.

<br><br>

# 문제 해결 방법

<br>

## Python

1. N 명의 사람들을 두 팀으로 양분합니다.
2. 양분은 팀원 배정에 남은 인원수들을 매개변수로 하여 백트래킹을 시도합니다.
3. 양분된 사람들의 능력치를 더해서 팀의 능력치를 구합니다.
4. 능력치의 차의 최소값을 구해 출력합니다.
