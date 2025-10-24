// /**
//  * @return {null|boolean|number|string|Array|Object}
//  */
// Array.prototype.last = function() {
//     if(this.length==0){
//         return -1;
//     }
//    return this[this.length-1]; 
// };

// const arr = [1, 2, 3];
// arr.last(); // 3
 

function arrr(){
    let con=[];
let arr=[1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<arr.length;i++){
    if(arr[i]>5){
        con.push(JSON.parse(true,i));
    }else{
        con.push(JSON.parse(false,i))
    }
}
return con;
}
const ar=arrr();
console.log(ar);
