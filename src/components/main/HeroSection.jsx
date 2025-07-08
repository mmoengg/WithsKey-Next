

export default function HeroSection() {
    return (
        <div className='relative w-full h-base fcc flex-col border-b-base '>
            <div className='w-full h-full p-4'>
                <img src='/assets/images/bg-bowmore.jpg' alt='bg' className='w-full h-full object-cover' />
            </div>
            <div className="absolute top-[20%] left-[10%] w-[calc(100%-85px)] text-white text-left">
                <p className="md:text-2xl mb-2">TWELVE YEARS OLD</p>
                <h1 className="text-4xl md:text-6xl font-bold">
                    BOWMORE
                </h1>
                <p className="mt-3">ISLAY SINGLE MALT SCOTCH WHISKY</p>
            </div>
        </div>
    );
}
