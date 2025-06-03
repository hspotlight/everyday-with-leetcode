function twoSum(nums: number[], target: number): number[] {
    const found = {}; // key = nums[i], value = index
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        // console.log(found, diff, nums[i], target);
        // if condition met
        if (found[diff] >= 0) {
            return [i, found[diff]];
        }
        found[nums[i]] = i;
    }
    return [0, 0];
};