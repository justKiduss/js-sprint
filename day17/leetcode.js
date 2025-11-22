// // 88. Merge Sorted Array
// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
//  // this algorithem is incorrect it couldn't fulfill all testcases
// var merge = function(nums1, m, nums2, n) {
//     let pos=0;
//     for(let i=0;i<m;i++){
//         if(nums1[i]!==0){
//           nums1[pos]=nums1[i]  
//           pos+=1;
//         }
//     }
//     for(let i=0;i<n;i++){
//         if(nums2[i]!==0){
//           nums1[pos]=nums2[i] 
//           pos+=1;
//         } 
//     }    
// return nums1.sort((a,b)=>a-b);
// };
// let m=merge([1,2,3,0,0,0],3,[2,5,6],3)
// console.log(m);

var merge = function(nums1, m, nums2, n) {
let i=m-1; //2,1,0
let j=n-1; //2,1,0
let k=m+n-1;  //5,4,3,2,1,0

while(j>=0){
    if(i>=0&&nums1[i]>nums2[j]){   //&&nums1[]
      nums1[k]=nums1[i];
      i--;
    }else{
      nums1[k]=nums2[j]
      j-- 
    }
    k--
}
return nums1;
};
let m=merge([1,2,3,0,0,0],3,[2,5,6],3)
console.log(m);