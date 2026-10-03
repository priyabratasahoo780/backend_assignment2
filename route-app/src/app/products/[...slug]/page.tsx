
// import React from 'react';
// type propsPage = {
//   params: Promise<{
//     id: number
//   }>,
//   searchParams : Promise<{
//     age:number,
//     name:string
//   }>
// }
// const ProductPage = async ({ params, searchParams }: propsPage) => {
//   const { id } = await params;
//   const { age, name } = await searchParams;
//   console.log(id, age, name);
//   return (
//     <div>
//       ProductPage: {id} {age} {name}
//     </div>
//   );
// };
// export default ProductPage;


// // import React from 'react'

// // type propsPage = {
// //   params: Promise<{
// //     id: number
// //   }>,
// //   searchParams : Promise<{
// //     age:number,
// //     name:string
// //   }>
// // }
// // export default async function page({params, searchParams}: propsPage) {
// //   const {id} = await params
// //   const {age, name} = await searchParams
// //   console.log(id, age, name);
// //   return (
// //     <div>
// //       <h1>
// //         {id} {age} {name}
// //       </h1>
// //     </div>
// //   )
// // }



// import React from 'react'
// import { notFound } from 'next/navigation'

// type ProductsProps = {
//   params:Promise<{
//     slug:string[]
//   }>
// }

// const ProductPage = async({params}: ProductsProps) => {
//   const {slug} = await params

//   const [category, subCatergory, brand , productId, ...unwantedRouted] = slug

//   if(unwantedRouted.length > 0) return notFound()

//     console.log(slug, unwantedRouted)

//     console.log(category, subCatergory, brand, productId)

//     if(category && subCatergory && brand && productId) return (
//       <div>This is product details page {productId}</div>
//     )
//     if(category && subCatergory && brand ) return (
//       <div>This is brand page {brand}</div>
//     )
//     if(category && subCatergory) return (
//       <div>This is subCatergory page {subCatergory}</div>
//     )
//     if(category) return (
//       <div>This is category page {category}</div>
//     )
   
//         notFound()
// }

// export default ProductPage;


import React from 'react'
import { notFound } from 'next/navigation'

type ProductsProps = {
  params: Promise<{
    slug: string[]
  }>
}

const ProductPage = async ({ params }: ProductsProps) => {
  const { slug } = await params

  const [category, subCatergory, brand, productId, ...unwantedRouted] = slug

  if (unwantedRouted.length > 0) {
    notFound()
  }

  if (category && subCatergory && brand && productId) {
    return <div>This is product details page: {productId}</div>
  }

  if (category && subCatergory && brand) {
    return <div>This is brand page: {brand}</div>
  }

  if (category && subCatergory) {
    return <div>This is subCategory page: {subCatergory}</div>
  }

  if (category) {
    return <div>This is category page: {category}</div>
  }

  notFound()
}

export default ProductPage
