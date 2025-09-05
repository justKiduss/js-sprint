/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {

let count=0;
let arr=[];
arr.push(...args)
for(let i=0;i<arr.length;i++){
count++;
}
console.log(count);
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
 argumentsLength(1,2,3)