"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// 화면 너비에 따라 한 줄에 표시할 아이템 수를 결정하는 함수
function getItemsPerRow(width) {
    if (width < 768) return 1;
    if (width < 1024) return 3;
    return 4;
}

export default function BoardCard({ idx, total, id, name, image, title, content, like, comment, created_at }) {
    const [itemsPerRow, setItemsPerRow] = useState(0);

    useEffect(() => {
        function handleResize() {
            setItemsPerRow(getItemsPerRow(window.innerWidth));
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        // 컴포넌트 언마운트 시 이벤트 제거
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // 마지막 줄의 시작 인덱스 계산
    const lastRowStart = total - (total % itemsPerRow === 0 ? itemsPerRow : total % itemsPerRow);
    const isLastRow = idx >= lastRowStart;

    return (
        <li className={`w-full md:w-1/3 lg:w-1/4 min-h-[calc((100dvh-55px)/4)] text-surface border-b-base border-r-base nth-child-4:border-0 
                 ${isLastRow ? "last-row" : ""} `}>
            <Link
                href={`/board/${id}`}
                className={`h-full p-8 flex flex-col cursor-pointer`}
            >
                    {/*${idx < lastRowStart ? "border-b-base" : ''}*/}
                    {/*${isMultipleOfFive ? "" : 'border-r-base'} */}
                <h3 className="text-2xl font-light font-eulyoo">방문했어요</h3>
                <p className="flex-1">
                    엔트리급 위스키 소개가 좋은 것 같아요
                </p>
                <div className="text-sm fcb">
                    <span>by {name}</span>
                    <span>{comment}</span>
                </div>
            </Link>
        </li>
    )
}