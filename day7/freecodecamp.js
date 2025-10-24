// Use Arrow Functions to Write Concise Anonymous Functions
const magic=()=>{
  return new Date();
};
// Use the Rest Parameter with Function Parameters
const sum = (...args) => { //he rest parameter eliminates the need to use the arguments object and allows us to use array methods on the array of parameters passed to the function
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

// Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Change this line

console.log(arr2);

// Use Destructuring Assignment to Extract Values from Objects:
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const {today,tomorrow}= HIGH_TEMPERATURES;
//this is the same as
// const today=HIGH_TEMPERATURES.today;

// Only change code above this line

// Use Destructuring Assignment to Assign Variables from Objects

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const {today:highToday,tomorrow:highTomorrow}= HIGH_TEMPERATURES;
console.log(highToday);
// Only change code above this line

//Use Destructuring Assignment to Assign Variables from Nested Objects

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const {today:{low:lowToday,high:highToday} }= LOCAL_FORECAST;

// Only change code above this line

// Use Destructuring Assignment to Assign Variables from Arrays

let a = 8, b = 6;
[a,b]=[b,a]
// Only change code below this line

//Destructuring via rest elements

function removeFirstTwo(list) {
  let [,,...arr]=list;
  return arr
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo)
