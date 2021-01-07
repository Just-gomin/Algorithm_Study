/*
    # 문제 해결 단서
    1. m : 찾고자 하는 음악의 멜로디 , musicinfos : ["HH:MM,HH:MM"(시작시간,종료시간),"노래제목","악보정보"]
    2. 음악은 반드시 처음부터 시작하며, 음은 1분에 1개씩 재생됩니다.
    3. 음악의 길이 > 재생 길이 : 음악이 끊김 없이 처음부터 반복재생합니다.
    4. 음악의 길이 < 재생 길이 : 음악의 처음부터 재생 시간 만큼만 재생됩니다.
    5. 조건에 맞는 음악이 여러개인 경우 재생 시간이 가장 긴 음악을 반환합니다.
    6. 조건에 맞는 음악이 여러개이며, 재생 시간이 동일한 음악이 여러개인 경우 가장 먼저 등록된 음악을 반환합니다.
    7. 조건에 맞는 음악이 없는 경우 "(NONE)"을 반환 합니다.
    8. 사용하는 음 : C, C#, D, D#, E, F, F#, G, G#, A, A#, B
    
    # 문제 해결 방안
    1. musicinfos에서 음악들을 분리합니다. 
        - 분리 하는 과정 중에서 재생시간을 계산합니다.
        - 음악의 길이를 계산하고 재생시간에 맞게 악보를 수정합니다.
    2. 음악들 중 m과 일치하는 음악을 찾으며 재생 시간이 가장 긴 것으로 갱신합니다.
*/

const solution = (m = "", musicinfos = []) => {
  let result = "(None)";

  const switchNote = (note) => {
    let newNote = "";
    switch (note) {
      case "C#":
        newNote = "H";
        break;
      case "D#":
        newNote = "I";
        break;
      case "F#":
        newNote = "J";
        break;
      case "G#":
        newNote = "K";
        break;
      case "A#":
        newNote = "L";
        break;
    }
    return newNote;
  };

  let newMusicInfo = []; // 재생시간, 제목, 변경된 악보
  // musicinfos 가공
  musicinfos.forEach((musicinfo) => {
    let music = musicinfo.split(","); // [시작시간, 종료시간, 제목, 악보]
    let temp = [];
    // 재생 시간 추출
    let startH = parseInt(music[0].split(":")[0]),
      startM = parseInt(music[0].split(":")[1]);
    let finishH = parseInt(music[1].split(":")[0]),
      finishM = parseInt(music[1].split(":")[1]);
    let playTime = finishH * 60 + finishM - (startH * 60 + startM);
    temp.push(playTime);
    // 제목
    let title = music[2];
    temp.push(title);
    // 악보
    let score = music[3];
    // 음악 길이 추출
    let musicLength = score.split("").filter((value) => value !== "#").length;
    // 악보 변경
    let newScore = "";
    let pt = 1;
    let noteIdx = 0;
    while (pt <= playTime) {
      let newNote = "";
      if (pt > musicLength) {
        noteIdx = 0;
        pt = 1;
        playTime -= musicLength;
      }
      newNote += score[noteIdx++];
      if (score[noteIdx] === "#") {
        newNote += score[noteIdx++];
        newNote = switchNote(newNote);
      }
      newScore += newNote;
      pt++;
    }
    temp.push(newScore);
    newMusicInfo.push(temp);
  });

  // 기억하는 멜로디 갱신
  let newM = "";
  let itr = 0;
  while (itr < m.length) {
    let newNote = "";
    newNote += m[itr++];
    if (m[itr] === "#") {
      newNote += m[itr++];
      newNote = switchNote(newNote);
    }
    newM += newNote;
  }

  // 일치하는 음악 탐색
  let maximumPlayTIme = 0;
  newMusicInfo.forEach((musicinfo) => {
    let match = musicinfo[2].match(newM);
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
let musicinfos1 = ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"];

console.log(`Test1 ${solution(m1, musicinfos1)}`);

let m2 = "CC#BCC#BCC#BCC#B";
let musicinfos2 = ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"];
console.log(`Test2 ${solution(m2, musicinfos2)}`);

let m3 = "ABC";
let musicinfos3 = ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"];
console.log(`Test3 ${solution(m3, musicinfos3)}`);

let m4 = "KKKKKKKKKK";
let musicinfos4 = ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"];
console.log(`Test4 ${solution(m4, musicinfos4)}`);
