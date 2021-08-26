# Algorithm_Study

꾸준한 Algorithm 공부를 위해서 만든 저장소입니다. 사용언어는 JavaScript(ES6) 및 Python(python3)입니다.

<br>

## 저장소 구조

    ∟ 문제파일형식
    ∟ 알고리즘 문제 사이트
        ∟ 문제 분류
            ∟ 문제 이름
                ∟ code
                    ∟ solution
                ∟ doc
                    ∟ question.md
    ∟ 알고리즘 개념 공부
        ∟ 개념 분류
            ∟ 세부 내용
                ∟ code
                    ∟ concept
                ∟ doc
                    ∟ concept.md
    ∟ README.md

<br>
<br>

## 문제풀이

<br>

### 문제 풀이 형식( .js / .py ...)

```javascript
const solution = (arg1, arg2) => {
  let answer;
  // code body;
  return answer;
};
```

- 대부분의 파일에 적용이 되지 않은 사항으로 추후 문제를 다시 풀며 수정할 예정입니다. ( 2020.11.12 )

<br>

### 문서 형식 (.md)

```markdown
# 문제 원문

[]()

<br><br>

# 문제 해결 단서

1.
2.

<br><br>

# 문제 해결 방법

<br>

## Python

1.
```

<br>

### Commit Message 형식

    연.월.일_알고리즘 문제 사이트_문제이름(시도차수(-해결),언어)

    ex) 2021.01.01_Programmers_행렬의 곱셈(1차시도,JavaScript)
        2021.01.01_Programmers_행렬의 곱셈(2차시도-해결,Python)

- 2021.01.08 이전에 Commit된 문제 풀이들은 JavaScript로 해결한 문제들입니다. ( 2021.01.08 )

---

<br>
<br>

## 개념 공부

<br>

### 코드 구현 형식 ( .js / .py ...)

```javascript
const concept = (arg1, arg2) => {
  let result;
  //code body
  return result;
};
```

<br>

### 문서 형식 (.md)

```markdown
# Concept

[Notion 정리 주소](NotionLink)
```

<br>

### Commit Message 형식

    ConceptualStudy_개념내용

    ex) ConceptualStudy_조합
