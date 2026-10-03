import React from 'react'
import {notFound} from "next/navigation";
 type productsProps = {
   params : Promise<{
      reviewId: string,
      productsId: string
   }>
 }
export default async function page({params}: productsProps) {
    const {reviewId, productsId} = await params;
    if(parseInt(reviewId) > 1000){
      notFound();
    }
    console.log("reviewId: ", reviewId);
    console.log("productsId: ", productsId);

  return (
    <div>
      <h1>review {reviewId} for {productsId}</h1>
    </div>
  )
}
