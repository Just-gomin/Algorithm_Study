# 💡 Graph

Node(정점, Vertex)와 Edge(간선)로 구성된 비선형 자료구조로, 객체 간의 관계를 표현하는 데 사용된다.

## 📌 Graph의 특성

- **Node(Vertex, 정점)** 와 **Edge(간선)** 로 구성된다.
- 하나의 Node는 여러 개의 Edge를 가질 수 있다.
- Tree와 달리 사이클(Cycle)이 존재할 수 있다. (**순환 구조** 가능)
- RootNode 개념이 없으며, 부모-자식 관계도 존재하지 않는다.
- Tree는 Graph의 특수한 형태(사이클이 없는 연결 그래프)이다.

## 📌 Graph의 구성 요소

### Node (Vertex, 정점)

Graph를 구성하는 데이터를 가진 기본 단위이다.

### Edge (간선)

Node와 Node 사이를 연결하는 선이다.

### 인접(Adjacency)

두 Node가 Edge로 직접 연결된 상태를 의미한다.

### 차수(Degree)

하나의 Node에 연결된 Edge의 수를 의미한다.

- **방향 그래프**에서는 들어오는 간선의 수를 **In-degree**, 나가는 간선의 수를 **Out-degree** 라고 한다.

## 📌 Graph의 종류

### 방향 그래프 vs 무방향 그래프

#### 무방향 그래프 (Undirected Graph)

- Edge에 방향이 없다.
- Edge `(A, B)` 는 `(B, A)` 와 동일하다. (양방향 이동 가능)

```text
A --- B
|    |
C --- D
```

#### 방향 그래프 (Directed Graph)

- Edge에 방향이 있다.
- Edge `(A → B)` 는 A에서 B로만 이동 가능하다.

```text
A → B
↓   ↓
C → D
```

### 가중치 그래프 (Weighted Graph)

- Edge에 가중치(비용, 거리 등)가 부여된 Graph이다.
- 최단 경로 문제 등에 활용된다.

```text
A --5-- B
|       |
3       2
|       |
C --4-- D
```

### 연결 그래프 vs 비연결 그래프

- **연결 그래프**: 모든 Node 사이에 경로가 존재하는 Graph
- **비연결 그래프**: 일부 Node 사이에 경로가 없는 Graph (고립된 Node 또는 컴포넌트 존재)

### 순환 그래프 vs 비순환 그래프

- **순환 그래프 (Cyclic Graph)**: 특정 Node에서 출발하여 다시 자기 자신으로 돌아오는 경로가 존재하는 Graph
- **비순환 그래프 (Acyclic Graph)**: 사이클이 없는 Graph (DAG: Directed Acyclic Graph)

## 📌 Graph의 표현 방식

### 인접 행렬 (Adjacency Matrix)

2차원 배열로 Node 간의 연결 상태를 표현한다.

- `matrix[i][j] = 1` 이면 Node i와 Node j가 연결됨을 의미한다.
- 가중치 그래프의 경우 1 대신 가중치 값을 저장한다.

```text
    A  B  C  D
A [ 0, 1, 1, 0 ]
B [ 1, 0, 0, 1 ]
C [ 1, 0, 0, 1 ]
D [ 0, 1, 1, 0 ]
```

| 장점 | 단점 |
| :------ | :------ |
| 두 Node 간 연결 여부를 `O(1)` 에 확인 가능 | Node 수 N에 대해 `O(N²)` 의 공간 필요 |
| 구현이 단순하다 | Edge가 적은 희소 그래프에서 메모리 낭비 발생 |

### 인접 리스트 (Adjacency List)

각 Node마다 연결된 Node들의 목록을 리스트로 표현한다.

```text
A → [B, C]
B → [A, D]
C → [A, D]
D → [B, C]
```

| 장점 | 단점 |
| :------ | :------ |
| Edge 수에 비례하는 `O(V + E)` 공간만 사용 | 두 Node 간 연결 여부 확인에 `O(V)` 필요 |
| 희소 그래프에 효율적이다 | 인접 행렬보다 구현이 복잡하다 |

## 📌 Graph 탐색

### DFS (깊이 우선 탐색, Depth-First Search)

시작 Node에서 출발하여 한 방향으로 최대한 깊이 탐색한 후, 더 이상 진행할 수 없으면 되돌아와 다른 방향을 탐색하는 방법이다.

- **Stack** 또는 **재귀 함수**를 이용하여 구현한다.
- 시간 복잡도: `O(V + E)`

```text
그래프:            DFS 탐색 순서 (시작: A):
A - B - D          A → B → D → E → C
|   |
C   E

방문: A → (B, C 중 B 선택) → B → (D, E 중 D 선택) → D → E → C
```

### BFS (너비 우선 탐색, Breadth-First Search)

시작 Node에서 출발하여 인접한 모든 Node를 먼저 탐색한 후, 그 다음 레벨의 Node들을 탐색하는 방법이다.

- **Queue**를 이용하여 구현한다.
- 두 Node 간의 **최단 경로**를 구하는 데 활용된다.
- 시간 복잡도: `O(V + E)`

```text
그래프:            BFS 탐색 순서 (시작: A):
A - B - D          A → B → C → D → E
|   |
C   E

방문: A → (인접 B, C 모두 방문) → B, C → (B의 인접 D, E 방문) → D, E
```

## 📌 시간 복잡도

| Operation | 인접 행렬 | 인접 리스트 |
| :------------------------: | :------------ | :------------ |
| 두 Node 연결 여부 확인 | `O(1)` | `O(V)` |
| 특정 Node의 인접 목록 | `O(V)` | `O(degree)` |
| Node 추가 | `O(V²)` | `O(1)` |
| Edge 추가 | `O(1)` | `O(1)` |
| DFS / BFS | `O(V²)` | `O(V + E)` |
| 공간 복잡도 | `O(V²)` | `O(V + E)` |

> `V`: Node(정점) 수, `E`: Edge(간선) 수

## 📌 활용

- **최단 경로 알고리즘**: 다익스트라(Dijkstra), 벨만-포드(Bellman-Ford), 플로이드-워샬(Floyd-Warshall)
- **최소 신장 트리(MST)**: 크루스칼(Kruskal), 프림(Prim) 알고리즘
- **위상 정렬(Topological Sort)**: 작업 스케줄링, 의존성 관리 (DAG 활용)
- **연결 컴포넌트**: 네트워크 연결 상태 분석
- **실생활 모델링**: 지도(도로망), SNS(친구 관계), 인터넷(네트워크 라우팅)
