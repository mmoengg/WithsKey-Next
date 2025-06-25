import ARTICLE_CATEGORY_LIST from "@/data/articleCategoryList";
import ArticleCategoryCard from "./ArticleCategoryCard";


export default function ArticleCategoryList() {
    return (
        <section className="w-full h-[calc(100dvh-55px)]">
            <ul className="w-full h-[55px] border-b-[1px] border-[var(--border-base)] flex">
                <li className="w-4/4 h-full px-4 border-l-[1px] border-[var(--border-base)] bg-[var(--primary-base)] flex items-center">Tutorial</li>
                <li className="w-1/4 h-full px-4 border-l-[1px] border-[var(--border-base)] flex items-center">Blended</li>
                <li className="w-1/4 h-full px-4 border-l-[1px] border-[var(--border-base)] flex items-center">Bourbon</li>
                <li className="w-1/4 h-full px-4 border-l-[1px] border-[var(--border-base)] flex items-center">Single Malt</li>
            </ul>
            <ul className="w-full min-h-[calc(100%-55px)] flex flex-wrap">
                {ARTICLE_CATEGORY_LIST.map((cat) => (
                    <ArticleCategoryCard key={cat.title} {...cat} />
                ))}
            </ul>
        </section>
    );
}
