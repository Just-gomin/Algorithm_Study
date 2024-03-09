#include <string>
#include <vector>
#include <bitset>

using namespace std;

long long fx(long long x)
{
    bitset<64> xbits(x);
    long long fx = x + 1;

    while (true)
    {
        bitset<64> fxbits(fx);
        string xBitsString = xbits.to_string();
        string fxBitsString = fxbits.to_string();
        int count = 0;

        bitset<64> xorResult = xbits ^ fxbits;
        string xorResultString = xorResult.to_string();

        for (int i = 0; i < 64; i++)
        {
            if (xorResultString[i] == '1')
                count += 1;
        }

        if (count <= 2)
        {
            break;
        }
        else
        {
            fx += 1;
        }
    }

    return fx;
}

vector<long long> solution(vector<long long> numbers)
{
    vector<long long> answer;

    for (vector<long long>::iterator it = numbers.begin(); it < numbers.end(); it++)
    {
        long long number = *it;
        answer.push_back(fx(number));
    }

    return answer;
}

/**
#include <string>
#include <vector>
#include <bitset>

using namespace std;

long long fx(long long x)
{
    bitset<64> xbits(x);
    long long fx = x + 1;

    while (true)
    {
        bitset<64> fxbits(fx);
        string xBitsString = xbits.to_string();
        string fxBitsString = fxbits.to_string();
        int count = 0;

        for (int i = 0; i < 64; i++)
        {
            if (xBitsString[i] != fxBitsString[i])
            {
                count += 1;
            }
        }

        if (count <= 2)
        {
            break;
        }
        else
        {
            fx += 1;
        }
    }

    return fx;
}

vector<long long> solution(vector<long long> numbers)
{
    vector<long long> answer;

    for (vector<long long>::iterator it = numbers.begin(); it < numbers.end(); it++)
    {
        long long number = *it;
        answer.push_back(fx(number));
    }

    return answer;
}
*/