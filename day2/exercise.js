
// this is about clouser
// counter
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const start=init;
    let count=init; 
    return{
    increment:function(){
     console.log(++count);
    },
    reset:function (){
        count=start;
    console.log(count);
    },
    decrement:function(){
    console.log(--count);
    }
};
}

 const counter = createCounter(5)
 counter.increment(); // 6
 counter.reset(); // 5
 counter.decrement(); // 4
 


//Counter
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count=n;
    return function() { 
         return count++;
    };
};
const countere=createCounter();
addNumber();
console.log(countere.addNumber);