// # 효율성 모두 실패
// const solution = (n) => {
//   const halfN = Math.ceil(n / 2);
//   let acc = [];
//   let checker = new Array((halfN * (halfN + 1)) / 2).fill(0);
//   for (let i = 1; i <= halfN; i++) {
//     if (acc.length != 0) {
//       acc.map((num, index) => {
//         acc[index] = num + i;
//         checker[acc[index]] += 1;
//       });
//     }
//     acc.push(i);
//     checker[acc[acc.length - 1]] += 1;
//   }
//   checker[n] += 1;
//   return checker[n];
// };

//# 효율성 4,6 실패
// const makeN = (target, sum, num) => {
//   if (num + sum > target || num <= 0) return 0;
//   else if (num + sum == target) return 1;
//   else {
//     let a = makeN(target, sum + num, num - 1);
//     let b = sum >= num + 1 ? 0 : makeN(target, 0, num - 1);
//     return a + b;
//   }
// };

// const solution = (n) => {
//   return makeN(n, 0, Math.ceil(n / 2)) + 1;
// };

const solution = (n) => {
  let count = 1;
  let halfN = Math.floor(n / 2);
  for (let i = 1; i <= halfN; i++) {
    let sum = i;
    for (let j = i + 1; j <= halfN + 1; j++) {
      sum += j;
      if (sum > n) break;
      else if (sum == n) {
        count++;
        break;
      }
    }
  }
  return count;
};

console.log(solution(15));
