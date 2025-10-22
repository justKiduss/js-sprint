// return-length-of-arguments-passed 
// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */
// var map = function(arr, fn) {
//     let ar=[];
//     for(let i=0;i<arr.length;i++){
//             ar.push(fn(arr[i]));
//     }
//     console.log(ar);
    
// };
// map([1,2,3],function fn(n){return n+1});

//apply-transfor-over-each-element-in-array
// /**
//  * @param {...(null|boolean|number|string|Array|Object)} args
//  * @return {number}
//  */
// var argumentsLength = function(...args) {
//     return args.length;
// };

// const output=argumentsLength({}, null, "3"); // 3
// console.log(output);

//
// promise time limit
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        const task=fn(...args);
        const timer=new Promise((resolve,reject)=>{
            setTimeout(()=>reject("Time Limit Exceeded"),t);
        });
        return Promise.race([task,timer]);
    }
};

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms

console.log(limited);

// sleep it is about promise
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    const milli=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(millis),millis)
    })
    return milli;
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */