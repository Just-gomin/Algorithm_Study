const solution = (seoul = []) => {
  return `김서방은 ${seoul.findIndex((value) => value === "Kim")}에 있다`;
};

console.log(solution(["Jane", "Kim"]));
