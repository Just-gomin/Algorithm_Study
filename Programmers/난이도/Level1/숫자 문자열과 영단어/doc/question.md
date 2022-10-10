# 문제 원문

[숫자 문자열과 영단어](https://school.programmers.co.kr/learn/courses/30/lessons/81301)

<br><br>

# 문제 해결 단서

1. 일부 숫자가 문자로 치환된 문자열 s
2. 문자열을 숫자로 되돌려, s가 의미하는 숫자를 반환
3. 숫자와 영단어

|숫자| 영단어|
|:--:|:--:|
|0| zero|
|1| one|
|2| two|
|3| three|
|4| four|
|5| five|
|6| six|
|7| seven|
|8| eight|
|9| nine|

<br><br>

# 문제 해결 방법

1. 문자열에 대해 정규표현식을 이용해 각 영단어들을 숫자 문자로 변경합니다.
2. 변경된 문자열을 정수로 변환해 반환합니다.

<br>
