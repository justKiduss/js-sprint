// exercise 1
// const myMusic = [
//   {
//     "artist": "Billy Joel",
//     "title": "Piano Man",
//     "release_year": 1973,
//     "formats": [
//       "CD",
//       "8T",
//       "LP"
//     ],
//     "gold": true
//   },
// {
//     "artist": "Daft Punk", 
//     "title": "Punk",
//     "release_year": 1973,
//     "formats": [
//       "CD",
//       "8T",
//       "LP"
//     ],
//     "gold": true
// }
// ];


//execise 2
// const myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//      },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };

// const gloveBoxContents = myStorage.car.inside["glove box"];

// Setup

// exercise 3
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// Only change code below this line
// function updateRecords(records, id, prop, value) {
// //   return records;
// record
// console.log(records);
// }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// exrecise 4
// Setup
// const myArray = [];

// // Only change code below this line
// for(let i=1;i<=5;i++){
//   myArray.push(i);
// }
// console.log(myArray);

// exercise 5
// Setup
// const myArray = [];

// // Only change code below this line
// for(let i=1;i<10;i+=2){
// myArray.push(i);
// }
// console.log(myArray);
// exercise 6
// Setup
// const myArray = [];

// // Only change code below this line
// for(let i=9;i>0;i-=2){
// myArray.push(i);
// }
// console.log(myArray);

//exercise 7
// Setup
// const myArr = [2, 3, 4, 5, 6];
// let total=0;
// // Only change code below this line
// for(let i=0;i<myArr.length;i++){
//   total+=myArr[i];
// }
// exercise 8

function multiplyAll(arr) {
  let product = 1;
  let a;
  // Only change code below this line
for(let i=0;i<arr.length;i++){
  for(let j=0;j<arr[i].length;j++){
 product*=arr[i][j];
  }
}

  // Only change code above this line
  return product;
  // console.log(product);
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);