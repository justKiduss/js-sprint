// 189. Rotate Array
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */

// var rotate = function(nums, k) {
//     let numbers=[];
//     numbers=nums;
//     for(let i=0;i<k;i++){ 
//         const lastEle=numbers[numbers.length-1];
//         numbers.pop(lastEle);
//         numbers.unshift(lastEle);
//     }
//     return numbers
    
// };

// const rot=rotate([1,2,3,4,5,6,7],3);
// console.log(rot)

var rotate=function(nums,k){
  
    k=k%nums.length;
    if(k<=0) return;
    let lastEle=nums.splice(nums.length-k);//i am confused in this line  nums.splice(7-4) splice should start cutting from the number 4
    nums.unshift(...lastEle);   // the other thing i am confuesed about is that how the rest work because i think it shoud work one time it is not like it is in for loop 
    return nums;

}
const rot=rotate([1,2,3,4,5,6,7],3);
console.log(rot)

// 1480. Running Sum of 1d Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// let ad=[];
// var runningSum = function(nums) {
//  if (nums.length === 0) return 0;
//    for(let i=1;i<nums.length;i++){
//     nums[i]+=nums[i-1];
//    }
//    return nums;
// };

// const arr=runningSum([1,2,3,4]);
// console.log(arr);
 //second way of solving the problem 
// let ad=[];
// let sum=0;
// var runningSum = function(nums) {
//  if (nums.length === 0) return 0;
//    for(let i=0;i<nums.length;i++){
//      sum+=nums[i];
//      ad.push(sum)
//    }
//    return ad;
// };

// const arr=runningSum([1,2,3,4]);
// console.log(arr);