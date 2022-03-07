var fourSum = function(nums, target) {
        nums.sort((a,b)=> a-b)
    const combinations = []
    const memo = {}
    for(let i = 0; i<nums.length; i++){
        for(let j = i +1; j< nums.length; j++){
            
            let l = j+1
            let r = nums.length-1
            while(l<r){
                    let com = [nums[i],nums[j],nums[l],nums[r]]
                    let mem = `${nums[i]}|${nums[j]}|${nums[l]}|${nums[r]}`
          let sum = nums[i]+nums[j]+nums[l]+nums[r]
            if( sum == target ){
                    if(!memo[mem]){
                            
                    combinations.push(com)
                    memo[mem] = 1
                                                }

                   l++
            }
                                    if(sum>target) r--
                    else if(sum<target) l++
                    

                      }
        }
    }
    return combinations
};