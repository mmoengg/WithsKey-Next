'use client';
import { useState } from 'react';
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

    // 카테고리별 데이터 매핑
    const CATEGORY_DATA = {
        tutorial: TUTORIAL_ARTICLE_LIST,
        blended: BLENDED_ARTICLE_LIST,
        bourbon: BOURBON_ARTICLE_LIST,
        singlemalt: SINGLEMALT_ARTICLE_LIST,
    };

    // 현재 카테고리 데이터
    const articleList = CATEGORY_DATA[category] || [];

    // 탭 선택 상태 (id가 1부터 시작한다고 가정)
    const [selected, setSelected] = useState(articleList[0]?.id ?? 1);

    // 선택된 아티클 데이터
    const selectedArticle = articleList.find(tab => tab.id === selected);

    return (
        <section className="w-full min-h-screen flex items-start justify-center bg-[#1E0201]">
            <div className="w-full max-w-[1280px] mt-[60px] pt-[150px] px-4 text-white flex items-start justify-start gap-12">
                <button
                    onClick={() => router.push('/article')}
                    className="absolute top-[120px] bg-yellow-900 text-white px-4 py-2 rounded hover:bg-yellow-700 transition cursor-pointer"
                >
                    ◀
                </button>
                {/* 왼쪽 리스트 */}
                <div className='flex flex-col gap-6'>
                    {articleList.map(tab => (
                        <button
                            key={tab.id}
                            className={`w-[250px] h-[60px] px-6 rounded text-left cursor-pointer ${selected === tab.id ? 'bg-yellow-900 text-white' : 'bg-gray-400 text-black'}`}
                            onClick={() => setSelected(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                {/* 오른쪽 상세 */}
                <div className="w-full p-12 rounded bg-white/50 whitespace-pre-line">
                    {selectedArticle?.sections.map((section, idx) => (
                        <div key={idx} className="mb-8">
                            {/* 이미지 섹션 판별 */}
                            {section.title.match(/^\d+\./) ? (
                                <img src={section.content} alt={section.title} />
                            ) : (
                                <>
                                    <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                                    <p className="whitespace-pre-line">{section.content}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}