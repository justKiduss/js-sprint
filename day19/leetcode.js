// 217, contains duplicate
// this also doesn't work
// var containsDuplicate = function(nums) {
//     let count=0;
//     let duplicate;
//     for(let i=0;i<nums.length;i++){
//         if(count==0){
//         duplicate=nums[i];
//         count+=1
//         }
//         else{
//         if(duplicate==nums[i]){
//            count+=1
//            }
//         else{
//             count-1
//         }
//         }
//     }
//     console.log(count)
//     return count>1
// };
// 
// this get to time exceed with time complexity of O(n)2 not efficent 
// var containsDuplicate = function(nums) {
//     let count=0;
// for(let i=0;i<nums.length;i++){
//     for(let j=i+1;j<nums.length;j++){
//         if(nums[i]==nums[j]){
//             count++;
//         }
//         // console.log(nums[i],nums[j])
//     }
// }
// return count>0
// // console.log(count)
// }

function containsDuplicate(nums){
const seen={};

for(let num of nums){
    if(seen[num]) return true;
    seen[num]=true;
}
return false;
}
const re=containsDuplicate([2,14,18,22,22]);
console.log(re);