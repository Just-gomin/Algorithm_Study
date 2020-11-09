const solution = (s) => {
  let pNum = 0;
  let yNum = 0;
  for (let index = 0; index < s.length; index++) {
    let key = s[index];
    if (key === "p" || key === "P") pNum++;
    if (key === "y" || key === "Y") yNum++;
  }
  if (pNum !== yNum) return false;
  return true;
};
