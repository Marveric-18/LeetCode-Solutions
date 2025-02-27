/**
 * Question 55. Jump Game
 * 
 * You are given an integer array nums. You are initially positioned at the array's first index, 
 * and each element in the array represents your maximum jump length at that position.
 * 
 * Return true if you can reach the last index, or false otherwise.
 * 
 * Example 1:

 * Input: nums = [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 * 
 * Example 2:
 * 
 * Input: nums = [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 * 
 * For more details, visit the LeetCode problem page:
 * https://leetcode.com/problems/jump-game?envType=study-plan-v2&envId=top-interview-150
 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
    /**
     * For this we gonna take Greedy Approach
     * 
     * Observatation 1: It does not matter what optimum path we take 
     *      only matters is that we reach till the end with possible path
     * 
     * Observation 2: starting from target , we can reach  
     *      if jump from previous step is gonna reach to target.
     * 
     * To achieve this we will start from end to begining and keep moving backward 
     *      until we reach first index and its jumpable
    */

    let target = nums.length - 1; // target Index
    let index = target - 1; // prev index of target index

    // Loop through the nums until we reach begining
    while(index >= 0){
        // if target is reachable (maxJump + currentIndex is greater than target)
        // then we reset target to current index
        if((nums[index] +  index) >= target){
            target = index;
        }// Initially I added else and returned false but cant do that otherwise it wont loop through all possibility
        index--; // keep going step backward 
    }
    // After looping through , if we reach first index as target then we jumped the array
    return target === 0;
};

let arr = [2,0,0];
console.log(`\nArray ${arr} Can Jump: ${canJump(arr)}`);

arr = [3,5,2,1,0,4];
console.log(`\nArray ${arr} Can Jump: ${canJump(arr)}`);

arr = [3,2,1,0,0,4];
console.log(`\nArray ${arr} Can Jump: ${canJump(arr)}`);

arr = [0,0,4];
console.log(`\nArray ${arr} Can Jump: ${canJump(arr)}`);