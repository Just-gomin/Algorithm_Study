/*
//    // # first Solution
const figure = (numbers, index, target, sum, counter) => {
  if (index === numbers.length && sum === target) counter++;
  else if (index > numbers.length - 1) counter = 0;
  else {
    let copySum = sum;
    let currNum = numbers[index];
    let leftCounter = figure(
        numbers,
        index + 1,
        target,
        (sum += currNum),
        counter
      ),
      rightCounter = figure(
        numbers,
        index + 1,
        target,
        (copySum -= currNum),
        counter
      );

    counter += leftCounter + rightCounter;
  }
  return counter;
};

const solution = (numbers, target) => {
  let counter = figure(numbers, 0, target, 0, 0);
  return counter;
};

*/
const figure = (numbers, index, target, sum) => {
  if (index === numbers.length && sum === target) return 1;
  else if (index > numbers.length - 1) return 0;
  else {
    let counter = 0;
    counter += figure(numbers, index + 1, target, sum + numbers[index]);
    counter += figure(numbers, index + 1, target, sum - numbers[index]);
    return counter;
  }
};

const solution = (numbers, target) => {
  let counter = figure(numbers, 0, target, 0);
  return counter;
};

console.log(solution([1, 1, 1, 1, 1], 3));
