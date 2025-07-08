'use client'

import Link from "next/link";
import Image from "next/image";

import { useRouter, usePathname } from "next/navigation";

import TUTORIAL_ARTICLE_LIST from '@/data/tutorialArticles';
import BLENDED_ARTICLE_LIST from "@/data/blendedArticles";
import BOURBON_ARTICLE_LIST from "@/data/bourbonArticles";
import SINGLEMALT_ARTICLE_LIST from "@/data/singlemaltArticles";

export default function ArticleDetailPage() {
    const router = useRouter();
    const pathname = usePathname();

    // 경로에서 카테고리 추출 (예: /article/blended → blended)
    const category = pathname.split('/')[2] || 'tutorial';
    const pageId = Number(pathname.split('/')[3]) || '1';

    // 카테고리별 데이터 매핑
    const CATEGORY_DATA = {
        tutorial: TUTORIAL_ARTICLE_LIST,
        blended: BLENDED_ARTICLE_LIST,
        bourbon: BOURBON_ARTICLE_LIST,
        singlemalt: SINGLEMALT_ARTICLE_LIST,
    };

    // 현재 카테고리 데이터
    const articleList = CATEGORY_DATA[category] || [];

    // 해당 탭
    const selectedArticle = articleList.find(tab => tab.id === pageId);

    return (
        <section className="w-full h-auto min-h-base">
            <div className="w-full h-[420px] border-b-base flex">
                <div className="w-1/2 h-full p-4 flex flex-col justify-between">
                    <Link href={'/article'} className="font-eulyoo underline">Go back to tutorial</Link>
                    <h1 className="text-[65px] font-eulyoo font-light">{selectedArticle.label}</h1>
                </div>
                <div className="w-1/2 h-full p-4 border-l-base">
                    <div className="w-full h-full relative bg-primary">
                        {category === 'tutorial' && (
                            <Image
                                src={selectedArticle.main_image_url}
                                alt={selectedArticle.label}
                                fill
                                sizes="100dvw"
                                className="object-cover bg-white"
                            />
                        )}
                        {category !== 'tutorial' && (
                            <Image
                                src={selectedArticle.main_image_url}
                                alt={selectedArticle.label}
                                fill
                                sizes="100dvw"
                                className="p-6 object-contain bg-white"
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[calc(100dvh-420px-55px)] flex">
                <div className="w-1/2 p-4 "></div>
                <ul className="w-1/2 p-4 border-l-base pt-[80px]">
                    {selectedArticle.sections.map((section, idx) => (
                        <li key={idx} className="mb-20">
                            <h3 className="mb-6 text-3xl font-light font-eulyoo">{section.title}</h3>
                            <p className="font-light whitespace-pre-line">
                                {section.content}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}


// 'use client';
// import { useState } from 'react';
// import { useRouter, usePathname } from "next/navigation";
//
// import TUTORIAL_ARTICLE_LIST from '@/data/tutorialArticles';
// import BLENDED_ARTICLE_LIST from "@/data/blendedArticles";
// import BOURBON_ARTICLE_LIST from "@/data/bourbonArticles";
// import SINGLEMALT_ARTICLE_LIST from "@/data/singlemaltArticles";
//
// export default function ArticleDetailPage() {
//     const router = useRouter();
//     const pathname = usePathname();
//
//     // 경로에서 카테고리 추출 (예: /article/blended → blended)
//     const category = pathname.split('/')[2] || 'tutorial';
//
//     // 카테고리별 데이터 매핑
//     const CATEGORY_DATA = {
//         tutorial: TUTORIAL_ARTICLE_LIST,
//         blended: BLENDED_ARTICLE_LIST,
//         bourbon: BOURBON_ARTICLE_LIST,
//         singlemalt: SINGLEMALT_ARTICLE_LIST,
//     };
//
//     // 현재 카테고리 데이터
//     const articleList = CATEGORY_DATA[category] || [];
//
//     // 탭 선택 상태 (id가 1부터 시작한다고 가정)
//     const [selected, setSelected] = useState(articleList[0]?.id ?? 1);
//
//     // 선택된 아티클 데이터
//     const selectedArticle = articleList.find(tab => tab.id === selected);
//
//     return (
//         <section className="w-full min-h-base flex items-start justify-center">
//             <button
//                 onClick={() => router.push('/article')}
//                 className="absolute top-[120px] bg-yellow-900 text-white px-4 py-2 rounded hover:bg-yellow-700 transition cursor-pointer"
//             >
//                 ◀
//             </button>
//             {/* 왼쪽 리스트 */}
//             <div className='flex flex-col gap-6'>
//                 {articleList.map(tab => (
//                     <button
//                         key={tab.id}
//                         className={`w-[250px] h-[60px] px-6 rounded text-left cursor-pointer ${selected === tab.id ? 'bg-yellow-900 text-white' : 'bg-gray-400 text-black'}`}
//                         onClick={() => setSelected(tab.id)}
//                     >
//                         {tab.label}
//                     </button>
//                 ))}
//             </div>
//             {/* 오른쪽 상세 */}
//             <div className="w-full p-12 rounded bg-white/50 whitespace-pre-line">
//                 {selectedArticle?.sections.map((section, idx) => (
//                     <div key={idx} className="mb-8">
//                         {/* 이미지 섹션 판별 */}
//                         {section.title.match(/^\d+\./) ? (
//                             <img src={section.content} alt={section.title} />
//                         ) : (
//                             <>
//                                 <h3 className="text-xl font-bold mb-2">{section.title}</h3>
//                                 <p className="whitespace-pre-line">{section.content}</p>
//                             </>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }