// 118. Pascal's Triangle
// var generate = function(numRows) {
//     let sum=[];
//     for(let i=0;i<numRows;i++){  
//         for(let j=0;j<=i;j++){   
//          //   if(i>=2){
//          //      if(j=0&&j==i){
//          //        console.log("1");
//          //      }else{
//          //         sum=i-1[j]+i-1[j-1]
//          //         console.log(sum)
//          //      }
//          //   }
//          sum.push("1");
//         } 
//         console.log("brrrr");
//     }
// };

// const gh=generate(5);
// console.log(gh);



/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let sum = [];
    for (let i = 0; i < numRows; i++) {
        let row = [];
        for (let j = 0; j <= i; j++) {
            if(j==0||j==i){
                row.push(1)
            }
            else {
                row.push(sum[i - 1][j - 1] +sum[i - 1][j])
            }
        }
        sum.push(row);
    }
    return sum
};
const gh=generate(3);
console.log(gh);