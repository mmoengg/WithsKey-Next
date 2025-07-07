import Link from "next/link";

export default function ServiceIntroSection() {
    return (
        <div className='w-full min-h-[50dvh] px-4 py-28 border-b-base fcc'>
            <div className="w-full h-full text-center fcc flex-col ">
                <h2 className="mb-4 text-6xl font-bold font-eulyoo">Your Whisky Guide</h2>
                <p className="text-lg mb-10">위스키 입문자를 위한 다양한 기능을 경험해보세요.</p>
                <ul className="w-full flex items-center justify-center gap-4 lg:gap-8 flex-col lg:flex-row">
                    <li className="w-full lg:w-[340px] min-h-[330px] px-6 py-12 border border-surface flex flex-col items-center justify-center">
                        <h3 className="text-2xl mb-4 font-eulyoo">Whisky Articles</h3>
                        <p className="text-gray-700 pb-12">위스키의 종류, 역사, 문화까지!<br/> 초보자도 쉽게 배우는 위스키 이야기.</p>
                        <Link href={'/article'} className="bg-primary w-28 p-2 border border-surface rounded hover:bg-background transition duration-300 cursor-pointer">
                            자세히 보기
                        </Link>
                    </li>
                    <li className="w-full lg:w-[340px] min-h-[330px]  px-6 py-12 border border-surface flex flex-col items-center justify-center">
                        <h3 className="text-2xl mb-4 font-eulyoo">Whisky List</h3>
                        <p className="text-gray-700 pb-12">수백 가지 위스키 정보<br/> 취향에 맞는 술을 쉽고 빠르게 찾으세요</p>
                        <Link href={'/drinks'} className="bg-primary w-28 p-2 border border-surface rounded hover:bg-background transition duration-300 cursor-pointer">
                            자세히 보기
                        </Link>
                    </li>
                    <li className="w-full lg:w-[340px] min-h-[330px]  px-6 py-12 border border-surface flex flex-col items-center justify-center">
                        <h3 className="text-2xl mb-4 font-eulyoo">Community Board</h3>
                        <p className="text-gray-700 pb-12">위스키에 대해 자유롭게 질문하고<br/> 다른 유저들과 경험을 나눠보세요</p>
                        <Link href={'/board'} className="bg-primary w-28 p-2 border border-surface rounded hover:bg-background transition duration-300 cursor-pointer">
                            자세히 보기
                        </Link>
                    </li>
                </ul>
            </div>
        </div>  
    );
}
