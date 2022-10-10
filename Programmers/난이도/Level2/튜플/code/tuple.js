const solution = (s) => {
  let answer = [];
  let sets = s.slice(1, s.length - 1).split(/,(?={)/g);
  sets.sort((a, b) => a.length - b.length);
  sets.map((value, index) => {
    sets[index] = value.slice(1, value.length - 1).split(",");
  });
  console.log(sets);
  sets.map((arr, num) => {
    let len = arr.length;
    if (len === 1) answer.push(arr[0] - "0");
    else
      answer.push(
        arr.filter((value) => !answer.includes(value - "0"))[0] - "0"
      );
  });
  return answer;
};
console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
