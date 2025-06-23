


export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full h-[60px] flex items-center justify-center">
            <div className="w-full max-w-[1240px] h-full flex items-center justify-center px-4 text-white relative">
                <h1 className="absolute left-4 h-full flex items-center text-xl font-bold cursor-pointer">
                    <img src="/assets/images/icon/logo_withskey_w.png" alt="Logo" className="h-13 w-13 inline-block" />
                </h1>
                <nav className="h-full flex items-center gap-4">
                    <a href="/article" className="px-10">아티클</a>
                    <a href="/drinks" className="px-10">위스키</a>
                    <a href="/board" className="px-10">게시판</a>
                </nav>
                <div className="absolute right-4 flex items-center gap-2">
                    <button className="button">로그인</button>
                </div>
            </div>
        </header>
    )
}