

export default function  DrinksDetailPages() {

    return (
        <section className="w-full h-full min-h-screen flex flex-col items-center justify-start bg-gray-200">
            <div className="w-full max-w-[1280px] h-full mt-[60px] py-[40px] px-4 flex flex-col items-center justify-start">
                <div className="w-full h-[700px] flex gap-24">
                    <div className="w-1/2 p-12 bg-white rounded-2xl">사진</div>
                    <div className="w-1/2 flex flex-col justify-between gap-12">
                        {/* name */}
                        <div className="pt-[170px]">
                            <h1 className="text-7xl text-center">Gelenfarclas</h1>
                        </div>
                        {/* info */}
                        <div className="flex flex-col gap-4">
                            <div className="w-full flex justify-end gap-12">
                                <div>like</div>
                                {/*<div>comment</div>*/}
                            </div>
                            <ul className="w-full flex flex-col border-2">
                                <li className="w-full h-[60px] px-5 flex  items-center justify-between gap-4">
                                    <p className="font-bold">Entry</p>
                                    <ul className="flex gap-2">
                                        <li className="px-4 py-2 bg-white rounded-full">싱글몰트</li>
                                        <li className="px-4 py-2 bg-white rounded-full">과일</li>
                                        <li className="px-4 py-2 bg-white rounded-full">데이트</li>
                                    </ul>
                                </li>
                                <li className="w-full h-[60px] px-5 flex items-center justify-between gap-6 border-t-[2px]">
                                    <p className="font-bold">도수</p>
                                    <p className="">40%</p>
                                </li>
                                <li className="w-full h-[60px] px-5 flex items-center justify-between gap-6 border-t-[2px]">
                                    <p className="font-bold">용량</p>
                                    <p className="">375ml</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*<div className="w-full h-1/2">차트</div>*/}
                {/*<div className="w-full">스낵</div>*/}
                {/*<div className="w-full">연관 술</div>*/}
                {/*<div className="w-full">코멘트</div>*/}
            </div>
        </section>
  )
}