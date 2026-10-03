"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  brand: string;
  price: number;
};

type CartProduct = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
};

type Cart = {
  id: number;
  products: CartProduct[];
};

type ProductProps = {
  products: string;
};

export default function Page(props: ProductProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Cart[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));

    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((data) => setCategories(data.carts))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* Products */}
      {products.map((item) => (
        <div key={item.id} className="border border-gray-300 m-4 p-4">
          <p>Title: {item.title}</p>
          <p>Description: {item.description}</p>
          <p>Category: {item.category}</p>
          <p>Brand: {item.brand}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}

      {/* Carts */}
      {categories.map((cart) => (
        <div key={cart.id} className="border border-blue-300 m-4 p-4">
          <h2 className="font-bold">Cart #{cart.id}</h2>

          {cart.products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 m-2 p-2"
            >
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={100}
                height={100}
                unoptimized
              />

              <p>Title: {product.title}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Total: ${product.total}</p>
              <p>Discount: {product.discountPercentage}%</p>
              <p>Discounted Total: ${product.discountedTotal}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}