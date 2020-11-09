const cutString = (num, s) => {
  let compressed = "";
  let count = 1;
  let prePart = "";
  for (let index = 0; index < s.length; index += num) {
    let part = s.slice(index, index + num);
    if (prePart === part) count++;
    else {
      count !== 1 ? (compressed += count + prePart) : (compressed += prePart);
      prePart = part;
      count = 1;
    }
  }
  count !== 1 ? (compressed += count + prePart) : (compressed += prePart);
  return compressed.length;
};

const solution = (s) => {
  let minLen = s.length;
  for (let num = 1; num <= Math.floor(s.length / 2); num++) {
    let compLen = cutString(num, s);
    if (minLen > compLen) minLen = compLen;
  }
  return minLen;
};

console.log(solution("aabbaccc"));
