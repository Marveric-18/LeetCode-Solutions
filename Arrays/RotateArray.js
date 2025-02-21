

/**
 * QUESTION 189. Rotate Array
 * 
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
    Example 1:
    
    Input: nums = [1,2,3,4,5,6,7], k = 3
    Output: [5,6,7,1,2,3,4]
    Explanation:
    rotate 1 steps to the right: [7,1,2,3,4,5,6]
    rotate 2 steps to the right: [6,7,1,2,3,4,5]
    rotate 3 steps to the right: [5,6,7,1,2,3,4]
    
    Example 2:

    Input: nums = [-1,-100,3,99], k = 2
    Output: [3,99,-1,-100]
    Explanation: 
    rotate 1 steps to the right: [99,-1,-100,3]
    rotate 2 steps to the right: [3,99,-1,-100]

 * https://leetcode.com/problems/rotate-array?envType=study-plan-v2&envId=top-interview-150
 * Please checkout the Leetcode Question for more Description
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
    // firstWay(nums, k);
    secondWay(nums, k);
};

const firstWay = (nums, k) => {
    // First O(k) Space

    // Calculating Steps: 
    // If length > k => k steps
    // else k % length steps
    const len = nums.length;
    k = k % len;

    if(k == 0) return;

     // Now let's move elements before the last k to the right by k positions.
    // We start from the back because if we start from the begining
    // We need to hold the elements with whom we swap the current element 
    // That was our inital idea and boy did it get messy
    for(let i = len - k - 1; i >= 0 ; i--){
        nums[i + k] = nums[i];
    }

    
    // Now lets move the temp Array to the begning of array
    for(let i = 0; i < k; i++ ){
        nums[i] = temp[i];
    }
}

const secondWay = (nums, k) => {
    // Second Way 0(1)

    // Utility Function To Reverse Array
    function reverse(arr, left, right){
        while( left < right ){
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }

    // Find steps value
    const len = nums.length;
    k = k % len;
    if(k == 0) return;

    // Now Reverse the nums array
    reverse(nums, 0, len - 1);

    // Now Reverse first k elements : 0 to k - 1
    reverse(nums, 0, k - 1);

    // Now Reverse remainig elements from k to rest
    reverse(nums, k, len - 1);

}


let nums = [1,2,3,4,5,6,7];
let k = 3;

console.log(`Array Before Rotation: `, nums);
rotate(nums, k);
console.log(`Array After Rotation: `, nums);