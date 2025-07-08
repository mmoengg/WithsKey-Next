'use client';

import Link from 'next/link';

import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    }

    return (
        <header className='relative w-full h-[55px] pl-4 text-surface border-b-base fcb'>
            <Link href='/' className='h-full fcc cursor-pointer'>
                <img src='/assets/icons/logo-withskey-b.png' alt='Logo' className='h-12 w-12' />
            </Link>
            <nav className='h-full pl-[55px] fcx flex-1 transition duration-300 hidden sm:flex'>
                <Link href='/article' className='px-6 fcc'>
                    Article
                </Link>
                <Link href='/drinks' className='px-6 fcc'>
                    Whisky
                </Link>
                <Link href='/board' className='px-6 fcc'>
                    Other
                </Link>
            </nav>

            <ul className='h-full flex'>
                <li className="h-full px-4 border-l-base fcc flex sm:hidden">
                    <button type="button" className='w-[34px] h-[34px] rounded-full border cursor-pointer' onClick={toggleMenu}>-</button>
                </li>
                <li className="h-full px-4 border-l-base fcc">
                    <button type="button" className='w-[34px] h-[34px] rounded-full border'></button>
                </li>
            </ul>

            {isMenuOpen && (
                    <nav className="fixed bg-primary w-[100vw] h-[100vh] top-0 left-0 z-[999] flex flex-col justify-center items-center gap-2">
                        <Link href='/article' className='p-6 fcc' onClick={toggleMenu}>
                            Article
                        </Link>
                        <Link href='/drinks' className='p-6 fcc' onClick={toggleMenu}>
                            Whisky
                        </Link>
                        <Link href='/board' className='p-6 fcc' onClick={toggleMenu}>
                            Other
                        </Link>
                        <buton type="button" class="absolute bottom-1/4 w-[34px] h-[34px] rounded-full border fcc cursor-pointer" onClick={toggleMenu}>X</buton>
                    </nav>
                )
            }

        </header>
    );
}
