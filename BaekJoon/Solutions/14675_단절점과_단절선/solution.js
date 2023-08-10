/*
  - 문제 Link : https://www.acmicpc.net/problem/14675

  - 단절점이 되는 정점들: 리프 노드가 아닌 경우는 모두 단절점 가능 (리프 노드: 인접 노드가 한 개)
  - 단절선이 된는 간선들: 입력이 트리인 경우 어느 간선을 자르던 해당 트리는 모두 2개 이상으로 나뉜다
*/

const fs = require("fs");
const { exit } = require("process");
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

function solution(input) {
  let answer = [];

  const yes = "yes";
  const no = "no";

  const n = +input[0];
  const edges = input.slice(1, n);
  const queries = input.slice(n + 1);

  const adjeacencyList = [...Array(n + 1)].map(() => []);

  for (let edge of edges) {
    let a = +(edge.split(' ')[0]);
    let b = +(edge.split(' ')[1]);

    adjeacencyList[a].push(b);
    adjeacencyList[b].push(a);
  }

  for (let query of queries) {
    let t = +(query.split(' ')[0]);
    let k = +(query.split(' ')[1]);

    if (t === 1) {
      answer.push(adjeacencyList[k].length !== 1 ? yes : no);
    } else if (t === 2) {
      answer.push(yes);
    } else {
      console.log("질의 오류 t가 1이나 2가 아닙니다.");
    }
  }


  return answer.join("\n");
}

console.log(solution(input));
