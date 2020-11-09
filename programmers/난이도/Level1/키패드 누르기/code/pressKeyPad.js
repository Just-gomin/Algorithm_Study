const solution = (numbers, hand) => {
  let result = "";

  const keyPad1 = [1, 4, 7, "*"],
    keyPad2 = [2, 5, 8, 0],
    keyPad3 = [3, 6, 9, "#"];

  let leftX = 0,
    leftY = 0;
  let rightX = 2,
    rightY = 0;

  const setL = (x, y) => {
    leftX = x;
    leftY = y;
    result += "L";
  };
  const setR = (x, y) => {
    rightX = x;
    rightY = y;
    result += "R";
  };

  for (let index = 0; index < numbers.length; index++) {
    let num = numbers[index];
    let numX = 0,
      numY = 0;
    let distanceL = 0,
      distanceR = 0;
    let lineIndex1 = keyPad1.findIndex((value) => value === num),
      lineIndex2 = keyPad2.findIndex((value) => value === num),
      lineIndex3 = keyPad3.findIndex((value) => value === num);

    if (lineIndex1 !== -1) {
      numX = 0;
      numY = 3 - lineIndex1;
      setL(numX, numY);
    } else if (lineIndex3 !== -1) {
      numX = 2;
      numY = 3 - lineIndex3;
      setR(numX, numY);
    } else if (lineIndex2 !== -1) {
      numX = 1;
      numY = 3 - lineIndex2;

      distanceL = Math.abs(leftX - numX) + Math.abs(leftY - numY);
      distanceR = Math.abs(rightX - numX) + Math.abs(rightY - numY);

      distanceL < distanceR || (distanceL === distanceR && hand === "left")
        ? setL(numX, numY)
        : setR(numX, numY);
    }
  }
  return result;
};

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
