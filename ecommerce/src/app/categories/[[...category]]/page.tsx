"use client"

import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
export default function category() {
    const router = useRouter();
    
    return (
        <div>
            <Navbar/>
            <h1>category page</h1>

        </div>
    )
}