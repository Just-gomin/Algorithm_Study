/*
    # Doubly Linked List
    - Node ( data, next, previous)
    - Linked List : (header, tail, add, delete, access, print, delList)
*/

#include <iostream>
#include <stdlib.h>
using namespace std;

struct Node{
    int data;
    Node* next;
    Node* previous;
};

class linkedList{
    Node* header;
    Node* tail;
public:
    linkedList(){
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
    void delList(); // 리스트의 메모리 해제
};

void linkedList::add(int data, int pos){
    if(pos > header->data + 1 || pos < 1){
        cout << "범위를 벗어났습니다." << endl;
        return;
    }
    Node* preNode = header;
    Node* currNode = header;
    for (int i = 0; i < pos; i++){
        preNode = currNode;
        currNode = currNode->next;
    }

    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->next = currNode;
    preNode->next = newNode;

    newNode->previous = preNode;
    currNode->previous = newNode;

    header->data += 1;
    cout << "Add " << data << " into " << pos << ".\n";
};

void linkedList::del(int pos){
    if(pos > header->data || pos < 1){
        cout << "범위를 벗어났습니다." << endl;
        return;
    }
    Node* preNode = header;
    Node* currNode = header;
    Node* nextNode = header;

    for(int i = 0; i < pos; i++){
        preNode = currNode;
        currNode = currNode->next;
        nextNode = currNode->next;
    }

    preNode->next = nextNode;
    nextNode->previous = preNode;

    cout << "Delete " << currNode->data << " at " << pos << ".\n";
    free(currNode);
    header->data -= 1;
};

void linkedList::access(int pos){
    if(pos > header->data || pos < 1){
        cout << "범위를 벗어났습니다." << endl;
        return;
    }
    Node* preNode = header;
    Node* currNode = header;

    for(int i = 0; i < pos; i++){
        preNode = currNode;
        currNode = currNode->next;
    }
    cout << pos << " : " << currNode->data << endl;
};

void linkedList::printList(){
    Node* currNode = header;
    int size = header->data;
    int pos = 1;
    while(pos<=size){
        currNode = currNode->next;
        cout << pos << " : " << currNode->data << endl;
        pos += 1;
    }
};

void linkedList::delList(){
    Node* currNode = header;
    Node* delNode = currNode;
    while(currNode->next){
        delNode = currNode;
        currNode = currNode->next;
        cout << "Free " << delNode->data << ".\n"; 
        free(delNode);
    }
};

char getCommand(){
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

int getPosition(){
    int pos;

    cout << "원하시는 위치를 입력해주세요 : ";
    cin >> pos;

    return pos;
}

int main(void){
    linkedList list = linkedList();
    bool loopCondition = true;
    char command;
    int pos = 0;

    while(loopCondition){
        command = getCommand();
        switch (command)
        {
        case 'a':
            int data;
            pos = getPosition();
            cout << "원하는 값을 입력해주세요(정수) : ";
            cin >> data;
            cout << "\nResult )" << endl;
            list.add(data, pos);
            break;

        case 'd':
            pos = getPosition();
            cout << "\nResult )" << endl;
            list.del(pos);
            break;
        
        case 's':
            pos = getPosition();
            cout << "\nResult )" << endl;
            list.access(pos);
            break;

        case 'p':
            cout << "\nResult )" << endl;            
            list.printList();
            break;

        case 'q':
            cout << "\n프로그램을 종료합니다." << endl;
            list.delList();
            loopCondition = false;
            break;

        default:
            cout << "\n명령어를 다시 입력 하세요." << endl; 
            break;
        }
        cout << "\n\n";
    }
    
    return 0;
}