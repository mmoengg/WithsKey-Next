

export default function RecentTagsSection() {
    return (
         <div className='w-full h-[25dvh] bg-[#dddddd] flex items-center justify-center '>
            <div className='w-full h-full max-w-[1280px]  flex flex-col items-center justify-center'>
                <h2 className='text-3xl font-bold mb-4'>Recent Tags</h2>
                <p className='text-lg'>상황별, 향별, 최근 인기 상승한다양한 태그로 술을 만나 보세요.</p>
                <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='bg-gray-300 p-4 rounded-lg shadow-lg'>Tag 1</div>
                    <div className='bg-gray-300 p-4 rounded-lg shadow-lg'>Tag 2</div>
                    <div className='bg-gray-300 p-4 rounded-lg shadow-lg'>Tag 3</div>
                </div>
            </div>
        </div>
    );
}
