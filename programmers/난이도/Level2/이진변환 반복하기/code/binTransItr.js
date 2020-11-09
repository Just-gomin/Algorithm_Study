const solution = (s = "") => {
  let itrCount = 0,
    zeroCount = 0;
  let answer = [];
  if (s !== "1") {
    let arr = s.split("");
    while (arr.join("") !== "1") {
      itrCount++;
      let temp = [];
      arr.map((value) => (value === "0" ? zeroCount++ : temp.push("1")));
      let len = temp.length;
      let newBin = [];
      while (len != 0) {
        newBin.splice(0, 0, (len % 2).toString());
        len = (len - (len % 2)) / 2;
      }
      arr = Object.assign([], newBin);
    }
  }
  answer = [itrCount, zeroCount];
  return answer;
};

console.log(solution("110010101001"));
