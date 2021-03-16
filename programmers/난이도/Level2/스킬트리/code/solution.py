"""
    # 문제 해결 단서
    0. 입력 형식 : skill(선행 스킬 순서, 길이 1이상 26이하), skill_trees(유저들이 만든 스킬트리 2이상 26이하의 스킬 순서, 1이상 20이하 배열)
        - 스킬은 알파벳 대문자로 표기합니다.
        - 모든 문자열을 알파벳 대문자로만 이루어져 있습니다.
        - skill과 skill_trees의 문자열들에 중복된 스킬은 존재하지 않습니다.
    1. 선행 스킬은 반드시 그 순서에 맞게 배워야합니다.
    2. 선행 스킬에 포함되지 않은 스킬들은 순서에 상관없이 배울 수 있습니다.
    3. skill = "CBD" 인 경우, "ACBEFGD"가 가능합니다.

    # 문제 해결 방법
    1. 사용자가 만든 스킬트리 중 선행 스킬 목록에 있는 스킬들을 추출합니다.
    2. 추출한 스킬들의 순서가 선행 스킬트리의 순서와 맞는지 확인합니다.
    3. 맞는 스킬 트리들의 개수를 셉니다.
"""


def solution(skill="", skill_trees=[]):
    answer = 0
    for custom in skill_trees:
        checker = []
        for s in custom:
            if s in skill:
                checker.append(s)

        isRightTree = True
        for i, s in enumerate(checker):
            if s != skill[i]:
                isRightTree = False
        answer += 1 if isRightTree else 0

    return answer
