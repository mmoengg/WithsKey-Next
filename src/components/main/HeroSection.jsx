

export default function HeroSection() {
    return (
        <div className='relative w-full h-screen text-white text-center flex flex-col items-center justify-center'>
            <img src='/assets/images/bg-bowmore.jpg' alt='bg' className='absolute top-0 left-0 w-full h-full object-cover' />
            <div className="relative z-10 w-full max-w-[1280px] h-full">
                <div className="absolute top-[500px] left-0 text-white text-left">
                    <p className="text-2xl mb-2">TWELVE YEARS OLD</p>
                    <h1 className="text-6xl md:text-8xl font-bold">
                        BOWMORE
                    </h1>
                    <p className="mt-3">ISLAY SINGLE MALT SCOTCH WHISKY</p>
                </div>
            </div>
        </div>
    );
}
