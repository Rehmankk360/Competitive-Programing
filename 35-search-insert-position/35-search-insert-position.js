/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   let expected = nums.indexOf(target);
    if(expected === -1) {
      if(nums[0] > target) {
        expected = 0;
      } else if(nums[nums.length-1] < target) {
        expected = nums.length
      } else {
        for(let i = 0; i < nums.length; i++) {
          if(nums[i] < target && nums[i+1] > target) {
            expected = i+1;
          }
        }
      }
      
    }
    return expected;
};