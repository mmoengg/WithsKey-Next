'use client';

export default function Footer() {

    // 스크롤 맨 위로
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className='relative w-full h-[110px] border-t-base fcc'>
            <ul>
                <li>© 2025 Withskey, mmoengg</li>
            </ul>
            <button type="button" className="absolute right-4 w-[36px] h-[36px] border rounded-full hover:bg-primary transition duration-200 cursor-pointer fcc" onClick={scrollToTop}>
                <img src='/assets/icons/icon-arrow-up.svg' alt="scroll-top" className="w-4 h-auto" />
            </button>
        </footer>
    );
}
