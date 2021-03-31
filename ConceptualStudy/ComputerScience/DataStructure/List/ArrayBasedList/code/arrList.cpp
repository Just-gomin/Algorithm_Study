/*
    # Array Based List
*/

#include <iostream>
#include <stdlib.h>
using namespace std;

class arrList{
    int *list;
    int maxSize;
public:
    arrList(int size){
        list = (int*)malloc(sizeof(int)*(size+1));
        list[0] = 0;
        maxSize = size;
    }

    void add(int data,int pos);
    void del(int pos);
    void access(int pos);
    void printList();
};

void arrList::add(int data,int pos){
    if(pos>list[0] + 1 || pos < 1){
        cout << "범위를 벗어났습니다." << endl;
        return;
    }

    for(int i = list[0]+1; i > pos; i--){
        list[i] = list[i-1];
    }
    list[pos] = data;
    list[0] += 1;
    cout << "Add " << data << " into " << pos <<".\n";
}

void arrList::del(int pos){
    if(pos > list[0] || pos < 1){
        cout << "범위를 벗어났습니다." << endl;
        return;
    }

    int delData = list[pos];
    for(int i = pos; i < list[0]; i++){
        list[i] = list[i+1];
    }
    list[0] -= 1;
    cout << "Delete " << delData << " at " << pos << ".\n";
}

void arrList::access(int pos){
    if(pos>list[0] || pos < 1){
        cout << "범위를 벗어났습니다." << endl;
        return;
    }

    cout << "List[" << pos << "] : " << list[pos] << endl;
}

void arrList::printList(){
    for(int i = 1; i <= list[0]; i++){
        cout << i << " : " << list[i] << endl;
    }
}

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
    int size = 0;
    cout << "List의 크기를 정해주세요 : ";
    cin >> size;

    arrList list = arrList(size);
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