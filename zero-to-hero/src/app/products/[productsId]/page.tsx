import React from "react";

type ProductsProps = {
  params: Promise<{
    productsId: string;
  }>;
};

export default async function ProductsPage({
  params,
}: ProductsProps) {
  const { productsId } = await params;
   console.log("Product ID:", productsId);
  return (
    <div>
      <h1>Product Detail: {productsId}</h1>
    </div>
  );
}