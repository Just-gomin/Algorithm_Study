#include <iostream>
#include <stdlib.h>
#include <vector>

using namespace std;

class Queue
{
private:
    int *_data;
    int _header;
    int _tail;
    int _size;
    int _maxSize;

public:
    Queue(int size)
    {
        _maxSize = size;
        _data = new int[_maxSize];
        _size = 0;
        _header = 0;
        _tail = 0;
    };

    void push(int x)
    {
        _size += 1;
        _data[_tail] = x;
        _tail = (_tail + 1) % _maxSize;
    }

    int pop()
    {
        if (empty())
            return -1;

        int result = _data[_header];
        _size -= 1;

        _header = (_header + 1) % _maxSize;

        return result;
    }

    int size()
    {
        return _size;
    }

    int empty()
    {
        return _size == 0;
    }

    int front()
    {
        return empty() ? -1 : _data[_header];
    }

    int back()
    {
        return empty() ? -1 : _data[_tail - 1];
    }

    ~Queue()
    {
        delete _data;
    };
};

int main()
{
    cin.tie(nullptr);
    ios::sync_with_stdio(false);

    int N;
    cin >> N;

    Queue q = Queue(N);

    for (int i = 0; i < N; i++)
    {
        string cmd;
        cin >> cmd;

        if (cmd == "push")
        {
            int X;
            cin >> X;
            q.push(X);
        }
        else if (cmd == "pop")
        {
            cout << q.pop() << "\n";
        }
        else if (cmd == "size")
        {
            cout << q.size() << "\n";
        }
        else if (cmd == "empty")
        {
            cout << (q.empty() ? 1 : 0) << "\n";
        }
        else if (cmd == "front")
        {
            cout << q.front() << "\n";
        }
        else if (cmd == "back")
        {
            cout << q.back() << "\n";
        }
    }

    return 0;
}