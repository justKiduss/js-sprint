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
 


/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let con={}
    // for(let i=0;i<this.length;i++){
    //     let key=fn(i);
    //     if(!con[key]) con[key]=[];
    //         con[key].push(this[i]);
    //    }
    for(const i of this){
        let key=fn(i);
        if(!con[key]) con[key]=[];
            con[key].push(i);
    }
    return con;

};

/**
 * [1,2,3].groupBy(S) // {"1":[1],"2":[2],"3":[3]}
 */

const fn = function (list) { 
  return String(list[0]); 
}
const fn1 = function (n) { 
  return String(n > 5);
}
const fn2 = function (item) { 
  return item.id; 
}
const aw=[  {"id":"1"},
  {"id":"1"},
  {"id":"2"}].groupBy(fn) // {"1":[1],"2":[2],"3":[3]}

 console.log(aw);
