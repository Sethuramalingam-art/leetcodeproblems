Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
Best-case Time Complexity of Merge Sort: O(nlog(n))


Average-case Time Complexity of Merge Sort: O(nlog(n))

Worst-case Time Complexity of Merge Sort: O(nlog(n))
var sortArray = function(nums) {
    if (nums.length <= 1) return nums
    let mid = Math.floor(nums.length / 2)
    // Recursive calls
    let left = sortArray(nums.slice(0, mid))
    let right = sortArray(nums.slice(mid))
    return merge(left, right)
}

function merge(left, right) {
  let sortedArr = [] // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right]
}
