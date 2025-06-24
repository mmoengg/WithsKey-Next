
export default function Article() {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-start bg-[#1E0201]'>
            <ul className='w-full h-full max-w-[1280px] mt-[60px] p-4 flex items-center justify-between gap-10'>
                <li className='w-1/4 h-100 rounded-2xl flex items-center justify-center bg-white cursor-pointer'>Turotial</li>
                <li className='w-1/4 h-100 rounded-2xl flex items-center justify-center bg-white cursor-pointer'>Blended</li>
                <li className='w-1/4 h-100 rounded-2xl flex items-center justify-center bg-white cursor-pointer'>Bourbon</li>
                <li className='w-1/4 h-100 rounded-2xl flex items-center justify-center bg-white cursor-pointer'>Single Malt</li>
            </ul>
        </div>
    );
}
