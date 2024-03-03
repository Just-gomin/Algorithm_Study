#include <iostream>
#include <stdlib.h>
#include <vector>

using namespace std;

class Stack
{
private:
    vector<int> data;

public:
    Stack() : data({}){}; // Stack 초기화

    void push(int x)
    {
        data.push_back(x);
    };

    int pop()
    {
        if (empty())
        {
            return -1;
        }

        int rear = data.back();
        data.pop_back();

        return rear;
    };

    int size()
    {
        int size = data.size();
        return size;
    };

    bool empty()
    {
        return size() == 0;
    };

    int top()
    {
        if (empty())
        {
            return -1;
        }

        return data.back();
    };
};

int main()
{
    int cmdLength;
    cin >> cmdLength;

    Stack stack;

    for (int i = 0; i < cmdLength; i++)
    {
        string cmd;
        cin >> cmd;

        if (cmd == "push")
        {
            int X;
            cin >> X;
            stack.push(X);
        }
        else if (cmd == "pop")
        {
            cout << stack.pop() << endl;
        }
        else if (cmd == "size")
        {
            cout << stack.size() << endl;
        }
        else if (cmd == "empty")
        {
            cout << (stack.empty() ? 1 : 0) << endl;
        }
        else if (cmd == "top")
        {
            cout << stack.top() << endl;
        }
    }

    return 0;
}
