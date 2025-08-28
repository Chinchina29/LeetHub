/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let num1=[]
    let sum=0;
    for(let n of nums){
      sum+=n
      num1.push(sum)
    //   console.log(n)
    }


    return num1;
    }


// console.log(runningSum([1, 2, 3, 4]))