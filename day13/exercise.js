// 283. Move Zeroes
// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function(nums) {
//  let last=[];
//  let arr=[];
//  for(let i=0;i<nums.length;i++){
//     if(nums[i]===0){
//         nums.splice(i,1);
//         nums.push(0);
//         i--;
//     }

const { reverse } = require("dns");

//  }

//  return nums;
// }
// let zeros=moveZeroes([0,1,0,3,12]);
// console.log(zeros);


// var moveZeroes = function(nums) {
//     let zeroFoundAt=0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]!==0){
//             if(i!==zeroFoundAt){
//                 [nums[i],nums[zeroFoundAt]]=[nums[zeroFoundAt],nums[i]]
//                 zeroFoundAt+=1;
//             }
//         }
//         console.log(nums);
//     }
// }
// let zeros=moveZeroes([0,1,0,3,12]);
// console.log(zeros);



// var moveZeroes = function(nums) {
//     for (let i = 0; i < (nums.length - 1); i++){
//         if (nums[i] === 0){
//             nums[i] = nums[i+1];
//             nums[i+1] = 0;
//         }   
//     }
//         return nums;
// }
// let zeros=moveZeroes([1,0,0,3,12,6]); // 1,3,13,0,0
// console.log(zeros);


//    correct 283. Move Zeroes
function MoveZero(nums){
    let pos=0;
for(let i=0;i<nums.length;i++){
    if(nums[i]!==0){
       nums[pos]=nums[i];
       pos+=1;
    }
}
while(pos < nums.length){
    nums[pos]=0;
    pos+=1;
}

}
// const move=MoveZero([0,1,0,3,12])
// console.log(move)






// 125. Valid Palindrome

var isPalindrome = function(s) {
    s=s.toLowerCase().replace(/[^a-z0-9]/g,"");
    return s===s.split("").reverse().join("")
};

const palindrome=isPalindrome("A man, a plan, a canal: Panama");
console.log(palindrome);