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
            if (i==0) {
                row.push(1);
                sum.push(row);
            }
            // if(j==0&&j==i){
            //     row.push(1)
            //     sum.push(row);
            // }
            // else {
            //     row.push([i - 1][j - 1] +[i - 1][j])
            //     sum.push(row);
            // }
            // sum.push(row);
        }
        return sum;
    }
};
const gh=generate(1);
console.log(gh);