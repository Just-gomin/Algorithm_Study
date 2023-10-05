/*
    # Stack ( Linked List Based )

    - Push
    - Pop
    - Seek at the top
    - Check a Stack is empty
    - Check a Stack size
    - Make a Stack Empty

*/

#include <iostream>
using namespace std;

template <typename T> class Stack; // Stack 클래스 template으로 선언

template <typename T>

class Node          // 스택의 데이터 단위가 될 Node Class 선언 및 정의
{
private :
    T data;         // 각 노드가 가질 데이터 변수
    Node<T>* link;  // 각 노드가 가리킬 다음 노드
public:
    Node(T element = 0, Node* next = nullptr): data(element), link(next) {} // Node Class의 생성자
    friend Stack<T>;                                                        // Node Class의 friend Class Stack
    void printNode() { cout << "< Node " << data << ">" << endl;}           // 각 노드의 정보 출력 멤버 함수
};

template <typename T>

class Stack             // 스택 클래스
{
private:
    Node<T>* header;    // 스택의 헤더 노드
public:
    Stack(){            // 스택 클래스 생성자
        header = new Node<T>;   // 헤더 노드 생성
        header->data = 0;       // 헤더 노드 의 데이터 0으로 초기화
        header->link = header;  // 헤더 노드의 다음 노드는 헤더 노드로 초기화
    }

    ~Stack(){           // 스택 클래스 소멸자
        makeEmpty();    // 스택을 비우는 멤버 함수 실행
    }

    void Push(const T& item){                   // 스택에 자료를 추가 하는 함수
        Node<T>* newNode = new Node<T>(item);   // 새로운 노드 생성
        newNode->link = header->link;           // 새로운 노드의 다음 노드는 헤더 노드가 가리키던 노드
        header->link = newNode;                 // 헤더 노드의 다음 노드는 새로 생성된 노드

        cout << "Push" << endl;
        newNode->printNode();
    }

    T Pop(){                                    // 스택에서 제일 위의 데이터 제거
        Node<T>* topNode = new Node<T>;         // 최상위 노드를 가리킬 노드 생성
        topNode = header->link;                 // 최상위 노드로 초기화
        header->link = topNode->link;           // 헤더 노드의 다음 노드는 최상위 노드가 가리키던 노드

        cout << "Pop" << endl;
        topNode->printNode();

        return topNode->data;
    }

    void makeEmpty(){                           // 스택을 비우는 함수
        while(header->link != header){          // 헤더 노드가 가리키는 노드가 헤더 노드가 아닐 동안 실행
            Pop();                              // 최상위 노드 제거
        }
    }

    bool isEmpty(){                             // 스택이 비었는지 확인 하는 함수
        return header->link == header;          // 헤더 노드가 가리키는 것이 자기 자신인지 확인
    }

    T Top(){                                    // 최상위 노드 조회 함수
        Node<T>* topNode = new Node<T>;         // 최상위 노드를 담을 노드 생성
        topNode = header->link;                 // 최상위 노드로 초기화
        return topNode->data;                   // 최상위 노드의 데이터 반환
    }

    void printStack(){                          // 스택의 모든 원소를 출력
        cout << "-----TOP-----" << endl;
        Node<T>* curNode = header;              // 각 노드를 가리킬 노드 생성 및 헤더로 초기화
        while(curNode->link != header){         // 현재 노드가 가리키는 노드가 헤더 노드가 아닐 동안 실행
            curNode = curNode->link;            // 현재 노드를 다음 노드로 갱신
            curNode->printNode();
        }
        cout << "----Bottom----" << endl;
    }
};

char getCommand(){  // 프로그램을 진행하기 위한 명령어 입력
    char command;

    cout << "원하시는 명령어를 입력하세요." << endl;
    cout << "데이터 추가 : a" << endl;
    cout << "데이터 삭제 : d" << endl;
    cout << "스택 비우기 : c" << endl;
    cout << "Top 데이터 조회 : s" << endl;
    cout << "스택 출력 : p" << endl;
    cout << "스택 비었는지 확인 : e" << endl;
    cout << "종료 : q" << endl;
    cout << "Command >> ";
    cin >> command;

    return command;
}


int main(void){
    Stack<int> stack;           // int형 Stack 생성
    bool loopCondition = true;  // 사용자가 종료 입력시 까지 반복을 진행하기 위한 조건 변수
    char command;               // 사용자가 입력한 명령을 담을 변수
    bool isempty;

    while(loopCondition){       // 종료 입력시 까지 반복
        command = getCommand(); // 현재 명령어 인식
        switch (command)        // 명령어에 따라 달리 동작
        {
        case 'a':               // 데이터 추가를 입력한 경우 실행
            int data;
            cout << "원하는 값을 입력해주세요(정수) : ";
            cin >> data;
            cout << "\nResult )" << endl;
            stack.Push(data);
            break;

        case 'd':               // 데이터 삭제를 입력한 경우 실행
            cout << "\nResult )" << endl;
            stack.Pop();
            break;

        case 'c':
            cout << "\nResult ) " << endl;
            stack.makeEmpty();
            break;
        
        case 's':               // Top 원소에 접근을 입력한 경우 실행
            cout << "\nResult )" << endl;
            cout << "Top Node : " <<stack.Top() << endl;
            break;

        case 'p':               // 스택 출력을 입력한 경우 실행
            cout << "\nResult )" << endl;
            stack.printStack();      
            break;

        case 'e':
            isempty = stack.isEmpty();
            cout << "\nResult )" << endl;
            if(isempty){
                cout << "Stack is empty." << endl;
            } else{
                cout << "Stack is not empty." << endl;
            }
            break;
            
        case 'q':               // 프로그램 종료를 원하는 경우 실행
            cout << "\n프로그램을 종료합니다." << endl;
            loopCondition = false;
            break;

        default:                // 제시되지 않은 문자 입력시 실행
            cout << "\n명령어를 다시 입력 하세요." << endl; 
            break;
        }
        cout << "\n\n";
    }
    
    return 0;
}