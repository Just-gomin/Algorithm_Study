const solution = (phone_number) => {
  let hided = "";
  let length = phone_number.length;
  for (let index = 0; index < length; index++) {
    index < length - 4 ? (hided += "*") : (hided += phone_number[index]);
  }
  return hided;
};

/*
// # 정규표현식을 이용한 방법.
const function = (phone_number) => s.replace(/\d(?=\d{4})/g, "*");
*/

console.log(solution("01033334444"));
