def solution(a, edges):

    if sum(a) != 0:
        return -1

    answer = 0

    n = len(a)
    graph = {}
    counter = [0 for _ in range(n)]
    maxCount = 0
    maxIdx = 0
    for u,v in edges:
        graph.setdefault(u,[]).append(v)
        graph.setdefault(v,[]).append(u)
        counter[u] += 1
        counter[v] += 1
        if counter[u] > maxCount :
            maxCount = counter[u]
            maxIdx = u
        if counter[v] > maxCount :
            maxCount = counter[u]
            maxIdx = v

    root = maxIdx

    stack=[root]
    checker = [0 for _ in range(n)]
    checker[root] = 1
    while len(stack) != 0:
        pNode = stack[-1]
        if len(graph[pNode]) != 0:
            cNode = graph[pNode].pop(0)
            if checker[cNode] == 0:
                stack.append(cNode)
                checker[cNode] = 1
        else:
            cNode = stack.pop()
            if len(stack) == 0:
                break
            pNode = stack[-1]
            a[pNode] += a[cNode]
            answer += abs(a[cNode])
            a[cNode] = 0
    
    return answer

a = [-5,0,2,1,2]
edges = [[0,1],[3,4],[2,3],[0,3]]

print(solution(a,edges))