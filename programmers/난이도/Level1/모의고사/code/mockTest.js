/*
### Solution 1

const solution = (answers) => {
  let highSores = [];
  let students = { one: 0, two: 0, three: 0 };
  let index = 0;

  const pointUpTwo = (studentAns) => {
    if (answers[index] === studentAns) {
      students.two++;
    }
  };
  const pointUpThree = (studentAns) => {
    if (answers[index] === studentAns) {
      students.three++;
    }
  };

  while (index < answers.length) {
    // 1번의 정답 확인
    if (index % 5 === 0 && answers[index] === 1) {
      students.one++;
    } else if (answers[index] === (index % 5) + 1) {
      students.one++;
    }

    // 2번의 정답 확인
    switch (index % 8) {
      case 0:
      case 2:
      case 4:
      case 6:
        pointUpTwo(2);
        break;
      case 1:
        pointUpTwo(1);
        break;
      case 3:
        pointUpTwo(3);
        break;
      case 5:
        pointUpTwo(4);
        break;
      case 7:
        pointUpTwo(5);
        break;
    }

    // 3번의 정답 확인
    switch (index % 10) {
      case 0:
      case 1:
        pointUpThree(3);
        break;
      case 2:
      case 3:
        pointUpThree(1);
        break;
      case 4:
      case 5:
        pointUpThree(2);
        break;
      case 6:
      case 7:
        pointUpThree(4);
        break;
      case 8:
      case 9:
        pointUpThree(5);
        break;
    }
    index++;
  }

  if (students.one === students.two && students.two === students.three) {
    highSores = [1, 2, 3];
  } else if (students.one === students.two) {
    students.one > students.three ? (highSores = [1, 2]) : (highSores = [3]);
  } else if (students.one === students.three) {
    students.one > students.two ? (highSores = [1, 3]) : (highSores = [2]);
  } else if (students.two === students.three) {
    students.two > students.one ? (highSores = [2, 3]) : (highSores = [1]);
  } else {
    if (students.one > students.two) {
      students.one > students.three ? (highSores = [1]) : (highSores = [3]);
    } else {
      students.two > students.three ? (highSores = [2]) : (highSores = [3]);
    }
  }
  return highSores;
};
*/

const solution = (answers) => {
  let highSores = [];

  let student1 = [1, 2, 3, 4, 5];
  let student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let scores = [0, 0, 0];

  let index = 0;

  while (index < answers.length) {
    if (answers[index] === student1[index % student1.length]) {
      scores[0]++;
    }
    if (answers[index] === student2[index % student2.length]) {
      scores[1]++;
    }
    if (answers[index] === student3[index % student3.length]) {
      scores[2]++;
    }
    index++;
  }

  const max = Math.max(scores[0], scores[1], scores[2]);
  console.log(max);
  if (max === scores[0]) highSores.push(1);
  if (max === scores[1]) highSores.push(2);
  if (max === scores[2]) highSores.push(3);

  return highSores;
};
