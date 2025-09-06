
//filter elements from array
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
let ar=[]

    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i,arr)){
           ar.push(arr[i])

    }else{
        return "error"
    }
    console.log(ar)
    }

};
filter([-2,-1,0,1,2],function fn(n,i){
    if(n>10){
        return true;
    }
    else if(i===0){
        return true;
    }       
    else if(n+1!=0){
        return true;
    }
});

//CHUNK

// /**
//  * @param {Array} arr
//  * @param {number} size
//  * @return {Array}
//  */
// var chunk = function(arr, size) {
//     let ar=[];
//     for(let i=0;i<arr.length;i+=size){
//       ar.push(arr.slice(i,i+size))
//     }
//     console.log(ar)
// };
// chunk([1,2,3,4,5],2);


 