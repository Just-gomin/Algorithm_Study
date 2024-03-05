#include <iostream>
#include <stdlib.h>
#include <vector>
#include <queue>

using namespace std;

int main()
{
    cin.tie(nullptr);
    ios::sync_with_stdio(false);

    int N, K;
    cin >> N;
    cin >> K;

    queue<int> q;

    for (int i = 1; i <= N; i++)
    {
        q.push(i);
    }

    cout << "<";

    // 요세푸스 순열
    while (!q.empty())
    {
        for (int i = 0; i < K - 1; i++)
        {
            int val = q.front();
            q.pop();
            q.push(val);
        }

        cout << q.front();
        q.pop();

        if (q.size() != 0)
        {
            cout << ", ";
        }
    }

    cout << ">\n";

    return 0;
}