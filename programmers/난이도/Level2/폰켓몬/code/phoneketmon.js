/*
const solution = (nums) => {
  let answer = 0;
  let categories = [];
  nums.map((value) => {
    if (categories.length !== 0) {
      if (categories.findIndex((data) => data === value) === -1)
        categories.push(value);
    } else categories.push(value);
  });
  answer =
    nums.length / 2 > categories.length ? categories.length : nums.length / 2;
  return answer;
};
*/

// # Use Set
const solution = (nums) => {
  let categories = new Set(nums);
  return nums.length / 2 > categories.size ? categories.size : nums.length / 2;
};

console.log(solution([3, 1, 2, 3]));
