'use client';

import { useRouter } from 'next/navigation';

export default function ServiceIntroSection() {
    const router = useRouter()

    return (
        <div className='w-full h-[50dvh] bg-gray-200'>
            <div className="w-full max-w-[1280px] h-full mx-auto flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">Your Whisky Guide</h2>
                <p className="text-lg md:text-xl mb-8">위스키 입문자를 위한 다양한 기능을 경험해보세요.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white py-10 px-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">Whisky Articles</h3>
                        <p className="text-gray-700">위스키의 종류, 역사, 문화까지!<br/> 초보자도 쉽게 배우는 위스키 이야기.</p>
                    </div>
                    <div className="bg-white py-10 px-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">Whisky List</h3>
                        <p className="text-gray-700">수백 가지 위스키 정보<br/> 취향에 맞는 술을 쉽고 빠르게 찾으세요</p>
                    </div>
                    <div className="bg-white py-10 px-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">Community Board</h3>
                        <p className="text-gray-700">위스키에 대해 자유롭게 질문하고<br/> 다른 유저들과 경험을 나눠보세요</p>
                    </div>
                </div>
                <div className="mt-12">
                    <button className="bg-yellow-900 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition duration-300 cursor-pointer" onClick={() => router.push('/service')}>
                        Learn More
                    </button>
                </div>
            </div>
        </div>  
    );
}
