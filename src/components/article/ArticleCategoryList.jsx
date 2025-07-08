'use client'

import TUTORIAL_ARTICLE_LIST from "@/data/tutorialArticles";
import BLENDED_ARTICLE_LIST from "@/data/blendedArticles";
import BOURBON_ARTICLE_LIST from "@/data/bourbonArticles";
import SINGLEMALT_ARTICLE_LIST from "@/data/singlemaltArticles";

import ArticleCategoryTabs from "./ArticleCategoryTabs";
import ArticleCategoryCard from "./ArticleCategoryCard";

import { Suspense } from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const ARTICLE_LISTS = {
    tutorial: TUTORIAL_ARTICLE_LIST,
    blended: BLENDED_ARTICLE_LIST,
    bourbon: BOURBON_ARTICLE_LIST,
    singlemalt: SINGLEMALT_ARTICLE_LIST,
};

export default function ArticleCategoryList() {
    const [activeCategory, setActiveCategory] = useState("tutorial");

    const searchParams = useSearchParams();
    const categoryFromQuery = searchParams.get("category");
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    }
    useEffect(() => {
        handleCategoryClick(categoryFromQuery || "tutorial");
    }, []);

    // 현재 카테고리의 리스트
    const currentList = ARTICLE_LISTS[activeCategory] || [];
    console.log('currentList', currentList);


    return (
        <Suspense fallback={<div>로딩 중...</div>}>
            <section className="w-full h-auto min-h-[calc(100dvh-55px)]">
                {/* 카테고리 */}
                <ArticleCategoryTabs activeCategory={activeCategory} onCategoryClick={handleCategoryClick}/>
                {/* 해당 콘텐츠 */}
                <ul className="w-full h-full flex flex-wrap">
                    {currentList.map((item, idx) => (
                        <ArticleCategoryCard
                            key={item.id}
                            idx={idx}
                            subtitle={item.subtitle}
                            activeCategory={activeCategory}
                            total={currentList.length}
                            {...item}
                        />
                    ))}
                </ul>
            </section>
        </Suspense>
    );
}
