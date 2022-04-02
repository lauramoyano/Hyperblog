/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var i= 0;
    for( i; i< nums.length; i++){
        if (i < target){
            if (nums[i] + firstNum == target){
                return results =[i,  sums.indexOf(firstNum)];
            }
            var firstNum = nums[i];
        }
       
    }
    console.log(twoSum([[2,7,11,15], 9]))
       
    
};