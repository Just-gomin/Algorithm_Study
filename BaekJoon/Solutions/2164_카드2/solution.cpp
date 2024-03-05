#include <iostream>
#include <stdlib.h>
#include <vector>
#include <queue>

using namespace std;

int main()
{
    cin.tie(nullptr);
    ios::sync_with_stdio(false);

    int N;
    cin >> N;

    queue<int> q;

    for (int i = 1; i <= N; i++)
    {
        q.push(i);
    }

    while (q.size() != 1)
    {
        q.pop();
        int front = q.front();
        q.pop();
        q.push(front);
    }

    cout << q.front() << "\n";

    return 0;
}