"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavbarLinks = () => {
    const pathname = usePathname()
    return (
        <>
            <li className={pathname == "/" ? "text-[#ffc300] text-lg" : "text-white text-lg"}>
                <Link href="/">Home</Link>
            </li>
            <li>
                <details>
                    <summary className='text-white text-lg'>Movies</summary>
                    <ul className="p-2 z-10">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </details>
            </li>

            <li className={pathname == "/contact" ? "text-[#ffc300] text-lg" : "text-white text-lg"}>
                <Link href="/contact">Contact</Link>
            </li>
            <li className={pathname == "/membership" ? "text-[#ffc300] text-lg" : "text-white text-lg"}>
                <Link href="/membership">Membership</Link>
            </li>
        </>
    );
};

export default NavbarLinks;