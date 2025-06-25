import Link from "next/link";


export default function  DrinksDetailPages() {

    return (
        <section className="w-full h-auto min-h-base text-surface">
            <div className="w-full h-[420px] border-b-base flex">
                <div className="w-1/2 h-full p-4 flex flex-col justify-between">
                    <Link href={'/drinks'} className="font-eulyoo fcb">
                        <p className="underline">Go back to whisky</p>
                        <div>♡</div>
                    </Link>
                    <h1 className="text-[65px] font-eulyoo font-light">Gelenfarclas</h1>
                </div>
                <div className="w-1/2 h-full p-4 border-l-base">
                    <div className="w-full h-full bg-primary">
                    {/*    이미지 */}
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[calc(100dvh-420px-55px)] flex">
                <div className="w-1/2 p-4 pt-10">
                    <div className="w-full fcs gap-2 font-eulyoo">
                        <Link href={'/tags/1'} className="w-atuo px-5 py-2 border border-surface rounded-full">#데이트</Link>
                        <Link href={'/tags/1'} className="w-atuo px-5 py-2 border border-surface rounded-full">#따뜻함</Link>
                        <Link href={'/tags/1'} className="w-atuo px-5 py-2 border border-surface rounded-full">#치즈</Link>
                    </div>
                </div>
                <ul className="w-1/2 p-4 border-l-base pt-[80px]">
                    <li className="mb-20">
                        <h3 className="mb-6 text-3xl font-light font-eulyoo">스낵</h3>
                        <p className="font-light whitespace-pre-line">
                            추천 리스트 출력
                        </p>
                    </li>
                    {/*{selectedArticle.sections.map((section, idx) => (*/}
                    {/*    <li key={section.id} className="mb-20">*/}
                    {/*        <h3 className="mb-6 text-3xl font-light font-eulyoo">{section.title}</h3>*/}
                    {/*        <p className="font-light whitespace-pre-line">*/}
                    {/*            {section.content}*/}
                    {/*        </p>*/}
                    {/*    </li>*/}
                    {/*))}*/}
                </ul>
            </div>
        </section>
  )
}