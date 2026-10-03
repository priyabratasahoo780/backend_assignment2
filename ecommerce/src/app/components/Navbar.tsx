"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

enum Routes {
    HOME = "/",
    PRODUCTS = "/products",
    CONTACT = "/contact",
    CATEGORY = "/categories",
    TERMS = "/terms"
}
const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className='flex gap-4'>
            {pathname}
            <Link href={Routes.HOME} className={`${pathname === Routes.HOME ? 'text-blue-500' : 'text-gray-500'}`}>Home</Link>
            <Link href={Routes.PRODUCTS} className={`${pathname === Routes.PRODUCTS ? 'text-blue-500' : 'text-gray-500'}`}>Products</Link>
            <Link href={Routes.CONTACT} className={`${pathname === Routes.CONTACT ? 'text-blue-500' : 'text-gray-500'}`}>Contact</Link>
            <Link href={Routes.CATEGORY} className={`${pathname === Routes.CATEGORY ? 'text-blue-500' : 'text-gray-500'}`}>Categories</Link>
            <Link href={Routes.TERMS} className={`${pathname === Routes.TERMS ? 'text-blue-500' : 'text-gray-500'}`}>Terms</Link>
        </nav>
    );
}

export default Navbar;