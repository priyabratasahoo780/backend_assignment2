// const products = [
//   { name: "Light", category: "Electronics" },
//   { name: "TV", category: "Electronics" },
//   { name: "Fan", category: "Electronics" },
//   { name: "Shirt", category: "Clothing" },
//   { name: "Jeans", category: "Clothing" },
//   { name: "Pizza", category: "Food" },
//   { name: "Burger", category: "Food" }
// ];

// const res = products.reduce((acc, item) =>{
//      if(!acc[item.category]){
//         acc[item.category] = [];
//      }
//          acc[item.category].push(item.category);

//          return acc;
// },{})
//      console.log(res);


// const resu = products.reduce((acc, item) => {
//      if(!acc[item.category]){
//         acc[item.category] = [];
//      }

//      acc[item.category].push(item);

//      return acc;
// },{});

// console.log(resu);



// const res = products.reduce((acc, item) => {
//       if(!acc[item.category]){
//            acc[item.category] = 0;
//       }
//           acc[item.category]++;

//           return acc;
// },{})
//       console.log(res);



// const product = [
//     { name: "TV", category: "Electronics", price: 30000 },
//     { name: "Fan", category: "Electronics", price: 5000 },
//     { name: "Shirt", category: "Clothing", price: 2000 },
//     { name: "Jeans", category: "Clothing", price: 3000 }
// ];


// const result = product.reduce((acc, item) => {

//     if (!acc[item.category]) {
//         acc[item.category] = 0;
//     }

//     acc[item.category] += item.price;

//     return acc;

// }, {});

// console.log(result);


// const total = product.reduce((acc, item) => {
//     return acc + item.price;
// }, 0);

// console.log(total);



// const high = product.reduce((max, item) => {

//     if (item.price > max.price) {
//         return item;
//     }

//     return max;

// });

// console.log(high);



// const students = [
//     { name: "Rahul", course: "CSE" },
//     { name: "Priya", course: "CSE" },
//     { name: "Aman", course: "ECE" },
//     { name: "Riya", course: "ECE" },
//     { name: "Karan", course: "ME" }
// ];


// const group = students.reduce((acc, student) => {

//     if (!acc[student.course]) {
//         acc[student.course] = [];
//     }

//     acc[student.course].push(student.name);

//     return acc;

// }, {});

// console.log(group);



// const studentss = [
//     { name: "Rahul", marks: 80 },
//     { name: "Priya", marks: 90 },
//     { name: "Aman", marks: 70 }
// ];


// const totals = studentss.reduce((acc, student) => {
//     return acc + student.marks;
// }, 0);

// const average = totals / studentss.length;

// console.log(average);



const fruits = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple"
];


const resulted = fruits.reduce((acc, fruit) => {

    if (!acc[fruit]) {
        acc[fruit] = 0;
    }

    acc[fruit]++;

    return acc;

},{});

console.log(resulted);