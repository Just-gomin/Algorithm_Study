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
    T* q;       // 배열 기반 큐
    int header; // 첫 번째 데이터를 가리키는 인데스 (헤더)
    int tail;   // 마지막 데이터를 가리키는 인덱스 (테일)
    int arr_size;   // 배열의 최대 크기
public:
    Queue(int qsize = 10){                  // Queue Class의 생성자 
        q = (T *)(malloc(sizeof(T)*qsize)); // 배열 기반 큐의 동적 할당
        header = 0;                         // header = 0으로 초기화
        tail = 0;                           // tail = 0으로 초기화
        arr_size = qsize;                   // 배열의 크기 초기화
    }
    
    ~Queue(){       // Queue Class의 소멸자
        free(q);    // 동적할당된 메모리 해제
        cout << "Queue의 메모리가 해제되었습니다." << endl;
    }

    bool isEmpty(){                 // Queue가 비어있는지 확인하는 멤버 함수
        return header == tail;      // tail과 header가 같은 곳을 가리키는지 여부 반환
    };

    bool isFull(){                  // Queue가 가득차있는지 확인하는 멤버 함수
        return ((tail + 1) % arr_size == header);   // tail의 다음 인덱스가 header인지 확인
    };

    void enqueue(const T& item){    // Queue에 item을 삽입하는 멤버함수
        if(!isFull()){              // Queue가 가득차있지 않은 경우 삽입
            q[tail] = item;
            cout << "Enqueue - " << tail << " : " << item << endl;
            tail = (tail + 1) % arr_size;
        } else {
            cout << "Queue is Full. Remove Item First." << endl;
        }
    }

    T dequeue(){            // Queue에서 item을 추출하는 멤버함수
        if(!isEmpty()){     // Queue가 비어있지 않은 경우 추출
            T rmItem = q[header];
            cout << "Dequeue - " << header << " : " << rmItem << endl;
            header = (header + 1) % arr_size;
            return rmItem;
        } else {
            cout << "Queue is Empty. Add Item First." << endl;
            return 0;
        }
    };

    T frontData(){          // 가장 앞에 있는 데이터를 반환하는 멤버함수
        return q[header];
    };

    T rearData(){           // 가장 뒤에 있는 데이터를 반환하는 멤버함수
        return q[tail-1];
    }

    void printQueue(){      // Queue에 들어있는 모든 원소들을 출력하는 함수
        cout << "------ Front ------" << endl;
        int idx = header;
        while(idx != tail){
            cout <<"Node "  << idx << " : " << q[idx] << endl;
            idx = (idx + 1) % arr_size;
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
        
        default:
            cout << "명령어를 다시 입력해주세요." << endl;
            break;
        }
    }
    return 0;
}