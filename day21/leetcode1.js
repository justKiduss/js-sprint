// 118. Pascal's Triangle
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