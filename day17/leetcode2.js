// 169. Majority Element

var majorityElement = function(nums) {
let major;
let count=0;
for(let i=0;i<nums.length;i++){
    if(count==0){
      major=nums[i];
      count+=1;
    }else{
        if(nums[i]==major){
            count+=1;
        }else{
            count-=1;
        }
    }
}
return major;
};
const major=majorityElement(3,2,3);
console.log(major)