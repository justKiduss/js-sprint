// ARRAY VERSION
// var addTwoNumbers = function(l1, l2) {
// let arr=[];
// let c=0;
// let sum;
//  for(let i=0;i<l1.length||i<l2.length;i++){
//     sum=l1[i]+l2[i]+c;
//     arr.push(sum%10);
//     c=Math.floor(sum/10);
//  }
 
// console.log(arr);
// };
// addTwoNumbers(l1 = [2,4,3], l2 = [5,6,4]);
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode(0); // like arr = []
  let curr = dummy;            // pointer to build result
  let carry = 0;

  // walk both lists until both empty
  while (l1 !== null || l2 !== null) {
    let x = l1 ? l1.val : 0;   // like l1[i] or 0
    let y = l2 ? l2.val : 0;   // like l2[i] or 0

    let sum = x + y + carry;
    carry = Math.floor(sum / 10);

    curr.next = new ListNode(sum % 10); // instead of arr.push
    curr = curr.next;                   // move forward

    if (l1) l1 = l1.next; // go to next node
    if (l2) l2 = l2.next;
  }

  if (carry > 0) {
    curr.next = new ListNode(carry);
  }

  return dummy.next; // skip dummy head
};

////////////////

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr=[];
   for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]==target){
            arr.push(i,j);
        return arr;
        }
    }
   } 
};
