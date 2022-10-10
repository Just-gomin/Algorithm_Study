const solution = (n, stages) => {
  let answer = [];
  let finisher = new Array(n + 1).fill(0);
  let challenger = new Array(n + 1).fill(0);

  stages.map((value) => {
    let checker = value <= n ? value : n;
    for (let stage = 1; stage <= checker; stage++) {
      finisher[stage]++;
    }
    if (value <= n) challenger[value]++;
  });
  console.log(finisher);
  console.log(challenger);

  for (let index = 0; index < n; index++) {
    stage = index + 1;
    answer.push({
      key: stage,
      value: finisher[stage] !== 0 ? challenger[stage] / finisher[stage] : 0,
    });
  }
  console.log(answer);

  answer.sort((data1, data2) =>
    data1.value !== data2.value
      ? data2.value - data1.value
      : data1.key - data2.key
  );

  answer.map((data, index) => (answer[index] = data.key));
  return answer;
};

// console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(8, [1, 2, 3, 4, 5, 6, 7]));
// console.log(solution(4, [4, 4, 4, 4, 4]));
