const solution = (s, n) => {
  let result = "";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let index = 0; index < s.length; index++) {
    let spell = s[index];
    if (("a" <= spell && spell <= "z") || ("A" <= spell && spell <= "Z")) {
      let textCase = "a" <= spell && spell <= "z" ? lowerCase : upperCase;
      let checkIndex = textCase.indexOf(spell);
      let newIndex = checkIndex + n < 26 ? checkIndex + n : checkIndex + n - 26;
      result = result + textCase[newIndex];
    } else result = result + " ";
  }
  return result;
};

console.log(solution("A B", 1));
