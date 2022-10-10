const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const moveAndChange = (target, chaser, strIndex, counter) => {
  // 이동횟수가 주어진 이름의 길이보다 길면 시행횟수 초과로 인지하고 충분히 큰 값을 넘긴다.
  if (counter > target.length) return (counter = 9999);

  let copyChaser = [];
  chaser.map((value, index) => {
    copyChaser.push(value);
  });
  //알파벳을 바꾸는 과정
  if (target[strIndex] !== copyChaser[strIndex])
    copyChaser.splice(strIndex, 1, target[strIndex]);

  // 알파벳 변환 후 이름을 완성 시키면 counter를 반환한다.
  if (target.join("") === copyChaser.join("")) return counter;

  // 이동방향 left와 right 나누어주기.
  counter++;
  // 왼쪽으로 이동
  let leftCounter = moveAndChange(
    target,
    copyChaser,
    strIndex - 1 < 0 ? target.length - 1 : strIndex - 1,
    counter
  );

  // 오른쪽으로 이동
  let rightCounter = moveAndChange(
    target,
    copyChaser,
    strIndex + 1 > target.length - 1 ? 0 : strIndex + 1,
    counter
  );

  return leftCounter < rightCounter ? leftCounter : rightCounter;
};

const solution = (name) => {
  let target = name.split("");

  let alphabetChaser = new Array(name.length).fill("A");
  let changingCounter = 0;

  // 알파벳 변환 횟수 측정
  target.map((value, index) => {
    if (value !== alphabetChaser[index]) {
      let alphabetIndex = alphabet.findIndex((alphabet) => alphabet === value);
      changingCounter +=
        alphabetIndex < alphabet.length - alphabetIndex
          ? alphabetIndex
          : alphabet.length - alphabetIndex;
      alphabetChaser.splice(index, 1, value);
    }
  });

  // 최소 이동횟수 측정
  let movingChaser = new Array(name.length).fill("A");
  let movingCounter = moveAndChange(target, movingChaser, 0, 0);
  console.log(
    "Counters - alphabet : ",
    changingCounter,
    ", moving : ",
    movingCounter
  );
  return changingCounter + movingCounter;
};

console.log(solution("ABABAAABA"));
