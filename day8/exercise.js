//Group By 2631
// /**
//  * @param {Function} fn
//  * @return {Object}
//  */
// Array.prototype.groupBy = function(fn) {
//     let con={}
//        for(const i of this){
//         let key=fn(i);
//         if(!con[key]) con[key]=[];
//             con[key].push(i);
//     }
//     return con;
// }
// /**
//  * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
//  */





//2619. Array Prototype Last

 /**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if(this.length==0){
        return -1;
    }
   return this[this.length-1]; 
};

const arr = [1, 2, 3];
arr.last(); // 3