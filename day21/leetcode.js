// 119. Pascal's Triangle II
var getRow = function(rowIndex) {
    let sum=[]
    for(let i=0;i<=rowIndex;i++){
        let row=[];
        for(let j=0;j<=i;j++){
           if(j==0||j==i){
            row.push(1);
           }else{
            row.push(sum[i - 1][j - 1]+sum[i - 1][j])
           }
        }
        sum.push(row)
        if(i==rowIndex){
            return row
        }
    }
    // return sum[rowIndex-1]
};
const get=getRow(3);
console.log(get);

// i=0 j=0    row=[1]  sum=[[1]]
// i=1 j=0,j=1   row=[1,1]  sum=[[1],[1,1]]
// i=2 j=0,j=1,j=2 row=[1,2,1] sum=[[1],[1,1],[1,2,1]]

