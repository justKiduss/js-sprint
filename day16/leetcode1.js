// 2154. Keep Multiplying Found Values by Two
// insufficent code because it fail for case also their is an easier way
// /**
//  * @param {number[]} nums
//  * @param {number} original
//  * @return {number}
//  */

// var findFinalValue = function(nums, original) {
//     let value=0;
//     for(let i=0;i<nums.length;i++){
//         if(value===0){
//         if(original===nums[i]){
//             value=original*2;
//         }
//         }
//         for(let j=0;j<nums.length;j++){
//         if(value===nums[j]){
//             value=value*2; 
//         }
//         }
//     }
//     if(value){
//     return value
//     }else{
//         return original;
//     }
// };



// const theFind=findFinalValue([4, 8, 16],2);   //2,7,9 ori=4
// console.log(theFind);

//  



var findFinalValue = function(nums, original) {
let value=original;

while(nums.includes(value)){
    value*=2;
}
return value;
}

const theFind=findFinalValue([2,4, 8, 16],2);
console.log(theFind)