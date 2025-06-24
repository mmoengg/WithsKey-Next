import ARTICLE_CATEGORY_LIST from "@/data/articleCategoryList";
import ArticleCategoryCard from "./ArticleCategoryCard";


export default function ArticleCategoryList() {
    return (
        <section className="w-full h-screen flex flex-col items-center justify-center bg-[#1E0201]">
            <div className="w-full max-w-[1280px] mt-[60px] px-4">
                <h2 className="text-3xl font-bold text-center mb-4 text-white">위스키의 세계</h2>
                <p className="text-center text-lg text-white mb-12">
                    다양한 위스키의 종류와 특징을 한눈에 알아보세요. 초보자도 쉽게 이해할 수 있도록 핵심 정보를 정리했습니다.
                </p>
                <ul className="w-full flex gap-12 pb-12">
                    {ARTICLE_CATEGORY_LIST.slice(0, 2).map((cat) => (
                        <ArticleCategoryCard key={cat.title} {...cat} />
                    ))}
                </ul>
                <ul className="w-full flex gap-12">
                    {ARTICLE_CATEGORY_LIST.slice(2, 4).map((cat) => (
                        <ArticleCategoryCard key={cat.title} {...cat} />
                    ))}
                </ul>
            </div>
        </section>
    );
}
