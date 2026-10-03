// import React from 'react'
// import {useRouter} from 'next/router'
// const Id = () => {
//     const router = useRouter()
//     const params = router.query
//     const id = params.id
//     console.log(id);
//   return (
//     <div>
//         <h1>Hello {id}</h1>
//     </div>
//   )
// }

// export default Id



// import { GetServerSideProps } from 'next';

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   console.log(context);
//   const {params} = context
//   return {
//     props: {
//       id : params?.id || null
//     }
//   }
// }

//    type DashboardPageProps = {
//     id:number,
//    }

//    const DashboardPage = ({id} : DashboardPageProps) => {
//     return(
//       <div>{id}</div>
//     )
//    }

//    export default DashboardPage


// export const getServerSideProps: GetServerSideProps = async(context) => {
//   console.log(context);
//   const {params} = context;
//   console.log(params);
//   const id = params?.id || null;
//   return {
//     props: {
//       id: id
//     }
//   }
// }

// type IdPageProps = {
//   id: string
// }
// const IdPage = ({id}: IdPageProps) => {
//   return(
//     <div>
//       <h1>Hello {id}</h1>
//     </div>
//   )
// }

// export default IdPage






// import { GetServerSideProps } from 'next';

// const PRODUCTS_DATA = [
//   {
//     "id": 1,
//     "name": "Wireless Mechanical Keyboard",
//     "description": "Compact 75% mechanical keyboard with RGB backlighting and hot-swappable switches.",
//     "price": 89.99,
//     "rating": 4.7
//   },
//   {
//     "id": 2,
//     "name": "Noise Cancelling Headphones",
//     "description": "Over-ear Bluetooth headphones with active noise cancellation and 40-hour battery life.",
//     "price": 149.5,
//     "rating": 4.8
//   },
//   {
//     "id": 3,
//     "name": "Smart Fitness Watch",
//     "description": "Water-resistant smartwatch with heart rate tracking, GPS, and sleep monitoring.",
//     "price": 119.0,
//     "rating": 4.5
//   },
//   {
//     "id": 4,
//     "name": "Portable SSD 1TB",
//     "description": "High-speed USB-C external SSD with up to 1050 MB/s read performance.",
//     "price": 99.99,
//     "rating": 4.9
//   },
//   {
//     "id": 5,
//     "name": "Ergonomic Office Chair",
//     "description": "Adjustable mesh office chair with lumbar support and breathable backrest.",
//     "price": 229.99,
//     "rating": 4.6
//   }
// ]
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const {params} = context;
//   const id = params?.id || null
//   const product = PRODUCTS_DATA.filter((item)=> item?.id === Number(id))
//   return {
//     props: {
//       id : params?.id || null,
//       product
//     }
//   }
// }

//    type DashboardPageProps = {
//     id:number,
//    }

//    const DashboardPage = ({id} : DashboardPageProps) => {
//     return(
//       <div>{product.name}</div>
//     )
//    }

//    export default DashboardPage



