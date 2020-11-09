const solution = (clothes) => {
  let answer = 1;
  let sorted = [];
  clothes.map((value, index) => {
    let category = value[1];
    let cIndex = sorted.findIndex((data) => data.key === category);
    if (cIndex !== -1) sorted[cIndex].num++;
    else sorted.push({ key: category, num: 1 });
  });
  sorted.map((data) => (answer *= data.num + 1));
  return answer - 1;
};
