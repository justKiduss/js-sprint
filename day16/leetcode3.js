// 2980. Check if Bitwise OR Has Trailing Zeros
// this also work for all cases but not optimal
/**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
var hasTrailingZeros = function(nums) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
        let orr=(nums[i]|(nums[j]));
        // console.log(orr)
        let mo=orr%2==0;
             if(mo===true){
                return true
             }
            }
           }
           return false;
    }

    const trailing=hasTrailingZeros([1,2,3,4,5]);
    console.log(trailing)




// correct code 

// var hasTrailingZeros = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (((nums[i] | nums[j]) & 1) === 0) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }


//this is efficent and correct

// var hasTrailingZeros = function(nums) {
//     for (let n of nums) {
//         if ((n & 1) === 0) return true;
//     }
//     return false;
// }
