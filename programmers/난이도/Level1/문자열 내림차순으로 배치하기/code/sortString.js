const solution = (s) => {
  let answer = "";
  let lower = [];
  let higher = [];

  for (let i = 0; i < s.length; i++) {
    "A" <= s[i] && s[i] <= "Z" ? higher.push(s[i]) : lower.push(s[i]);
  }
  lower.sort((char1, char2) => -1 * char1.localeCompare(char2));
  higher.sort((char1, char2) => -1 * char1.localeCompare(char2));
  answer = lower.join("") + higher.join("");
  return answer;
};

const solution = (s) => {
  return s.split("").sort().reverse().join("");
};
