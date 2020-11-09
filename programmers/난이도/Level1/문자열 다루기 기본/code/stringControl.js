const solution = (s) => {
  let answer = true;
  if (s.length === 4 || s.length === 6) {
    s.split("").map((value) => {
      if (("a" <= value && value <= "z") || ("Z" <= value && value <= "Z"))
        answer = false;
    });
  } else {
    answer = false;
  }
  return answer;
};

/*
// # 정규표현식을 사용한 타인의 답.
const solution = (s)=>{
  let regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
*/
