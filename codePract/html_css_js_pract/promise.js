const orderFood = new Promise((resolve, reject) => {
    const food = false;
    if(food){
      resolve("food is beginning prepared");
    }
    else{
      reject("restaurent is close");
    }
});

orderFood
.then((message) => {
  console.log(message);
})
.catch((error) => {
  console.log(error);
})
.finally(() =>{
  console.log("Promise completed");
});



// Promise resolve 

const resolvedPromise = Promise.resolve("Promise Resolved successfully");

resolvedPromise
.then((result) => {
  console.log("Resolve:", result);
})


// Promise Reject

const rejectPromise = Promise.reject("Promise rejected ");

rejectPromise.catch((error) => {
  console.log("reject:", error);
})


// PROMISE.all()

const p1 = Promise.resolve("User Data");
const p2 = Promise.resolve("Product Data");
const p3 = Promise.resolve("Order Data");

Promise.all([p1, p2, p3])
.then((result) => {
  console.log("All:", result);
})
.catch((error) => {
  console.log("All Error", error);
})