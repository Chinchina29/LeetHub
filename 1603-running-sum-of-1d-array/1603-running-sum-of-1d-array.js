/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let num0 = new Array()
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        num0.push(sum)

    }
    return num0;

};
// console.log(runningSum([1, 2, 3, 4]))