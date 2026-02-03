// How would you do this sequentially?
// synchronous code
console.log("starting the first task");
setTimeout(() => { // wait 3 seconds then...
  console.log("first task completed")
}, 3000)
// this code will run after the timeout specifications
console.log("starting the second task");
setTimeout(() => { // wait 1 seconds then...
  console.log("second task completed")
}, 1000)

console.log("starting the third task");
setTimeout(() => { // wait 2 seconds then...
  console.log("third task completed")
}, 2000)