const solution = (n) => {
  return (n + "")
    .split("")
    .reverse()
    .map((value) => (value = value - "0"));
};
