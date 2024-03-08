#include <iostream>
#include <stdlib.h>
#include <stdexcept>

using namespace std;

template <typename T>
class MaxHeap
{
private:
    T *_data;
    int maxSize;

public:
    MaxHeap(int size)
    {
        maxSize = size;
        _data = new T[maxSize];
        _data[0] = 0;
    }

    void swap(int idx, int otherIdx)
    {
        if (idx <= 0 || otherIdx <= 0)
        {
            throw range_error("Invalid index. Index must be bigger than 0.");
            return;
        }

        if (idx > _data[0] || otherIdx > _data[0])
        {
            return;
        }

        T temp = _data[idx];
        _data[idx] = _data[otherIdx];
        _data[otherIdx] = temp;
    }

    int heapify(int index)
    {
        int leftChild = 2 * index;
        int rightChild = leftChild + 1;
        int biggiest = index;

        if (leftChild <= maxSize && _data[biggiest] < _data[leftChild])
        {
            biggiest = leftChild;
        }

        if (rightChild <= maxSize && _data[biggiest] < _data[rightChild])
        {
            biggiest = rightChild;
        }

        if (biggiest != index)
        {
            swap(index, biggiest);
        }

        return biggiest;
    }

    void heapifyUp(int index)
    {
        if (index > maxSize)
        {
            throw range_error("Invalid index. Index must be bigger than 0.");
            return;
        }

        if (index < 1)
        {
            return;
        }

        heapify(index);
        heapifyUp((int)(index / 2));
    }

    void heapifyDown(int index)
    {
        if (index < 1)
        {
            throw range_error("Invalid index. Index must be bigger than 0.");
            return;
        }

        if (index > maxSize)
        {
            return;
        }

        int nextIdx = heapify(index);
        if (nextIdx != index)
        {
            heapifyDown(nextIdx);
        }
    }

    void insert(T value)
    {
        if (_data[0] + 1 >= maxSize)
        {
            throw length_error("Heap is full.");
            return;
        }

        _data[0] += 1;
        _data[_data[0]] = value;

        heapifyUp(_data[0]);
    }

    T del()
    {
        if (_data[0] <= 0)
        {
            throw length_error("Heap is empty.");
            // return ;
        }

        if (_data[0] == 1)
        {
            _data[0] -= 1;
            return _data[1];
        }

        swap(1, _data[0]);

        T top = _data[_data[0]];

        _data[0] -= 1;

        heapifyDown(1);

        return top;
    }

    T top()
    {
        if (_data[0] < 0)
        {
            cout << "Heap is empty."
                 << "\n";
            return;
        }

        return _data[1];
    }

    int size()
    {
        return _data[0];
    }

    void print()
    {
        cout << "[";

        for (int i = 1; i <= _data[0]; i++)
        {
            cout << _data[i];

            if (i < _data[0])
            {
                cout << ", ";
            }
        }
        cout << "]\n";
    }

    ~MaxHeap()
    {
        delete _data;
    }
};

int main()
{
    MaxHeap<int> heap = MaxHeap<int>(10);

    for (int i = 1; i < 10; i++)
    {
        heap.insert(i);
        heap.print();
    }

    for (int i = 1; i < 10; i++)
    {
        heap.del();
        heap.print();
    }

    return 0;
}