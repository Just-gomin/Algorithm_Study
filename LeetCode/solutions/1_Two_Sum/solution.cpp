#include <stdlib.h>
#include <vector>

using namespace std;

class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        unordered_map<int, int> basket;
        int size = nums.size();

        for (int i = 0; i < size; i++)
        {
            int remain = target - nums[i];

            if (basket.count(remain))
            {
                return {basket[remain], i};
            }

            basket[nums[i]] = i;
        }

        return {};
    }
};