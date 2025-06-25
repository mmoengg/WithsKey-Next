"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isBlur, setIsBlur] = useState(false);
    const pathname = usePathname();

    let headerClass = "w-full flex items-center justify-center backdrop-blur-md transition-colors duration-300 text-white";

    // if (pathname === '/') {
    //     headerClass += isBlur ? ' bg-[#1E0201] ' : ' bg-transparent';
    // } else {
    //     headerClass += ' bg-[#1E0201] ';
    // }

    useEffect(() => {
        const handleScroll = () => {
            setIsBlur(window.scrollY >= window.innerHeight);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={headerClass}>
            <div className='relative w-full h-[55px] pl-4 text-[var(--text-base)] border-b-[1px] border-[var(--border-base)] flex items-center justify-center '>
                <h1 className='absolute left-4 h-full flex items-center text-xl font-bold cursor-pointer '>
                    <a href='/'>
                        <img src='/assets/icons/logo-withskey-b.png' alt='Logo' className='h-12 w-12' />
                    </a>
                </h1>
                <nav className='h-full pl-[90px] flex items-center transition duration-300 flex-1'>
                    <a href='/article' className='h-full flex items-center justify-center px-6'>
                        Article
                    </a>
                    <a href='/drinks' className='h-full flex items-center justify-center px-6'>
                        Whisky
                    </a>
                    <a href='/board' className='h-full flex items-center justify-center px-6'>
                        Other
                    </a>
                </nav>
                <div className='absolute h-full right-0 flex items-center gap-2'>
                    <li className="h-full px-4 border-l-[1px] border-[var(--border-base)] flex items-center justify-center">
                        <button type="button" className='w-[34px] h-[34px] rounded-full border' ></button>
                    </li>
                </div>
            </div>
        </header>
    );
}
