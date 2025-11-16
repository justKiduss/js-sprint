
// 412. Fizz Buzz
// var fizzBuzz = function(n) {
//     let arr=[];
// for(let i=1;i<=n;i++){
//     if(i%3==0&&i%5==0){
//         arr.push("FizzBuzz");
//     }
//     else if(i%3==0){
//        arr.push("Fizz"); 
//     }
//     else if(i%5==0){
//         arr.push("Buzz");
//     }
//     else{
//     arr.push(String(i));
//     }
// }
// return arr;

// }

// const rot=fizzBuzz(5);
// console.log(rot)


// 58. Length of Last Word
// var lengthOfLastWord = function(s) {
//    s=s.trim().split(" ");
//     return s[s.length-1].length;
// };
// const st=lengthOfLastWord("hello world");
// console.log(st);

// 26 Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
//    let dupicateCount=0;
   let pos=1;
   for(i=1;i<=nums.length;i++){
    if(nums[i]===nums[i-1]){
        nums[i]=nums[pos]  
        pos+=1;
    }else{
        nums[i];
        pos++
    }
    console.log(nums)
   } 
   console.log(nums)
//    return nums; 
};
const ha=removeDuplicates([1,1,2]);
console.log(ha);