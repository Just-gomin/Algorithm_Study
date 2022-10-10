const solution = (citations) => {
  const maxCitation = Math.max(...citations);
  const counter = new Array(maxCitation + 1).fill(0);

  citations.map((value) => {
    for (let i = 1; i <= value; i++) {
      counter[i]++;
    }
  });
  console.log("maxCitation : ", maxCitation, ", counter : ", counter);
  let maximum = 0;
  counter.map((value, index) => {
    if (value !== 0 && value >= index) {
      maximum++;
    }
  });
  return maximum;
};

console.log(solution([3, 0, 6, 1, 5]));
