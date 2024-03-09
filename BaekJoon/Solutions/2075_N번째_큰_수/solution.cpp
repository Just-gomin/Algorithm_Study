#include <iostream>
#include <stdlib.h>
#include <queue>
#include <vector>
#include <cstdio>
#include <functional>

using namespace std;

int main()
{
    cin.tie(nullptr), cout.tie(nullptr);
    ios::sync_with_stdio(false);

    int N;
    cin >> N;

    priority_queue<int, vector<int>, greater<int>> pq;

    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N; j++)
        {
            int x;
            cin >> x;

            pq.push(x);

            if (pq.size() > N)
            {
                pq.pop();
            }
        }
    }

    cout << pq.top() << "\n";

    return 0;
}