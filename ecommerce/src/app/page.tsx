"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {

  let valid = true;
  const router = useRouter();
  const handleClick = () => {
    if(valid){
      router.push("/products");
    }else{
      router.push("/login");
    }
  }
  return (
    <div className="bg-white">
      <Image src="/amazon.png" alt="Amazon" width={200} height={100} />
      <h1 className="text-3xl font-bold text-blue-500">{process.env.NEXT_PUBLIC_STORE_NAME}</h1>
      <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ratione ullam, animi sit, corrupti dolorum quaerat soluta pariatur numquam veritatis hic dolor quas architecto? Sequi voluptates eligendi voluptatibus, quam, nostrum quod quibusdam doloribus optio et minima soluta. Non, natus similique?</p>
    <nav>
      <Link href={"/products"}>Product</Link>
      <Link href={"/contact"}>Contact</Link>
      <Link href={"/categories"}>Category</Link>
      <Link href={"/terms"}>Terms</Link>
    </nav>
    <button className="bg-[] text-white px-4 py-2 rounded" onClick={handleClick}>Login</button>
    </div>
  );
}


