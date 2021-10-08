from sys import stdin, stdout

read = stdin.readline
write = stdout.write

n = int(read())
s = [list(map(int, read().split())) for _ in range(n)]
minimum = 100*20


def makeTeam(start_members, link_members, start_n, link_n, curr_member):
    global minimum

    if start_n == 0 and link_n == 0:
        start_ability = 0
        link_ability = 0

        for i, val in enumerate(start_members):
            for j in range(i+1, len(start_members)):
                start_ability += s[val][start_members[j]]
                start_ability += s[start_members[j]][val]

        for i, val in enumerate(link_members):
            for j in range(i+1, len(link_members)):
                link_ability += s[val][link_members[j]]
                link_ability += s[link_members[j]][val]

        diff = abs(start_ability - link_ability)

        minimum = diff if diff < minimum else minimum

    else:
        if start_n > 0:
            makeTeam(start_members+[curr_member], link_members,
                     start_n - 1, link_n, curr_member+1)
        if link_n > 0:
            makeTeam(start_members, link_members +
                     [curr_member], start_n, link_n - 1, curr_member+1)


makeTeam([], [], n/2, n/2, 0)

print(minimum)
