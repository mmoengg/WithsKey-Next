import ArticleCategoryList from "@/components/article/ArticleCategoryList";

import { Suspense } from "react";

export default function ArticlePage() {
    return (
        <Suspense fallback={<div>로딩 중...</div>}>
            <ArticleCategoryList />
        </Suspense>
    )
}
