const solution = (dartResult) => {
  let dart = [];
  let stage = -1;
  for (let i = 0; i < dartResult.length; i++) {
    let txt = dartResult[i];

    if (txt >= "0" && txt <= "9") {
      stage = stage + 1;
      if (txt === "1" && dartResult[i + 1] === "0") {
        dart[stage] = 10;
        i = i + 1;
      } else {
        dart[stage] = txt - "0";
      }
    } else if (txt === "D") {
      dart[stage] = Math.pow(dart[stage], 2);
    } else if (txt === "T") {
      dart[stage] = Math.pow(dart[stage], 3);
    } else if (txt === "*") {
      if (stage !== 0) {
        dart[stage - 1] *= 2;
      }
      dart[stage] *= 2;
    } else if (txt === "#") {
      dart[stage] *= -1;
    }
  }
  return dart[0] + dart[1] + dart[2];
};

console.log(solution("1S2D*3T"));
