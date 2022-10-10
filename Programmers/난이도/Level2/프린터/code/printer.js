/*
    // # 문제해결
    1. priorities에서 첫번째 문서를 꺼낸다.
    2. 남아있는 priorities에서 꺼낸 문서보다 높은 우선순위를 가진 문서가 존재한다면 priorities의 마지막으로 보낸다.
    3. 존재하지 않는 다면 인쇄한다.
    4. location을 통해 지정된 문서는 인쇄 될때까지 그 숫자가 줄어들다가 인쇄가 될때 0이 되도록한다.
    5. 0이 될 때 까지 count를 통해 그 횟수를 센다.
*/

const solution = (priorities, location) => {
  let count = 0;
  let printList = [];
  for (let i = 0; i < priorities.length; i++) {
    printList.push({
      key: i,
      priority: priorities[i],
      isChecked: i === location ? true : false,
    });
  }

  while (true) {
    let current = printList.shift();
    console.log(current);
    if (
      printList.filter((data, index) => data.priority > current.priority)
        .length !== 0
    ) {
      printList.push(current);
    } else {
      count++;
      if (current.isChecked) break;
    }
  }

  return count;
};

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
