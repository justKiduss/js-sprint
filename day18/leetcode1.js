var generate = function(numRows) {
    let sum;
    for(let i=0;i<numRows;i++){  
        for(let j=0;j<=i;j++){   
           if(i>=2){
              if(j=0&&j==i){
                console.log("1");
              }else{
                 sum=i-1[j]+i-1[j-1]
                 console.log(sum)
              }
           }
        } 
        console.log("brrrr");
    }
};

const gh=generate(5);
console.log(gh);