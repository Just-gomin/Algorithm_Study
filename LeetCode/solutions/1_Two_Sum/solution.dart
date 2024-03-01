class Solution {
  List<int> twoSum(List<int> nums, int target) {
    Map<int, int> basket = {};

    for (int i = 0; i < nums.length; i++) {
      int remain = target - nums[i];

      if (basket.containsKey(remain)) {
        return [basket[remain]!, i];
      }

      basket[nums[i]] = i;
    }

    return [];
  }
}
