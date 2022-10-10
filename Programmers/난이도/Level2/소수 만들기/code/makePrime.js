/*
    # 문제 해결 단서
    1. 에라토스테네스의 체를 이용하면 빠른 시간 안에 소수들을 구할 수 있습니다.
    2. 배열에서 중복 없이 세개의 숫자를 더해서 소수인지 확인합니다.
    3. nums의 원소들은 중복되지 않고 최대값은 1000입니다. 따라서 nums의 원소 3개를 더했을 때의 값은 3000을 넘지 않습니다.
    
    # 문제 해결 방안
    1. 에라토스테네스의 체를 이용해서 3000까지의 소수 집합을 구합니다.
    2. nums에서 3개의 수를 뽑는 모든 경우에 대해 소수 판별을 진행해야 하므로 for loop를 3개 중첩해야 합니다.
        i : 0 ~ nums.length-3
        j : i+1 ~ nums.length-2
        k : j+1 ~ nums.length-1
    3. 세개의 수의 합이 에라토스테네스의 체를 통해 소수인지 확인하고 그렇다면 count를 증가 시킵니다.
*/
const getPrimes = (max = 0) => {
  max += 1;
  let eraFilter = new Array(max).fill(-1);
  for (let i = 0; i < max; i++) {
    if (i == 0 || i == 1) {
      eraFilter[i] = 0;
    } else if (eraFilter[i] == -1) {
      eraFilter[i] = 1;
      for (let j = 2 * i; j < max; j += i) {
        eraFilter[j] = 0;
      }
    }
  }
  return eraFilter;
};

const solution = (nums = []) => {
  const isPrime = getPrimes(3000);
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++)
    for (let j = i + 1; j < nums.length - 1; j++)
      for (let k = j + 1; k < nums.length; k++)
        if (isPrime[nums[i] + nums[j] + nums[k]] == 1) count += 1;
  return count;
};

console.log(solution([1, 2, 3, 4]));
