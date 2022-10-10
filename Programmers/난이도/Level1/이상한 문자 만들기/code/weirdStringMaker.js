const solution = (s) => {
  let answer = "";
  let wordIndex = 1;
  for (let index = 0; index < s.length; index++) {
    let spell = s[index];
    if (spell === " ") {
      wordIndex = 1;
    } else {
      spell = wordIndex % 2 === 1 ? spell.toUpperCase() : spell.toLowerCase();
      wordIndex++;
    }
    answer += spell;
  }
  return answer;
};
