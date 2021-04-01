/*
    # Doubly Linked List
    - Node ( data, next, previous)
    - Linked List : (header, tail, add, delete, access, print, delList)
*/

#include <iostream> // 입출력 관련 헤더파일.
#include <stdlib.h> // malloc(메모리할당 함수)를 위한 헤더파일.
using namespace std;

struct Node{        // 데이터 한 개체
    int data;       // 데이터 값
    Node* next;     // 다음 노드
    Node* previous; // 이전 노드
};

class linkedList{   // Linked List(Doubly)
    Node* header;   // 헤더 노드 , 리스트의 길이를 데이터로 보유
    Node* tail;     // 꼬리 노드
public:
    linkedList(){   // linkedList 클래스 생성자 - header & tail노드 생성 및 연결
        header = (Node*)malloc(sizeof(Node));
        tail = (Node*)malloc(sizeof(Node));
        header->data = 0;
        header->next = tail;
        tail->previous = header;
    }
    void add(int data,int pos);
    void del(int pos);
    void access(int pos);
    void printList();
    void delList();
};

void linkedList::add(int data, int pos){ // 데이터를 추가하는 함수.
    if(pos > header->data + 1 || pos < 1){ // 위치 범위 확인 조건문
        cout << "범위를 벗어났습니다." << endl;
        return;
    }
    Node* preNode = header;     // 이전 노드
    Node* currNode = header;    // 현재 노드
    for (int i = 0; i < pos; i++){  // 지정 위치의 노드 탐색
        preNode = currNode;
        currNode = currNode->next;
    }
    /*
        # for 문 종료후 node 상태
        preNode : pos - 1 위치의 노드
        currNode : pos 위치의 노드 ( 추가할 노드의 위치 )
    */
    
    Node* newNode = (Node*)malloc(sizeof(Node));    // 추가할 노드 생성
    newNode->data = data;           // newNode에 데이터 입력 
    newNode->next = currNode;       // newNode의 다음 노드는 현재 노드
    preNode->next = newNode;        // preNode의 다음 노드는 newNode

    newNode->previous = preNode;    // newNode의 이전 노드는 preNode
    currNode->previous = newNode;   // 현재 노드의 이전 노드는 추가할 노드

    header->data += 1;              // 현재 리스트의 크기 
    cout << "Add " << data << " into " << pos << ".\n";
};

void linkedList::del(int pos){      // 리스트 상에 있는 데이터 삭제
    if(pos > header->data || pos < 1){ // 위치 범위 확인 조건문
        cout << "범위를 벗어났습니다." << endl;
        return;
    }
    Node* preNode = header;     // 이전 노드 header 노드로 초기화
    Node* currNode = header;    // 현재 노드 header 노드로 초기화
    Node* nextNode = header;    // 다음 노드 header 노드로 초기화

    for(int i = 0; i < pos; i++){   // 지정 위치의 노드 탐색
        preNode = currNode;
        currNode = currNode->next;
        nextNode = currNode->next;
    }
    /*
        # for 문 종료후 node 상태
        preNode : pos - 1 위치의 노드
        currNode : pos 위치의 노드 ( 삭제할 노드 )
        nextNode : pos + 1 위치의 노드
    */

    preNode->next = nextNode;       // preNode의 다음 노드는 nextNode
    nextNode->previous = preNode;   // nextNode의 이전 노드는 preNode

    cout << "Delete " << currNode->data << " at " << pos << ".\n";
    free(currNode);     // 삭제할 노드의 메모리 해제
    header->data -= 1;  // 리스트의 길이 1 감소
};

void linkedList::access(int pos){       // 데이터에 접근 (출력 )
    if(pos > header->data || pos < 1){  // 위치 범위 확인
        cout << "범위를 벗어났습니다." << endl;
        return;
    }
    Node* preNode = header;     // 이전 노드, 헤더 노드로 초기화
    Node* currNode = header;    // 현재 노드, 헤더 노드로 초기화

    for(int i = 0; i < pos; i++){   // 지정 위치의 노드 탐색
        preNode = currNode;
        currNode = currNode->next;
    }
    /*
        # for 문 종료후 node 상태
        preNode : pos - 1 위치의 노드
        currNode : pos 위치의 노드
    */
    cout << pos << " : " << currNode->data << endl;
};

void linkedList::printList(){   // Linked List의 데이터들 출력
    Node* currNode = header;    // 출력할 노드 header 노드로 초기화
    int size = header->data;    // 리스트의 총 길이
    int pos = 1;                // 현재 노드의 위치
    while(pos<=size){
        currNode = currNode->next;  // 현재 노드를 다음 노드로 갱신 
        cout << pos << " : " << currNode->data << endl;
        pos += 1;               // 현재 위치를 다음 위치로 갱신
    }
};

void linkedList::delList(){         // 전체 리스트 메모리 해제
    Node* currNode = header;
    Node* delNode = currNode;
    while(currNode->next){          // 마지막 노드까지 반복
        delNode = currNode;         // 현재 메모리 해제 대상 노드
        currNode = currNode->next;  // 다음 노드로 갱신
        cout << "Free " << delNode->data << ".\n"; 
        free(delNode);              // 메모리 해제
    }
};

char getCommand(){  // 프로그램을 진행하기 위한 명령어 입력
    char command;

    cout << "원하시는 명령어를 입력하세요." << endl;
    cout << "데이터 추가 : a" << endl;
    cout << "데이터 삭제 : d" << endl;
    cout << "데이터 조회 : s" << endl;
    cout << "리스트 출력 : p" << endl;
    cout << "종료 : q" << endl;
    cout << "Command >> ";
    cin >> command;

    return command;
}

int getPosition(){  // 데이터 조작을 위한 위치 입력
    int pos;

    cout << "원하시는 위치를 입력해주세요 : ";
    cin >> pos;

    return pos;
}

int main(void){
    linkedList list = linkedList(); // Linked List 객체 생성
    bool loopCondition = true;      // 사용자가 종료 입력시 까지 반복을 진행하기 위한 조건 변수
    char command;                   // 사용자가 입력한 명령을 담을 변수
    int pos = 0;                    // 사용자가 원하는 데이터 조작 위치를 담을 변수

    while(loopCondition){       // 종료 입력시 까지 반복
        command = getCommand(); // 현재 명령어 인식
        switch (command)        // 명령어에 따라 달리 동작
        {
    case 'a':                   // 데이터 추가를 입력한 경우 실행
            int data;
            pos = getPosition();
            cout << "원하는 값을 입력해주세요(정수) : ";
            cin >> data;
            cout << "\nResult )" << endl;
            list.add(data, pos);    // 리스트 자료 추가(데이터, 위치)
            break;

        case 'd':               // 데이터 삭제를 입력한 경우 실행
            pos = getPosition();
            cout << "\nResult )" << endl;
            list.del(pos);      // 리스트에서 pos 위치의 데이터 삭제
            break;
        
        case 's':               // 리스트 원소에 접근을 입력한 경우 실행
            pos = getPosition();
            cout << "\nResult )" << endl;
            list.access(pos);   // 리스트에서 pos 위치의 데이터 출력
            break;

        case 'p':               // 리스트 출력을 입력한 경우 실행
            cout << "\nResult )" << endl;            
            list.printList();
            break;

        case 'q':               // 프로그램 종료를 원하는 경우 실행
            cout << "\n프로그램을 종료합니다." << endl;
            list.delList();     // 리스트의 모든 데이터 메모리 해제
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