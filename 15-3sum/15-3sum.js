/**
 * @param {number[]} nums
 * @return {number[][]}
 */

    let threeSum = (nums) => {
  nums = nums.sort((a, b) => a - b);
            
  let results = [];
            
  for(let i = 0;i<nums.length-2; i++){
          while(nums[i] == nums[i-1]) {
                  i++
          }
          
          let l = i+1
          let r = nums.length -1;
          
          while(l<r){
                  
          let sum = nums[l] + nums[i] + nums[r] 
          if(sum == 0) {
                  
                  results.push([nums[i], nums[l], nums[r]])
                  
                  while(nums[l] == nums[l+1]) l++
                  
                  l++
                  
                       }

          sum < 0 && l++
                  
          sum>0 && r--
                              }

  }
  return results;
};