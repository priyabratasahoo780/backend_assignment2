import Product from "@/components/Products";
import { ProductType } from "@/types/products";

const page = async () => {
  const res = await fetch("http://localhost:3006/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products from server");
  }

  const json = await res.json(); 
  const products: ProductType[] = json.data || [];

  return (
    <div className="p-4">
      <h1>Products</h1>
      <div className="gap-6">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default page;