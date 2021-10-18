from sys import stdin

read = stdin.readline

n = int(read())
costs = [[0, 0, 0]]

for i in range(1, n+1):
    r, g, b = map(int, read().split())
    r_min = min(costs[i-1][1]+r, costs[i-1][2]+r)
    g_min = min(costs[i-1][0]+g, costs[i-1][2]+g)
    b_min = min(costs[i-1][0]+b, costs[i-1][1]+b)
    costs.append([r_min, g_min, b_min])

print(min(costs[n]))
