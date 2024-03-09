#include <iostream>
#include <stdlib.h>
#include <map>

using namespace std;

int main()
{
    cin.tie(nullptr), cout.tie(nullptr);
    ios::sync_with_stdio(false);

    string wood;
    int total = 0;
    map<string, int> treeMap;

    while (getline(cin, wood))
    {
        total += 1;

        map<string, int>::iterator it = treeMap.find(wood);

        if (it == treeMap.end())
        {
            treeMap[wood] = 1;
        }
        else
        {
            treeMap[wood] += 1;
        }
    }

    cout << fixed;
    cout.precision(4);
    for (map<string, int>::iterator iter = treeMap.begin(); iter != treeMap.end(); iter++)
    {
        cout << iter->first << " " << ((double)iter->second / total * 100) << "\n";
    }

    return 0;
}