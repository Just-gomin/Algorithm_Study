/*
    # 문제 해결 단서
    1. 파일명은 100글자 이내 - 영문 대소문자. 숫자, 공백 (" "), 마침표("."), 빼기 부호("-")만으로 이루어져있습니다.
    2. 파일명은 영문자로 시작하며, 숫자 하나 이상을 포함합니다.
    3. 파일명은 크게 HEAD, NUMBER, TAIL의 세 부분으로 구성됩니다.
        - HEAD : 최소 한 글자 이상의 숫자가 아닌 문자
        - NUMBER : 한 글자에서 최대 다섯 글자 사이의 연속된 숫자로 이루어지며, 앞쪽에 0이 올수 있습니다. 0~99999 사이의 숫자이며, 00000이나 0101 등도 가능합니다.
        - TAIL : 나머지 부분으로, 숫자가 다시 나타날 수도 있으며, 아무 글자도 없을 수 있습니다.
    4. 파일명은 우선 HEAD 부분을 기준으로 사전 순으로 정렬합니다. 이때 문자열은 대소문자를 구분하지 않습니다.
    5. 파일명의 HEAD 부분이 대소문자 차이 외에는 같을 경우, NUMBER의 숫자 순으로 정렬합니다.
        - 9 < 10 < 0011 < 012 < 13 < 014 순으로 정렬됩니다. 숫자 앞의 0은 무시되며, 012와 12는 정렬 시에 같은 값으로 처리됩니다.
    6. HEAD 부분과 Number 부분에서도 모두 동등하다면, 원래 주어진 순서를 유지합니다.
        -  MUZI01.zip과 muzi1.png가 입력으로 들어오면, 정렬 후에도 입력 시 주어진 두 파일의 순서가 바뀌어서는 안됩니다.
    7. 입력으로 주어지는 것은 1000개 이하의 파일명을 포함한 문자열 배열 files입니다.
        - 각 파일명은 100글자 이하의 길이, 영문 대소문자, 숫자, 공백(" "), 마침표("."), 빼기 부호("-") 만으로 이루어집니다. 영문으로 시작하며, 숫자를 하나이상 포함합니다.
        - 중복된 파일명을 없으나, 대소문자나 숫자 앞부분의 0 차이가 있는 경우는 함께주어질 수 있습니다. 
    
    # 문제 해결 방안
    1. JavaScript의 sort method를 이용해, HEAD / NUMBER 를 구분하여 비교합니다.
    2. HEAD / NUMBER / TAIL 을 구분하는 것은 정규표현식을 통해 진행합니다.
        - HEAD : /^[\D]+/g
        - NUMBER : /\d+/g
    3. files.sort() 의 comparedunction을 통해 정렬을 진행합니다.
*/

const solution = (files = []) => {
  const nameSeparator = (file) => {
    let head = file.match(/^[\D]+/g)[0].toLowerCase();
    file.replace(head, "");
    let num = parseInt(file.match(/\d+/g)[0]);
    return [head, num];
  };

  files.sort((a, b) => {
    let aSet = nameSeparator(a);
    let bSet = nameSeparator(b);

    if (aSet[0] !== bSet[0]) {
      return aSet[0] > bSet[0] ? 1 : -1;
    } else if (aSet[1] !== bSet[1]) {
      return aSet[1] > bSet[1] ? 1 : -1;
    } else {
      return 0;
    }
  });

  return files;
};

let example1 = [
  "img12.png",
  "img10.png",
  "img02.png",
  "img1.png",
  "IMG01.GIF",
  "img2.JPG",
];

let example2 = [
  "F-5 Freedom Fighter",
  "B-50 Superfortress",
  "A-10 Thunderbolt II",
  "F-14 Tomcat",
];
console.log(solution(example1)); // result : ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
console.log(solution(example2)); // result : ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
