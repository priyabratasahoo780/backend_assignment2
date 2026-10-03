// import React from 'react';

// const PRODUCT_DATA = [
//   {
//     "id": 1,
//     "name": "Wireless Mechanical Keyboard",
//     "description": "Compact 75% mechanical keyboard with RGB backlighting and hot-swappable switches.",
//     "price": 89.99,
//     "rating": 4.8
//   },
//   {
//     "id": 2,
//     "name": "Noise Cancelling Headphones",
//     "description": "Over-ear Bluetooth headphones with active noise cancellation and 40-hour battery life.",
//     "price": 149.5,
//     "rating": 4.6
//   },
//   {
//     "id": 3,
//     "name": "Smart Fitness Watch",
//     "description": "Water-resistant smartwatch with heart rate monitoring, GPS, and sleep tracking.",
//     "price": 119.0,
//     "rating": 4.5
//   },
//   {
//     "id": 4,
//     "name": "Portable SSD 1TB",
//     "description": "High-speed USB-C external solid-state drive with up to 1050 MB/s transfer speed.",
//     "price": 99.99,
//     "rating": 4.9
//   },
//   {
//     "id": 5,
//     "name": "Ergonomic Office Chair",
//     "description": "Adjustable mesh office chair with lumbar support and breathable backrest.",
//     "price": 229.99,
//     "rating": 4.7
//   }
// ]
// type ProductProps = {
//   params: Promise<{
//     id: string;
//   }>,
//   searchParams : Promise<{
//     name:string,
//     description:string,
//     price:number,
//     rating:number
//   }>
// };
// const ProductPage = async ({ params, searchParams }: ProductProps) => {
//  const {id} = await params;
//  const {name, description, price, rating} = await searchParams;
//  console.log(id, name, description, price, rating);
// //  const Product = PRODUCT_DATA.find((item) => item.id === Number(id));
//  const Product = PRODUCT_DATA.filter((item) => item.id === Number(id));

//  if(!Product){
//   return(
//     <div>
//       <h2>Product not found {id}</h2>
//     </div>
//   )
//  }
//   return (
//     <div>
//       <h1>{Product[0]?.name}</h1>
//       <p>{Product[0]?.description}</p>
//       <p>Price: ${Product[0]?.price}</p>
//       <p>Rating: {Product[0]?.rating}</p>
//     </div>
//   );
// };

// export default ProductPage;



