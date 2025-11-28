/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    let count=0;
    let major;
    for(let i=0;i<nums.length;i++){
       if(count==0){
        major=nums[i];
        count+=1;
       }
       else{
        if(nums[i]==major){
            count+=1;
        }else{
            count-=1;
        }
       }
    }
    return major;
};