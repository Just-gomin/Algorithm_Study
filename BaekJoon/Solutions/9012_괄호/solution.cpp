#include <iostream>
#include <stdlib.h>
#include <vector>

using namespace std;

int main()
{
    int T;
    cin >> T;

    for (int i = 0; i < T; i++)
    {
        string testCase;
        cin >> testCase;
        vector<char> stack = {};

        for (int j = 0; j < testCase.length(); j++)
        {
            if (testCase[j] == '(')
            {
                stack.push_back('(');
            }
            else
            {
                if (stack.size() != 0 && stack.back() == '(')
                {
                    stack.pop_back();
                }
                else
                {
                    stack.push_back('0');
                }
            }
        }

        cout << (stack.empty() ? "YES" : "NO") << endl;
    }

    return 0;
}