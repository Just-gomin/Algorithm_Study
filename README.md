# Algorithm_Study

Algorithm 학습을 위한 저장소입니다.

</br>

## 📔 스터디

[![Static Badge](https://img.shields.io/badge/%EB%B0%94%EB%A1%9C%EA%B0%80%EA%B8%B0-grey?style=for-the-badge&label=let's%20exit&labelColor=blue)](https://www.notion.so/just-gomin/Let-s-EXIT-ab1933af0bac4e05a0d278eddce9e5ca?pvs=4)

[![Static Badge](https://img.shields.io/badge/%EB%B0%94%EB%A1%9C%EA%B0%80%EA%B8%B0-grey?style=for-the-badge&label=javascript%20algorithm&labelColor=yellow)](https://www.notion.so/just-gomin/Javascript-Study-c7bec2f769fd4a02bf32a410e4da03e3?pvs=4)

</br></br>

## 📚 사용 언어 목록

</br>

[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](./)
[![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)](./)
[![Go](https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white)](./)

</br></br>

## 🗂 저장소 구조

    ∟ 문제파일형식
    ∟ 알고리즘 문제 사이트
        ∟ 문제 분류
            ∟ 문제 이름
                ∟ solution.xx
    ∟ 알고리즘 개념 공부
        ∟ 개념 분류
            ∟ 세부 내용
                ∟ code
                    ∟ concept
                ∟ doc
                    ∟ concept.md
    ∟ README.md

</br>
</br>

## 📃 문제풀이

</br>

### 문제 풀이 형식( .js / .py ...)

```javascript
/*
  - 문제 Link : 
*/

function solution() {
  let answer = "";
  // code body.
  return answer;
}
```

- 대부분의 파일에 적용이 되지 않은 사항으로 추후 문제를 다시 풀며 수정할 예정입니다. ( 2020.11.12 )
- [백준](https://www.acmicpc.net/) 문제의 경우, 입출력 받는 코드들 포함시켜 정리 해두었습니다. [참고](./BaekJoon/Playground/js_playground)

</br>

### Commit Message 형식

    알고리즘 문제 사이트_문제이름(시도차수(-해결),언어)

    ex) Programmers_행렬의 곱셈(1차시도,JavaScript)
        Programmers_행렬의 곱셈(2차시도-해결,Python)

- 2021.01.08 이전에 Commit된 문제 풀이들은 JavaScript로 해결한 문제들입니다. ( 2021.01.08 )

---

</br>
</br>

## 📑 개념 공부

</br>

### 코드 구현 형식 ( .js / .py ...)

```javascript
const concept = (arg1, arg2) => {
  let result;
  //code body
  return result;
};
```

</br>

### 문서 형식 (.md)

```markdown
# Concept

[Notion 정리 주소](NotionLink)
```

</br>

### Commit Message 형식

    ConceptualStudy_개념내용

    ex) ConceptualStudy_조합
