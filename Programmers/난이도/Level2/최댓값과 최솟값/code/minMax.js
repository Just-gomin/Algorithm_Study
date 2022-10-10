const solution = (s = "") => {
  let nums = s.split(" ");
  let min = parseInt(nums[0]),
    max = parseInt(nums[0]);
  nums.map((value) => {
    let num = parseInt(value);
    if (num < min) min = num;
    else if (num > max) max = num;
  });
  return `${min} ${max}`;
};

console.log(solution("-1 -2 -3 -4"));
