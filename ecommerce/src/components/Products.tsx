import React from "react";
import Link from "next/link";
import { ProductType } from "@/types/products";

interface ProductProps {
  data: ProductType;
}

const Product: React.FC<ProductProps> = ({ data }) => {
  return (
    <div className="border border-neutral-300 rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        {data.image && (
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
        )}
        <h2 className="text-lg font-semibold text-neutral-800">{data.name}</h2>
        {data.description && (
          <p className="text-sm text-neutral-500 mt-1 line-clamp-2">
            {data.description}
          </p>
        )}
        <div className="mt-2 flex items-center justify-between">
          <span className="text-base font-bold text-neutral-900">
            ${data.price}
          </span>
          <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full">
            {data.category}
          </span>
        </div>
      </div>
      <Link
        href={`/products/${data.id}`}
        className="mt-4 block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
      >
        View Details
      </Link>
    </div>
  );
};

export default Product;
