// // Create a JavaScript Promise
// // const makeServerRequest=new Promise((resolve,reject)=>{
  
// // })
// // Complete a Promise with resolve and reject
// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer represents a response from a server
//   let responseFromServer;
    
//   if(responseFromServer) {
//     // Change this line
//     resolve("We got the data");
//   } else {  
//     // Change this line
//     reject("Data not received");
//   }
// });
// // Handle a Fulfilled Promise with then
// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer is set to true to represent a successful response from a server
//   let responseFromServer = true;
    
//   if(responseFromServer) {
//     resolve("We got the data");
//   } else {  
//     reject("Data not received");
//   }
//   makeServerRequest.then(result=>{
//     console.log(result);
//   })
// });
// // Handle a Rejected Promise with catch
// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer is set to false to represent an unsuccessful response from a server
//   let responseFromServer = false;
    
//   if(responseFromServer) {
//     resolve("We got the data");
//   } else {  
//     reject("Data not received");
//   }
// });

// makeServerRequest.then(result => {
//   console.log(result);
// });
// makeServerRequest.catch(error => {
//   console.log(error);
// });
// // Use the await Operator with a Promise

// // Use the async Keyword to Turn a Function into an Async Function

// // Use the fetch Method to Make a Request

// // Use the JSON.parse Method to Parse JSON