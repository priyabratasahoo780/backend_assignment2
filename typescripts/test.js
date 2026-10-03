// "use strict";
// // "use strict";
// // var a = 123456;
// // console.log(a);
// // function amount<T, U>(symbol: T, amount: U) {
// //   return `${symbol} ${amount}`
// // }
// // // amount<string, number>("$", 100)
// // const res = amount("$", 100)
// // console.log(res)
// // // amount<string, string>("$", "100")
// // const res2 = amount("$", 100)
// // console.log(res2)
// function amount(symbol, amount) {
//     return `${symbol} ${amount}`;
// }
// const res = amount("$", 100);
// console.log(res);
// const products = [
//     { id: 1, name: "iPhone 15", category: "electronics" },
//     { id: 2, name: "Wireless Headphones", category: "electronics" },
//     { id: 3, name: "Smart Watch", category: "electronics" },
//     { id: 4, name: "Bluetooth Speaker", category: "electronics" },
//     { id: 5, name: "Cotton T-Shirt", category: "cloths" },
//     { id: 6, name: "Denim Jeans", category: "cloths" },
//     { id: 7, name: "Hoodie", category: "cloths" },
//     { id: 8, name: "Apple", category: "fruits" },
//     { id: 9, name: "Banana", category: "fruits" },
//     { id: 10, name: "Mango", category: "fruits" },
// ];
// function filterByCategory(products, category) {
//     return products.filter(product => product.category === category);
// }
// const eleProducts = filterByCategory(products, "electronics");
// console.log(eleProducts);


// type User = {
// 	id: number,
// 	name: string,
// 	email: string
// }

// const users: User[] = [
// 	{ id: 1, name: "Aarav Patel", email: "aarav.patel@example.com" },
// 	{ id: 2, name: "Diya Shah", email: "diya.shah@example.com" },
// 	{ id: 3, name: "Rohan Mehta", email: "rohan.mehta@example.com" },
// 	{ id: 4, name: "Anaya Desai", email: "anaya.desai@example.com" },
// 	{ id: 5, name: "Kabir Joshi", email: "kabir.joshi@example.com" },
// 	{ id: 6, name: "Ishita Patel", email: "ishita.patel@example.com" },
// 	{ id: 7, name: "Vivaan Shah", email: "vivaan.shah@example.com" },
// 	{ id: 8, name: "Meera Trivedi", email: "meera.trivedi@example.com" },
// 	{ id: 9, name: "Arjun Modi", email: "arjun.modi@example.com" },
// 	{ id: 10, name: "Kiara Mehta", email: "kiara.mehta@example.com" },
// ];


// // type Userkeys = keyof User

// function getDetailByKey(key: keyof User, items: User[]): string[] {
// 	const result = items.map((i) => i[key]);

// 	return result as string[];
// }

// console.log(getDetailByKey("name", users))


const product = {
	id: 1001,
	name: "Wireless Bluetooth Headphones",
	brand: "SoundMax",
	category: "Electronics",
	subcategory: "Headphones",
	price: 2499,
	currency: "INR",
	discount: 15,
	stock: 120,
	sku: "SM-WH-1001",
	color: "Black",
	weight: "250g",
	material: "Plastic",
	connectivity: "Bluetooth 5.3",
	batteryLife: "30 hours",
	chargingTime: "2 hours",
	warranty: "1 year",
	rating: 4.5,
	reviews: 328,
	availability: "In Stock",
	waterResistance: "IPX4",
	microphone: true,
	noiseCancellation: true,
	foldable: true,
	manufacturer: "SoundMax Technologies",
	countryOfOrigin: "India",
};

type Product = typeof product
type ProductKeys = keyof Product
// type ProductKeys = keyof typeof product;


const roles = {
	admin: "ADMIN",
	user: "USER",
	guest: "GUEST",
} as const;

type RoleKeys = keyof typeof roles;

console.log(product);