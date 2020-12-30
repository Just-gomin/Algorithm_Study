/*

  코드 출처 : https://jun-choi-4928.medium.com/javascript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-21df4b536349

*/

// nCr
const get_nCr = (selectNum = 1, data = []) => {
  let result = [];
  if (selectNum === 1) return data.map((value) => [value]);
  else if (selectNum === data.length) return [data];

  data.forEach((value, index, arr) => {
    const rest = arr.slice(index + 1);
    const combinations = get_nCr(selectNum - 1, rest);
    const attached = combinations.map((combination) => [value, ...combination]);
    result.push(...attached);
  });

  return result;
};

// nC1 + nC2 + ... + nCn
const getAllCombinations = (data = []) => {
  let result = [];
  for (let i = 1; i <= data.length; i++) {
    temp = get_nCr(i, data);
    result = [...result, ...temp];
  }
  return result;
};

// Execute with Example
const example = [1, 2, 3, 4, 5, 6];

let result = get_nCr(2, example);
result.forEach((value) => {
  console.log(value);
});

result = get_nCr(3, example);
result.forEach((value) => {
  console.log(value);
});

result = getAllCombinations(example);
result.forEach((value) => {
  console.log(value);
});
