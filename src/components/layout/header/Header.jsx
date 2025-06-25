export default function Header() {
    return (
        <header className='relative w-full h-[55px] pl-4 text-surface border-b-base fcc'>
            <a href='/' className='h-full fcc cursor-pointer'>
                <img src='/assets/icons/logo-withskey-b.png' alt='Logo' className='h-12 w-12' />
            </a>
            <nav className='h-full pl-[55px] fcx flex-1 transition duration-300'>
                <a href='/article' className='px-6 fcc'>
                    Article
                </a>
                <a href='/drinks' className='px-6 fcc'>
                    Whisky
                </a>
                <a href='/board' className='px-6 fcc'>
                    Other
                </a>
            </nav>
            <ul className='h-full flex'>
                <li className="h-full px-4 border-l-base fcc">
                    <button type="button" className='w-[34px] h-[34px] rounded-full border'></button>
                </li>
            </ul>
        </header>
    );
}
