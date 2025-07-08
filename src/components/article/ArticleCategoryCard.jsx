'use client';

import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";

// 화면 너비에 따라 한 줄에 표시할 아이템 수를 결정하는 함수
function getItemsPerRow(width) {
    if (width < 768) return 1;
    if (width < 1024) return 2;
    return 3;
}

export default function ArticleCategoryCard({ activeCategory, idx, id, label, subtitle, main_image_url, total}) {
    const [itemsPerRow, setItemsPerRow] = useState(0);

    useEffect(() => {
        setItemsPerRow(getItemsPerRow(window.innerWidth));
        function handleResize() {
            setItemsPerRow(getItemsPerRow(window.innerWidth));
        }

        window.addEventListener("resize", handleResize);
        // 컴포넌트 언마운트 시 이벤트 제거
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // 마지막 줄의 시작 인덱스 계산
    const lastRowStart = total - (total % itemsPerRow === 0 ? itemsPerRow : total % itemsPerRow);
    const isLastRow = idx >= lastRowStart;

    return (
        <li className={`min-w-full md:min-w-1/2 lg:min-w-1/3 min-h-[calc(50dvh-55px)] p-4 flex flex-col border-b-base border-r-base nth-child-3:border-0 ${isLastRow ? "last-row" : ""}`}>
            <div className="w-full h-full flex justify-between flex-col gap-12">

                <div className="w-full h-auto relative flex-1">
                    {activeCategory === "tutorial" && (
                        <Image
                            src={main_image_url}
                            alt={label}
                            fill
                            sizes="100dvw"
                            className="object-cover bg-white"
                        />
                    )}
                    {activeCategory !== "tutorial" && (
                        <Image
                            src={main_image_url}
                            alt={label}
                            fill
                            sizes="100dvw"
                            className="p-6 object-contain bg-white"
                        />
                    )}
                </div>

                <div className="flex flex-1 flex-col gap-5">
                    <h3 className="text-3xl font-eulyoo">{label}</h3>
                    <p className="text-sm">{subtitle}</p>
                </div>
                <Link href={`/article/${activeCategory}/${id}`}
                    className="w-full h-[44px] mb-10 border border-surface rounded bg-primary text-[14px] hover:bg-background transition fcc cursor-pointer"
                >자세히 보기</Link>
            </div>
        </li>
    );
}