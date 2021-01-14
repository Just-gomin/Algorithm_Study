#
# - 문제 해결 단서
#   1. 입력 형식 : numbers = [정수 배열] ( 길이는 2 ~ 100)
#   2. 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수의 배열을 오름차순으로 정렬.
#
# - 문제 해결 방법
#   1. Sequential Search를 통해서 서로 다른 인덱스의 숫자들을 더하고 리스트에 넣습니다.
#   2. 리스트에 넣을 때 이미 동일한 값이 있는지 확인합니다.
#

def solution(numbers=[]):
    answer = []
    for i in range(len(numbers)-1):
        for j in range(i+1, len(numbers)):
            temp = numbers[i] + numbers[j]
            if temp not in answer:
                answer.append(temp)
    answer.sort()
    return answer


example1 = [2, 1, 3, 4, 1]
example2 = [5, 0, 2, 7]

print(solution(example1))  # result : [2,3,4,5,6,7]
print(solution(example2))  # result : [2,5,7,9,12]
