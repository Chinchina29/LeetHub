/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    if (!Array.isArray(nums)) {
        throw new TypeError("Not an array");
    }
    let n = nums.length;
    let ans = new Array(2 * n);

    for (let i = 0; i < n; i++) {
        ans[i] = nums[i];
        ans[i + n] = nums[i];
    }

    return ans;
};

console.log(getConcatenation([1,2,1]));       
console.log(getConcatenation([1,2,1,1,2,1]));
