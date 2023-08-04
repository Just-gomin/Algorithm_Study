/*
  - 문제 Link : https://www.acmicpc.net/problem/11725
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

function solution(input = []) {

  let tree = {};
  let remains = [];

  const [n, pairs] = [parseInt(input[0]), input.slice(1)];

  const makeTree = (n1, n2) => {
    if (n1 === 1) tree[n2] = 1;
    else if (n2 === 1) tree[n1] = 1;
    else if (tree[n1]) tree[n2] = n1;
    else if (tree[n2]) tree[n1] = n2;
    else remains.push([n1, n2]);
  }

  for (let i = 0; i < n - 1; i++) {
    let n1 = parseInt(pairs[i].split(' ')[0]);
    let n2 = parseInt(pairs[i].split(' ')[1]);

    makeTree(n1, n2);
  }

  while (remains.length > 0) {
    const [n1, n2] = remains.shift();
    makeTree(n1, n2);
  }

  return Object.keys(tree)
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map((child) => `${tree[child]}`)
    .join('\n');
}

console.log(solution(input));