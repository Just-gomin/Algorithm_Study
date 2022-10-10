/*
// # Date 객체를 사용하는 방법
const solution = (a, b) => {
  const day = new Date(2016, a - 1, b);
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return days[day.getDay()];
};
*/

const solution = (a, b) => {
  // first day of 2016 : friday.(01.01)
  const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let diff = 0;

  for (let month = 1; month < a; month++) {
    if (month <= 7) {
      if (month === 2) {
        diff += 29;
      } else if (month % 2 === 0) {
        diff += 30;
      } else {
        diff += 31;
      }
    } else {
      if (month % 2 === 0) {
        diff += 31;
      } else {
        diff += 30;
      }
    }
  }

  diff += b - 1;
  return days[diff % 7];
};

const ans = solution(5, 24);
console.log(ans);
