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
    const navbar = [
        {
            label: "Home",
            href: Routes.HOME
        },
        {
            label: "Products",
            href: Routes.PRODUCTS
        },
        {
            label: "Contact",
            href: Routes.CONTACT
        },
        {
            label: "Categories",
            href: Routes.CATEGORY
        },
        {
            label: "Terms",
            href: Routes.TERMS
        }
    ];

    return (
        <nav className="flex flex-col gap-3 w-44">
            {navbar.map((nav) => (
                <Link
                    key={nav.href}
                    href={nav.href}
                    className={`block w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                        pathname === nav.href
                            ? "text-blue-600 border-neutral-800 bg-neutral-100 font-semibold shadow-xs"
                            : "text-red-500 border-neutral-500 bg-white hover:border-neutral-800 hover:bg-neutral-50"
                    }`}
                >
                    {nav.label}
                </Link>
            ))}
        </nav>
    );
};

export default Navbar;