/*
    # Idea
    0. 숫자가 모두 0이라면 0을 return 한다. => 최종 숫자를 만들어 int로 형변환 한 뒤 다시 string으로 변환.
    1. 숫자의 앞자리를 기준으로 정렬한다.
    2. 한 자리수가 최상위 우선순위를 갖는다.
    3. 두자리 수 와 세자리 수 비교
        36,353 => 36353 > 35336
        36,362 => 36362 > 36236
        36,363 => 36363 > 36336
        36,364 => 36364 < 36436
        36,373 => 36373 < 37336
        36,374 => 36374 < 37436
        36,378 => 36378 < 37836
    
    # 문제 해결 방안
    -- Manual 분류 --
    1. 1~9에 해당하는 set 생성 각각의 set에는 자리수 별로 list 할당.
      ex) nums = {9:{digit1 :[9], digit2 : [99,93], digit3 : [999,967]}}
    2. digit1 부터 숫자를 입력, digit2, digit3에 digit1 보다 큰 [1], [2](index) 수를 가지고 있는 경우 digit2와 digit3를 비교한다.
    3. digit 2의 [1]가 digit3의 [1]보다 크다면 digit2를 추가, 작다면 digit3추가.
    4. digit2[1] === digit3[1] 이라면 digit2[0]와 digit3[2]를 비교하여 숫자를 입력한다.
*/

const solution = (numbers) => {
  let answer = numbers
    .map((value) => value + "")
    .sort((num1, num2) => parseInt(num2 + num1) - parseInt(num1 + num2))
    .join("");
  return answer[0] === "0" ? "0" : answer;
};
