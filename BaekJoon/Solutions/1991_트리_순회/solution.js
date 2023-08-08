/*
  - 문제 Link : https://www.acmicpc.net/problem/1991
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

const left = 'left';
const right = 'right';

const preOrderSearch = (tree) => {
  let result = '';

  const innerFunction = (node) => {
    if (node !== '.') {
      result += node;
      innerFunction(tree.get(node).get(left));
      innerFunction(tree.get(node).get(right));
    }
  }

  innerFunction('A');

  return result;
}

function inOrderSearch(tree) {
  let result = '';

  const innerFunction = (node) => {
    if (node !== '.') {
      innerFunction(tree.get(node).get(left));
      result += node;
      innerFunction(tree.get(node).get(right));
    }
  }

  innerFunction('A');

  return result;
}

function postOrderSearch(tree) {
  let result = '';

  const innerFunction = (node) => {
    if (node !== '.') {
      innerFunction(tree.get(node).get(left));
      innerFunction(tree.get(node).get(right));
      result += node;
    }
  }

  innerFunction('A');

  return result;
}

function solution(input) {
  let answer = [];

  const [n, relations] = [parseInt(input[0]), input.slice(1)];

  const tree = new Map();

  for (let relation of relations) {
    let data = relation.split(' ');
    let node = data[0];

    tree.set(node, new Map());

    tree.get(node).set(left, data[1]);
    tree.get(node).set(right, data[2]);
  }

  answer.push(preOrderSearch(tree));
  answer.push(inOrderSearch(tree));
  answer.push(postOrderSearch(tree));

  return answer.join('\n');
}

console.log(solution(input));