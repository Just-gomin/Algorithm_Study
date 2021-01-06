/*
    # 문제 해결 단서
    1. m : 찾고자 하는 음악의 멜로디 , musicinfos : ["HH:MM,HH:MM"(시작시간,종료시간),"노래제목","악보정보"]
    2. 음악은 반드시 처음부터 시작하며, 음은 1분에 1개씩 재생됩니다.
    3. 음악의 길이 > 재생 길이 : 음악이 끊김 없이 처음부터 반복재생합니다.
    4. 음악의 길이 < 재생 길이 : 음악의 처음부터 재생 시간 만큼만 재생됩니다.
    5. 조건에 맞는 음악이 여러개인 경우 재생 시간이 가장 긴 음악을 반환합니다.
    6. 조건에 맞는 음악이 여러개이며, 재생 시간이 동일한 음악이 여러개인 경우 가장 먼저 등록된 음악을 반환합니다.
    7. 조건에 맞는 음악이 없는 경우 "(NONE)"을 반환 합니다.
    
    # 문제 해결 방안
    1. musicinfos에서 음악들을 분리합니다. 
        - 분리 하는 과정 중에서 재생시간을 계산합니다.
        - 음악의 길이를 계산하고 재생시간에 맞게 악보를 수정합니다.
    2. 음악들 중 m과 일치하는 음악을 찾으며 재생 시간이 가장 긴 것으로 갱신합니다.

    $ 전체적인 흐름은 맞지만 #이 붙은 음정에 대한 구분이 필요합니다.
*/

const solution = (m = "", musicinfos = []) => {
  let restult = "(NONE)";
  let newMusicInfo = []; // 재생시간, 제목, 변경된 악보
  // musicinfos 가공
  for (let i = 0; i < musicinfos.length; i += 3) {
    let temp = [];
    // 재생 시간 추출
    let playTimes = musicinfos[i].split(",");
    let startH = parseInt(playTimes[0].split(":")[0]);
    let startM = parseInt(playTimes[0].split(":")[1]);
    let finishH = parseInt(playTimes[1].split(":")[0]);
    let finishM = parseInt(playTimes[1].split(":")[1]);
    let playTime = (finishH - startH) * 60 + (finishM - startM);
    temp.push(playTime);
    //제목
    let title = musicinfos[i + 1];
    temp.push(title);
    //악보
    let score = musicinfos[i + 2].split();
    // 음악 길이 추출
    let songLength = score.filter((value) => value !== "#").length;
    // 악보 변경
    let newScore = "";
    let pt = 1;
    let note = 0;
    while (pt <= playTime) {
      if (pt > songLength) note = 0;
      newScore += score[note++];
      if (score[note] === "#") {
        newScore += score[note++];
      }
      pt++;
    }
    temp.push(newScore);

    newMusicInfo.push(temp);
  }
  // 일치하는 음악 탐색
  let maximumPlayTIme = 0;
  newMusicInfo.forEach((musicinfo) => {
    let match = musicinfo[2].match(m);
    if (match != null) {
      if (musicinfo[0] > maximumPlayTIme) {
        result = musicinfo[1];
        maximumPlayTIme = musicinfo[0];
      }
    }
  });
  return result;
};

let m1 = "ABCDEFG";
let musicinfos1 = [
  "12:00,12:14",
  "HELLO",
  "CDEFGAB",
  "13:00,13:05",
  "WORLD",
  "ABCDEF",
];

console.log(`Test1 ${solution(m1, musicinfos1)}`);

let m2 = "CC#BCC#BCC#BCC#B";
let musicinfos2 = [
  "03:00,03:30",
  "FOO",
  "CC#B",
  "04:00,04:08",
  "BAR",
  "CC#BCC#BCC#B",
];
console.log(`Test2 ${solution(m2, musicinfos2)}`);

let m3 = "ABC";
let musicinfos3 = [
  "12:00,12:14",
  "HELLO",
  "C#DEFGAB",
  "13:00,13:05",
  "WORLD",
  "ABCDEF",
];
console.log(`Test3 ${solution(m3, musicinfos3)}`);
