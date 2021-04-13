/*
    # Queue

    - Circular Array Based Queue
    - Header, Tail
    - Enqueue
    - Dequeue
    - Check Queue Empty
    - Check Queue Full
    - Check First Data
    - Check Last Data
*/

#include <iostream>
#include <stdlib.h>

using namespace std;

template<typename T>

class Queue{
private:
    T* q;
    int header;
    int tail;
    int max_size;
public:
    Queue(int qsize = 10){
        q = (T *)(malloc(sizeof(T)*qsize));
        header = 0;
        tail = 0;
        max_size = qsize;
    }
    
    ~Queue(){
        free(q);
        cout << "Queue의 메모리가 해제되었습니다." << endl;
    }

    bool isEmpty(){
        return header == tail;
    };
    bool isFull(){
        return ((tail + 1) % max_size == header);
    };

    void enqueue(const T& item){
        if(!isFull()){
            q[tail] = item;
            cout << "Enqueue - " << tail << " : " << item << endl;
            tail = (tail + 1) % max_size;
        } else {
            cout << "Queue is Full. Remove Item First." << endl;
        }
    }

    void dequeue(){
        if(!isEmpty()){
            T rmItem = q[header];
            cout << "Dequeue - " << header << " : " << rmItem << endl;
            header = (header + 1) % max_size;
        } else {
            cout << "Queue is Empty. Add Item First." << endl;
        }
    };

    T frontData(){
        return q[tail-1];
    };

    T rearData(){
        return q[header];
    }

    void printQueue(){
        cout << "------ Front ------" << endl;
        for(int i = tail-1; i >= header ; i--){
            cout <<"Node " << i << " : " << q[i] << endl;
        }
        cout << "------  Rear  ------" << endl;
    }
};

char getCommand(){  // 프로그램을 진행하기 위한 명령어 입력
    char command;

    cout << "\n원하시는 명령어를 입력하세요." << endl;
    cout << "데이터 추가 : a" << endl;
    cout << "데이터 삭제 : d" << endl;
    cout << "큐 Front Data 확인 : f" << endl;
    cout << "큐 Rear Data 확인 : r" << endl;
    cout << "큐 비었는지 확인 : e" << endl;
    cout << "큐 가득 찼는지 확인 : o" << endl;
    cout << "큐 출력 : p" << endl;
    cout << "종료 : q" << endl;
    cout << "Command >> ";
    cin >> command;

    return command;
}


int main(void){

    int queue_size;
    bool loopCondition = true;
    char command;
    bool isempty;

    cout << "Queue System Start." << endl;
    cout << "Queue의 최대 크기를 입력하세요 : ";
    cin >> queue_size;

    Queue<int> queue(queue_size);

    while(loopCondition){
        command = getCommand();
        switch(command)
        {
        case 'a':
            int data;
            cout << "원하는 값을 입력해주세요(정수) : ";
            cin >> data;
            cout << "\nResult )" << endl;
            queue.enqueue(data);
            break;

        case 'd':
            cout << "\nResult )" << endl;
            queue.dequeue();
            break;

        case 'f':
            cout << "\nResult )" << endl;
            cout << "Front Data : " << queue.frontData() << endl;
            break;

        case 'r':
            cout << "\nResult )" << endl;
            cout << "Rear Data : " << queue.rearData() << endl;
            break;
        
        case 'e':
            cout << "\nResult )" << endl;
            if(queue.isEmpty()){
                cout << "Queue is Empty." << endl;
            } else {
                cout << "Queue is not Empty." << endl;
            }
            break;
        
        case 'o':
            cout << "\nResult )" << endl;
            if(queue.isFull()){
                cout << "Queue is Full." << endl;
            } else {
                cout << "Queue is not Full." << endl;
            }
            break;

        case 'p':
            cout << "\nResult )" << endl;
            queue.printQueue();
            break;

        case 'q':
            cout << "프로그램을 종료합니다." << endl;
            loopCondition = false;
            break;
        }
    }
    return 0;
}