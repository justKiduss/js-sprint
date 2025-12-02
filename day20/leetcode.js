// 242. Valid Anagram
// var isAnagram = function(s, t) {
//     let sa=s.toLowerCase();
//     let ta=t.toLowerCase().split("");

//     for(let ti of ta){
//         console.log(ti)
//         if(!(sa.includes(ti))){
//             return false
//         }
//     }
//     return true
// };
// const p=isAnagram("ab","a");
// console.log(p);


var isAnagram = function(s, t) {
if(s.length!==t.length) return false;
return s.toLowerCase().split("").sort().join("")===t.toLowerCase().split("").sort().join("");
};
const p=isAnagram("anagram","nagaram");
console.log(p);