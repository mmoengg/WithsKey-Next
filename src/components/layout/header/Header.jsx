"use client"

import React, { useEffect, useState } from 'react';

export default function Header() {
    const [isBlur, setIsBlur] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // 스크롤이 한 화면(h-screen) 이상 내려오면 true
            setIsBlur(window.scrollY >= window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed z-10 top-0 left-0 w-full h-[60px] flex items-center justify-center backdrop-blur-md ${isBlur ? ' bg-[#1E0201]' : ''}`}>
            <div className='w-full max-w-[1280px] h-full flex items-center justify-center px-4 text-white relative'>
                <h1 className='absolute left-4 h-full flex items-center text-xl font-bold cursor-pointer'>
                    <a href='/'>
                        <img src='/assets/icons/logo-withskey-w.png' alt='Logo' className='h-15 w-15 inline-block' />
                    </a>
                </h1>
                <nav className='h-full flex items-center gap-4 transition duration-300'>
                    <a href='/article' className='h-full flex items-center justify-center px-10'>
                        아티클
                    </a>
                    <a href='/drinks' className='h-full flex items-center justify-center px-10'>
                        위스키
                    </a>
                    <a href='/board' className='h-full flex items-center justify-center px-10'>
                        게시판
                    </a>
                </nav>
                <div className='absolute right-4 flex items-center gap-2'>
                    <button className='button'>로그인</button>
                </div>
            </div>
        </header>
    );
}
