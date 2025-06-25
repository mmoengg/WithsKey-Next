

export default function RecentTagsSection() {
    return (
        <div className='w-full h-[25dvh] fcc flex-col border-l-base'>
            <h2 className='text-3xl font-bold mb-4 font-eulyoo'>Recent Tags</h2>
            <p>상황별, 향별, 최근 인기 상승한다양한 태그로 술을 만나 보세요.</p>
            <div className='mt-6 flex gap-6'>
                <div className='p-4 border border-surface'>Item 1</div>
                <div className='p-4 border border-surface'>Item 2</div>
                <div className='p-4 border border-surface'>Item 3</div>
            </div>
        </div>
    );
}
