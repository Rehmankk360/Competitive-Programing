var twoSum = function(nums, target) {
   
  const prev = {

 }

   for(var i = 0; i<nums.length; i++){

      const required = target - nums[i];
      const index2 = prev[required];
      if(index2 != null){
        return [index2, i]
      } else {
        prev[nums[i]] = i
      }
        
   }

        

};