const solution = (n) => {
  return parseInt(
    (n + "")
      .split("")
      .sort((num1, num2) => num2 - num1)
      .join("")
  );
};
