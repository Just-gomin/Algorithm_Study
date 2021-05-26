def solution(values, edges, queries):
    answer = []
    adGraph = {}
    maxi = 0
    for [start, end] in edges:
        if start in adGraph:
            adGraph[start].append(end)
        else :
            adGraph[start] = [end]
        if end in adGraph:
            adGraph[end].append(start)
        else:
            adGraph[end] = start
        
        bigger = start if start > end else end
        if maxi < bigger :
            maxi = bigger 
    
    visited = [False for _ in range(maxi)]
    visited[0] = True

    for i in range(maxi):
        sorted(adGraph[i])
    
    queue = [1]

    return answer