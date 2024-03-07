#include <iostream>
#include <stdlib.h>
#include <vector>
#include <map>

using namespace std;

int main()
{
    cin.tie(nullptr), cout.tie(nullptr);
    ios::sync_with_stdio(false);

    int N, M;
    cin >> N;
    cin >> M;

    map<string, string> name_map;
    map<string, string> number_map;

    for (int i = 1; i <= N; i++)
    {
        string name;
        cin >> name;

        string numStr = to_string(i);

        name_map.insert(pair<string, string>(name, numStr));
        number_map.insert(pair<string, string>(numStr, name));
    }

    for (int i = 1; i <= M; i++)
    {
        string question;
        cin >> question;

        map<string, string>::iterator it;

        it = name_map.find(question);

        if (it == name_map.end())
        {
            it = number_map.find(question);
        }

        cout << it->second << '\n';
    }

    return 0;
}