#include <iostream>
#include <stdlib.h>
#include <vector>
#include <set>

using namespace std;

int main()
{
    cin.tie(nullptr), cout.tie(nullptr);
    ios::sync_with_stdio(false);

    int N, M;
    cin >> N;
    cin >> M;

    set<string> S;

    for (int i = 0; i < N; i++)
    {
        string element;
        cin >> element;

        S.insert(element);
    }

    int count = 0;
    set<string>::iterator it;

    for (int i = 0; i < M; i++)
    {
        string test;
        cin >> test;
        it = S.find(test);

        if (it != S.end())
        {
            count += 1;
        }
    }

    cout << count << "\n";

    return 0;
}