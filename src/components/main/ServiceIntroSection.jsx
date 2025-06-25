import Link from "next/link";

export default function ServiceIntroSection() {
    return (
        <div className='w-full h-[50dvh] border-b-base'>
            <div className="w-full h-full text-center fcc flex-col ">
                <h2 className="mb-4 text-6xl font-bold font-eulyoo">Your Whisky Guide</h2>
                <p className="text-lg mb-10">위스키 입문자를 위한 다양한 기능을 경험해보세요.</p>
                <ul className="flex gap-8">
                    <li className="p-12 border border-surface">
                        <h3 className="text-2xl mb-4 font-eulyoo">Whisky Articles</h3>
                        <p className="text-gray-700 pb-12">위스키의 종류, 역사, 문화까지!<br/> 초보자도 쉽게 배우는 위스키 이야기.</p>
                        <Link href={'/article'} className="bg-primary  px-12 py-2 border border-surface rounded hover:bg-background transition duration-300 cursor-pointer">
                            자세히 보기
                        </Link>
                    </li>
                    <li className="p-12 border border-surface">
                        <h3 className="text-2xl mb-4 font-eulyoo">Whisky List</h3>
                        <p className="text-gray-700 pb-12">수백 가지 위스키 정보<br/> 취향에 맞는 술을 쉽고 빠르게 찾으세요</p>
                        <Link href={'/drinks'} className="bg-primary  px-12 py-2 border border-surface rounded hover:bg-background transition duration-300 cursor-pointer">
                            자세히 보기
                        </Link>
                    </li>
                    <li className="p-12 border border-surface">
                        <h3 className="text-2xl mb-4 font-eulyoo">Community Board</h3>
                        <p className="text-gray-700 pb-12">위스키에 대해 자유롭게 질문하고<br/> 다른 유저들과 경험을 나눠보세요</p>
                        <Link href={'/board'} className="bg-primary  px-12 py-2 border border-surface rounded hover:bg-background transition duration-300 cursor-pointer">
                            자세히 보기
                        </Link>
                    </li>
                </ul>
            </div>
        </div>  
    );
}
