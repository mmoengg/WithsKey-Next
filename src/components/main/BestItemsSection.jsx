

export default function BestItemsSection() {
    return (
        <div className='w-full h-[25dvh] bg-[#1E0201] flex items-center justify-center '>
            <div className='w-full h-full max-w-[1280px] text-white flex flex-col items-center justify-center'>
                <h2 className='text-3xl font-bold mb-4'>Best Items</h2>
                <p className='text-lg'>지금 가장 인기 많은 술을 만나 보세요!</p>
                <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='bg-white text-black p-4 rounded-lg shadow-lg'>Item 1</div>
                    <div className='bg-white text-black p-4 rounded-lg shadow-lg'>Item 2</div>
                    <div className='bg-white text-black p-4 rounded-lg shadow-lg'>Item 3</div>
                </div>
            </div>
        </div>
    );
}
