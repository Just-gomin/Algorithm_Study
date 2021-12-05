"""
    # 참고 자료 : https://mygumi.tistory.com/98

    - 하나씩 건너뛰는 경우만 생각해서 시간을 많이 잡아 먹혔습니다.
    - 두개 이상을 건너 뛰어야하는 반례도 있음을 생각해야합니다.
"""


def solution(n=1, wine=[]):
    history = [0] * n

    if n >= 1:
        history[0] = wine[0]
    if n >= 2:
        history[1] = wine[0] + wine[1]
    if n >= 3:
        history[2] = max(history[1], wine[0] + wine[2], wine[1] + wine[2])
    if n >= 4:
        for i in range(3, n):
            history[i] = max(history[i-1], history[i-2] + wine[i],
                             history[i-3] + wine[i-1] + wine[i])

    return history[n-1]


if __name__ == "__main__":
    from sys import stdin

    read = stdin.readline

    n = int(read())
    wine = [int(read()) for _ in range(n)]
    result = solution(n, wine)
    print(result)
