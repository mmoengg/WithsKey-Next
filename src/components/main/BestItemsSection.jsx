

export default function BestItemsSection() {
    return (
        <div className='w-full h-[25dvh] fcc flex-col border-b-base'>
            <h2 className='text-3xl font-bold mb-4 font-eulyoo'>Best Items</h2>
            <p>지금 가장 인기 많은 술을 만나 보세요!</p>
            <div className='mt-6 flex gap-6'>
                <div className='p-4 border border-surface'>Item 1</div>
                <div className='p-4 border border-surface'>Item 2</div>
                <div className='p-4 border border-surface'>Item 3</div>
            </div>
        </div>
    );
}
