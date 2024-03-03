// Origin : https://jdm.kr/blog/170
#include <fstream>
#include <iostream>
#include <stdlib.h>

using namespace std;

int main()
{
    string inputFilePath = "stdin";

    ifstream openFile(inputFilePath.data());
    if (openFile.is_open())
    {
        string line;
        while (getline(openFile, line))
        {
            cout << line << endl;
        }
        openFile.close();
    }

    return 0;
}