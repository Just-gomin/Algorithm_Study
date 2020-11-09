const solution = (arr) => {
  let smallestNum = arr[0];
  let smallestNumIndex = 0;
  arr.map((value, index) => {
    if (value < smallestNum) {
      smallestNum = value;
      smallestNumIndex = index;
    }
  });
  arr.splice(smallestNumIndex, 1);
  if (arr.length === 0) return [-1];
  return arr;
};

console.log(solution([-1, 0, -40, 100, -613]));
