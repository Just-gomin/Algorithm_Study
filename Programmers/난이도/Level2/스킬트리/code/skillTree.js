/*
    //# 문제해결
    1. User의 skill tree를 가져온다.
    2. skill tree에서 skill에 나온 스킬들이 있을 때마다 해당 스킬을 checkList에 포함 시킨다.
    3. skill과 checkList의 길이가 같으면 스킬의 순서가 같은지 확인한다.
    4. skill 보다 checkList의 길이가 짧은 경우, skill[0]을 포함하고 있는지 확인한다.
    5. 포함하고 있다면, checkList의 스킬 순서가 skill과 맞는지 확인한다.
    6. 포함하고 있지 않다면 넘어간다.
*/

const solution = (skill, skill_trees) => {
  const skills = skill.split("");

  return skill_trees.filter((skill_tree) => {
    let custom = skill_tree.split("");
    let checkList = custom.filter((value) => skills.includes(value));
    let isRight = true;
    checkList.map((value, index) => {
      if (value !== skills[index]) isRight = false;
    });
    return isRight;
  }).length;
};

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
