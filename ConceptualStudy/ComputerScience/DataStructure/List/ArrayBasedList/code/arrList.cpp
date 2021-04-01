/*
    # Array Based List
    - array_base_list
*/

#include <iostream>
#include <stdlib.h>
using namespace std;

class arrList{
    int *list;      // 배열 기반 리스트를 표현할 클래스 변수
    int maxSize;    // 배열의 최대 길이를 담을 클래스 변수
public:
    arrList(int size){  // arrList 클래스의 생성자
        list = (int*)malloc(sizeof(int)*(size+1));  // 입력한 최대 길이를 통해 메모리 할당
        list[0] = 0;    // 리스트의 길이를 담을 배열의 0번째 원소(Header 역할)
        maxSize = size; // 배열의 길이의 최대치
    }

    void add(int data,int pos); // 데이터 추가
    void del(int pos);          // 데이터 삭제
    void access(int pos);       // 데이터 조회
    void printList();           // 리스트의 전체 데이터 출력
    void delList();
};

void arrList::add(int data,int pos){    // 데이터 추가 함수
    if(pos>list[0] + 1 || pos < 1){     // 위치 범위 확인
        cout << "범위를 벗어났습니다." << endl;
        return;
    }

    for(int i = list[0]+1; i > pos; i--){   // 마지막 원소 부터 원하는 위치까지 뒤의 한칸으로 덮어쓰기 진행
        list[i] = list[i-1];
    }
    list[pos] = data;   // 지정 위치에 데이터 삽입
    list[0] += 1;       // 리스트의 길이 1증가
    cout << "Add " << data << " into " << pos <<".\n";
}

void arrList::del(int pos){         // 데이터 삭제 함수
    if(pos > list[0] || pos < 1){   // 위치 범위 확인
        cout << "범위를 벗어났습니다." << endl;
        return;
    }

    int delData = list[pos];        // 삭제할 데이터
    for(int i = pos; i < list[0]; i++){ // 삭제할 위치부터 마지막까지 한칸 뒤의 데이터로 덮어쓰기 진행
        list[i] = list[i+1];
    }
    list[0] -= 1;       // 리스트의 길이 1 감소
    cout << "Delete " << delData << " at " << pos << ".\n";
}

void arrList::access(int pos){  // 데이터 접근(출력) 함수
    if(pos>list[0] || pos < 1){ // 위치 범위 확인
        cout << "범위를 벗어났습니다." << endl;
        return;
    }

    cout << "List[" << pos << "] : " << list[pos] << endl;
}

void arrList::printList(){      // 리스트의 모든 데이터 출력
    for(int i = 1; i <= list[0]; i++){
        cout << i << " : " << list[i] << endl;
    }
}

void arrList::delList(){        // 프로그램 종료시 리스트의 메모리 해제
    cout << "Free Array Based List." << endl;
    free(list);
}

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
    int size = 0;
    cout << "List의 크기를 정해주세요 : ";
    cin >> size;

    arrList list = arrList(size);   // arrList 객체 생성
    bool loopCondition = true;      // 사용자가 종료 입력시 까지 반복을 진행하기 위한 조건 변수
    char command;                   // 사용자가 입력한 명령을 담을 변수
    int pos = 0;                    // 사용자가 원하는 데이터 조작 위치를 담을 변수

    while(loopCondition){           // 종료 입력시 까지 반복
        command = getCommand();     // 현재 명령어 인식
        switch (command)            // 명령어에 따라 달리 동작
        {
        case 'a':                   // 데이터 추가를 입력한 경우 실행
            int data;
            pos = getPosition();
            cout << "원하는 값을 입력해주세요(정수) : ";
            cin >> data;
            cout << "\nResult )" << endl;
            list.add(data, pos);    // 리스트에 자료 추가
            break;

        case 'd':                   // 데이터 삭제를 입력한 경우 실행
            pos = getPosition();
            cout << "\nResult )" << endl;
            list.del(pos);          // 리스트에서 pos 위치의 데이터 삭제
            break;
        
        case 's':                   // 리스트 원소에 접근을 입력한 경우 실행
            pos = getPosition();
            cout << "\nResult )" << endl;
            list.access(pos);       // 리스트에서 pos 위치의 데이터 출력
            break;

        case 'p':                   // 리스트 출력을 입력한 경우 실행
            cout << "\nResult )" << endl;            
            list.printList();
            break;

        case 'q':                   // 프로그램 종료를 원하는 경우 실행
            cout << "\n프로그램을 종료합니다." << endl;
            loopCondition = false;
            list.delList();         // 리스트 메모리 해제
            break;

        default:                    // 제시되지 않은 문자 입력시 실행
            cout << "\n명령어를 다시 입력 하세요." << endl; 
            break;
        }
        cout << "\n\n";
    }

    return 0;
}