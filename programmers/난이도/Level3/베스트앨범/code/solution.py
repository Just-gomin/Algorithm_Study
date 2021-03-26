"""
    # 문제 해결 단서
    0. 입력 형식 : genres(노래의 장르를 배열), plays(재생횟수 배열)
        - 인덱스 별로 각각 다른 노래입니다.
        - 배열의 길이는 1~10000
    1. 장르 별로 가당 많이 재생된 노래를 두 개씩 모아 베스트 앨범으로 만드려합니다.
    2. 노래는 고유한 번호로 표현하며, genres[i]는 i번쨰 노래의 장르, plays[i]는 i번째의 재생 횟수입니다.
    3. 각 장르별로 두 곡씩이라는 제한이 있으므로 딕셔너리와 길이가 2인 리스트를 이용해서 해결합니다.
    4. 노래를 수록하는 기준은 다음과 같습니다.
        - 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
        - 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
        - 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

    # 문제 해결 방법
    1. n번의 반복을 통해서 장르별로 2곡씩 추출합니다.
    2. 각 반복마다 해당 노래의 장르가 딕셔너리에 있는지 파악하고 없다면 딕셔너리에 추가합니다.
    3. 추가하는 정보는 '장르':{'total':0,'best2':[]}이며, 장르의 'best2' 리스트에는 다시 [i,plays[i]]가 들어갑니다.
    4. 딕셔너리에 장르가 존재하는 경우에는 리스트의 최대 길이가 2이므로 둘중에 재생횟수가 낮은 곡과 이번 노래의 재생횟수를 비교합니다.
    5. 이번 노래의 재생횟수가 더 많다면, 리스트에 있는 노래를 교체합니다.
    6. 교체후 리스트에 담긴 노래를 고유 번호의 오름차순으로 정렬합니다.
    7. 각 장르별로 최대 두 곡씩 선별되었다면, 종합 재생 횟수를 기준으로 장르별 정렬 후 고유번호를 추출하여 반환합니다.
"""


def solution(genres=[], plays=[]):
    answer = []
    total_play = {}
    best2 = {}

    for i, (genre_info, play) in enumerate(zip(genres, plays)):
        if genre_info not in total_play:
            total_play[genre_info] = play
            best2[genre_info] = [[i, play]]
        else:
            total_play[genre_info] += play
            if len(best2[genre_info]) < 2:
                best2[genre_info].append([i, play])
            else:
                low_block = best2[genre_info][0]
                high_block = best2[genre_info][1]
                if low_block[1] > high_block[1]:
                    low_block = high_block
                elif low_block[1] == high_block[1]:
                    low_block = low_block if low_block[0] < high_block[0] else high_block

                if play > low_block[1]:
                    best2[genre_info].remove(low_block)
                    best2[genre_info].append([i, play])

    sorted_genres = sorted(
        total_play.items(), key=lambda x: x[1], reverse=True)
    for genre_info in sorted_genres:
        best2[genre_info[0]].sort(key=lambda x: x[1], reverse=True)
        for block in best2[genre_info[0]]:
            answer.append(block[0])

    return answer


ex1_genres = ["classic", "pop", "classic", "classic", "pop"]
ex1_plays = [500, 600, 150, 800, 2500]

print(solution(ex1_genres, ex1_plays))
