// // // "use strict";

// // // var a = 123456;

// // // console.log(a);

// // // function amount<T, U>(symbol: T, amount: U) {

// // //   return `${symbol} ${amount}`
// // // }

// // // // amount<string, number>("$", 100)
// // // const res = amount("$", 100)
// // // console.log(res)

// // // // amount<string, string>("$", "100")
// // // const res2 = amount("$", 100)
// // // console.log(res2)

// // function amount(symbol: string, amount:number): string{
// //     return `${symbol} ${amount}`
// // }
// //  const res = amount("$", 100);
// //  console.log(res);

// //  type ProductCategory = "electronics" | "cloths" | "fruits"

// //  type Product = 
// //  {
// //     id: number,
// //     name: string,
// //     category:ProductCategory
// //  }

// //  const products: Product[] = [
// // 	{ id: 1, name: "iPhone 15", category: "electronics" },
// // 	{ id: 2, name: "Wireless Headphones", category: "electronics" },
// // 	{ id: 3, name: "Smart Watch", category: "electronics" },
// // 	{ id: 4, name: "Bluetooth Speaker", category: "electronics" },
// // 	{ id: 5, name: "Cotton T-Shirt", category: "cloths" },
// // 	{ id: 6, name: "Denim Jeans", category: "cloths" },
// // 	{ id: 7, name: "Hoodie", category: "cloths" },
// // 	{ id: 8, name: "Apple", category: "fruits" },
// // 	{ id: 9, name: "Banana", category: "fruits" },
// // 	{ id: 10, name: "Mango", category: "fruits" },
// // ];

// // type UserRoleCategory = "Admin" | "Guest" | "Executive" 
// // type User = {
// //     id: number,
// //     firstname: string,
// //     lastName: string,
// //     designation: string
// //     category: UserRoleCategory
// // }

// // const users: User[] = [
// // 	{
// // 		id: 1,
// // 		firstname: "Aarav",
// // 		lastName: "Sharma",
// // 		designation: "System Administrator",
// // 		role: "Admin",
// // 	},
// // 	{
// // 		id: 2,
// // 		firstname: "Priya",
// // 		lastName: "Patel",
// // 		designation: "Software Engineer",
// // 		role: "Guest",
// // 	},
// // 	{
// // 		id: 3,
// // 		firstname: "Rohan",
// // 		lastName: "Mehta",
// // 		designation: "Chief Executive Officer",
// // 		role: "Executive",
// // 	},
// // 	{
// // 		id: 4,
// // 		firstname: "Ananya",
// // 		lastName: "Desai",
// // 		designation: "HR Manager",
// // 		role: "Admin",
// // 	},
// // 	{
// // 		id: 5,
// // 		firstname: "Vikram",
// // 		lastName: "Joshi",
// // 		designation: "Business Analyst",
// // 		role: "Guest",
// // 	},
// // 	{
// // 		id: 6,
// // 		firstname: "Neha",
// // 		lastName: "Shah",
// // 		designation: "Chief Financial Officer",
// // 		role: "Executive",
// // 	},
// // 	{
// // 		id: 7,
// // 		firstname: "Arjun",
// // 		lastName: "Kapoor",
// // 		designation: "IT Support Specialist",
// // 		role: "Admin",
// // 	},
// // 	{
// // 		id: 8,
// // 		firstname: "Ishita",
// // 		lastName: "Verma",
// // 		designation: "Marketing Specialist",
// // 		role: "Guest",
// // 	},
// // 	{
// // 		id: 9,
// // 		firstname: "Karan",
// // 		lastName: "Singh",
// // 		designation: "Chief Technology Officer",
// // 		role: "Executive",
// // 	},
// // 	{
// // 		id: 10,
// // 		firstname: "Meera",
// // 		lastName: "Rao",
// // 		designation: "Project Manager",
// // 		role: "Guest",
// // 	},
// // ];



// // function filterByCategory(products:Product[], category:ProductCategory): Product[]{
// //     return products.filter(product => product.category === category)
// // }

// // const eleProducts = filterByCategory(products, "electronics");

// // console.log(eleProducts);




// type ProductCategory = "electronics" | "cloths" | "fruits"

// type Product = {
//     id: number,
//     name: string,
//     category: ProductCategory
// }

// type UserRoleCategory = "Admin" | "Guest" | "Executive" 
// type User = {
//     id: number,
//     firstname: string,
//     lastName: string,
//     designation: string
//     role: UserRoleCategory
// }

// const users: User[] = [
// 	{
// 		id: 1,
// 		firstname: "Aarav",
// 		lastName: "Sharma",
// 		designation: "System Administrator",
// 		role: "Admin",
// 	},
// 	{
// 		id: 2,
// 		firstname: "Priya",
// 		lastName: "Patel",
// 		designation: "Software Engineer",
// 		role: "Guest",
// 	},
// 	{
// 		id: 3,
// 		firstname: "Rohan",
// 		lastName: "Mehta",
// 		designation: "Chief Executive Officer",
// 		role: "Executive",
// 	},
// 	{
// 		id: 4,
// 		firstname: "Ananya",
// 		lastName: "Desai",
// 		designation: "HR Manager",
// 		role: "Admin",
// 	},
// 	{
// 		id: 5,
// 		firstname: "Vikram",
// 		lastName: "Joshi",
// 		designation: "Business Analyst",
// 		role: "Guest",
// 	},
// 	{
// 		id: 6,
// 		firstname: "Neha",
// 		lastName: "Shah",
// 		designation: "Chief Financial Officer",
// 		role: "Executive",
// 	},
// 	{
// 		id: 7,
// 		firstname: "Arjun",
// 		lastName: "Kapoor",
// 		designation: "IT Support Specialist",
// 		role: "Admin",
// 	},
// 	{
// 		id: 8,
// 		firstname: "Ishita",
// 		lastName: "Verma",
// 		designation: "Marketing Specialist",
// 		role: "Guest",
// 	},
// 	{
// 		id: 9,
// 		firstname: "Karan",
// 		lastName: "Singh",
// 		designation: "Chief Technology Officer",
// 		role: "Executive",
// 	},
// 	{
// 		id: 10,
// 		firstname: "Meera",
// 		lastName: "Rao",
// 		designation: "Project Manager",
// 		role: "Guest",
// 	},
// ];


// const products: Product[] = [
// 	{ id: 1, name: "iPhone 15", category: "electronics" },
// 	{ id: 2, name: "Wireless Headphones", category: "electronics" },
// 	{ id: 3, name: "Smart Watch", category: "electronics" },
// 	{ id: 4, name: "Bluetooth Speaker", category: "electronics" },
// 	{ id: 5, name: "Cotton T-Shirt", category: "cloths" },
// 	{ id: 6, name: "Denim Jeans", category: "cloths" },
// 	{ id: 7, name: "Hoodie", category: "cloths" },
// 	{ id: 8, name: "Apple", category: "fruits" },
// 	{ id: 9, name: "Banana", category: "fruits" },
// 	{ id: 10, name: "Mango", category: "fruits" },
// ];


// function filterByCategory(category:ProductCategory): Product[]{
//     return products.filter(product => product.category === category)
// }

// const eleProducts = filterByCategory("electronics");
// console.log(eleProducts);

type Product = {
    id : number,
    name: string,
    price: number,
    rating: number
}

type Student = {
    id: number,
    name: string,
    email: string,
    rollNumber: number,
    course: string
}

// make it optional

type OptionalProduct = {
   [k in keyof Product]?: Product[k]
}

// make it read only

type ReadOnlyProduct = {
    readonly [k in keyof Product]: Product[k]
}

