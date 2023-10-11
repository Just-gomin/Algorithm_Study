/*
    - 문제 Link : https://www.acmicpc.net/problem/2798

    1. 블랙잭: 카드의 합이 21을 넘지 않는 한도 내에서, 카드의 합을 최대한 크게 만드는 게임
    2. 각 카드에는 양의 정수가 쓰여 있다
    3. N장의 카드를 모두 숫자가 보이도록 바닥에 놓는다
    4. 딜러는 숫자 M을 크게 외친다
    5. 플레이어는 제한된 시간 안에 N장의 카드 중에서 3장의 카드를 골라야 한다.
    6. 플레이어가 고른 카드의 합은 M을 넘지 않으면서 M과 최대한 가깝게 만들어야 한다.
    7. 입력
        - 첫째 줄에 카드의 개수 N(3 ≤ N ≤ 100)과 M(10 ≤ M ≤ 300,000)
        - 둘째 줄에는 카드에 쓰여 있는 수가 주어지며, 이 값은 100,000을 넘지 않는 양의 정수
        - 합이 M을 넘지 않는 카드 3장을 찾을 수 있는 경우만 입력으로 주어진다.

    1. 배열에 카드를 저장
    2. 3중 for 문 순회 진행
        1. 각 for문에서 선택된 카드들의 합을 구함
        2. 숫자의 합이 M을 넘지 않으면, 이전에 설정된 최대 값과 비교해 새로운 최대 값 설정
        3. 숫자의 합이 M을 넘으면 넘어감
    3. 최대 값 반환
*/

const fs = require("fs");
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

function solution(input) {
    let answer = 0;

    const [N, M] = input[0].split(' ').map(Number);
    const cardArr = input[1].split(' ').map(Number);

    for (let i = 0; i < N - 2; i++) {
        for (let j = i + 1; j < N - 1; j++) {
            for (let k = j + 1; k < N; k++) {
                let sum = cardArr[i] + cardArr[j] + cardArr[k];
                if (sum <= M) answer = Math.max(answer, sum);
            }
        }
    }

    return answer;
}

console.log(solution(input));
